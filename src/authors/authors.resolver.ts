/*
provide the instructions for turning a GraphQL operation (a query, mutation, or subscription) into data
*/
import { Resolver, Query, Int, Args, ResolveField, Parent, Mutation, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

import { AuthrosSerivce } from './service/authors.service';
import { PostsService } from '../posts/service/posts.service';
import { CommentsService } from 'src/comments/service/comments.service';
import { Author } from './model/authors.model';
import { Post } from '../posts/models/post.model';
import { Comment } from 'src/comments/model/comments.model';
import { GetAuthorArgs } from './dto/authors.dto';
import { UpvotePostInput } from 'src/posts/dto/posts.dto';
import { CommentInput } from 'src/comments/dto/comments.dto';

const pubSub = new PubSub();

@Resolver(Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthrosSerivce,
    private postsService: PostsService,
    private commentsService: CommentsService,
  ) {}

  /*
  query {
    authors(lastName: "me", firstName: "I") {
      lastName
      firstName
    }
  }
  */
  @Query(returns => Author, { name: 'authors'})
  async getAuthors(@Args() args: GetAuthorArgs) {  // 自定義 dto
    return this.authorsService.findAll(args)
  }

  /*
  query {
    author(id: 1) {
      lastName
      firstName
      id
    }
  }
  */
  @Query(returns => Author, { name: 'author'})  // generates a GraphQL schema query type name based on the method name
  async getAuthor(@Args('id', { type: () => Int }) id: number) {  // number TypeScript type doesn't give enough information about the expected GraphQL representation (e.g., Int vs. Float). Thus we have to explicitly pass the type reference
    return this.authorsService.findOneById(id)
  }

  @ResolveField('posts', returns => [Post])  // 解析 Author 類型中的 posts 字段
  async getPosts(@Parent() author: Author) {
    const { id } = author;
    return this.postsService.findAll(id);
  }

  /*
  mutation {
    upvotePostArg(postId: 1) 
  }
  */
  @Mutation(returns => Int)
  async upvotePostArg(@Args({ name: 'postId', type: () => Int }) postId: number) {
    return this.postsService.upvoteById({ postId });
  }

  /*
  mutation {
    upvotePost(upvotePostData: {postId: 1}) 
  }
  */
  @Mutation(returns => Int)
  async upvotePost(@Args('upvotePostData') upvotePostData: UpvotePostInput) {
    return this.postsService.upvoteById(upvotePostData);
  }

  /*
  要先進行訂閱
  subscription {
    commentAdded {
      content
    }
  }
  */
  @Subscription(returns => Comment, { name: 'commentAdded' })
  commentAdded() {
    return pubSub.asyncIterator('commentAdded');  // takes care of subscribing to an event by calling PubSub#asyncIterator
  }

  /*
  server 主動進行發送
  mutation {
    addComment(postId: 1, comment: {id: 1, content: "check"}) {
      content
    }
  }
  */
  @Mutation(returns => Comment)
	async addComment(
		@Args('postId', { type: () => Int }) postId: number,
		@Args('comment', { type: () => CommentInput }) comment: CommentInput,
	) {
		const newComment = await this.commentsService.addComment({ id: postId, comment: comment });
		pubSub.publish('commentAdded', { commentAdded: newComment });
		return newComment;
	}

  @Query(returns => Date)
  async date() {
    return new Date()
  }
}
