import { Field, ObjectType, Int, Directive } from '@nestjs/graphql';
import { loggerMiddleware } from '../../middleware/logger.middleware';

@ObjectType({ description: 'post' })
export class Post {
  @Field(type => Int)
  id: number;

  @Directive('@upper')
  @Field({middleware: [loggerMiddleware]})
  title: string;

  @Field(type => Int, { nullable: true })
  votes?: number;
}
