/*
provide the instructions for turning a GraphQL operation (a query, mutation, or subscription) into data
*/
import { Resolver, Query, Int, Args, ResolveField, Parent } from '@nestjs/graphql';

import { AuthrosSerivce } from './service/authors.service';
import { PostsSerivce } from '../posts/service/posts.service';
import { Author } from './model/authors.model';
import { Post } from '../posts/models/post.model';
import { GetAuthorArgs } from './dto/authors.dto';


@Resolver(Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthrosSerivce,
    private postsSerivce: PostsSerivce
  ) {}

  @Query(returns => Author, { name: 'authors'})
  async getAuthors(@Args() args: GetAuthorArgs) {  // 自定義 dto
    return this.authorsService.findAll(args)
  }

  @Query(returns => Author, { name: 'author'})  // generates a GraphQL schema query type name based on the method name
  async getAuthor(@Args('id', { type: () => Int }) id: number) {  // number TypeScript type doesn't give enough information about the expected GraphQL representation (e.g., Int vs. Float). Thus we have to explicitly pass the type reference
    return this.authorsService.findOneById(id)
  }

  @ResolveField('posts', returns => [Post])  // 解析 Author 類型中的 posts 字段
  async getPosts(@Parent() author: Author) {
    const { id } = author;
    return this.postsSerivce.findAll(id);
  }
}
