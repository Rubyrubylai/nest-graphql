import { Field, ObjectType, Int, Directive } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field(type => Int)
  id: number;

  @Directive('@upper')
  @Field()
  title: string;

  @Field(type => Int, { nullable: true })
  votes?: number;
}
