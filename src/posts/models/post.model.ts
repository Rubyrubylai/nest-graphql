import { Field, ObjectType, Int, Directive } from '@nestjs/graphql';
import { loggerMiddleware } from 'src/middleware/logger.middleware';

@ObjectType()
export class Post {
  @Field(type => Int)
  id: number;

  @Directive('@upper')
  @Field({middleware: [loggerMiddleware]})
  title: string;

  @Field(type => Int, { nullable: true })
  votes?: number;
}
