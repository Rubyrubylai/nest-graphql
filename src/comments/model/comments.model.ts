import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class Comment {
  @Field(type => Int)
  id: number;

  @Field({ nullable: true })
  content?: string;
}
