import { Field, ObjectType, Int } from '@nestjs/graphql';
import { Post } from '../../posts/models/post.model';

@ObjectType()
export class Author {
  @Field(type => Int)
  id: number;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field(type => [Post], { nullable: 'items' })  // array's items (not the array itself) are nullable
  posts: Post[];
}
