import { Field, ObjectType, ID } from '@nestjs/graphql';

@ObjectType()
export class Author {
  @Field(type => ID)
  id: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;
}
