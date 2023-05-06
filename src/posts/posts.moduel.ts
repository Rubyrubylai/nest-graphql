import { Module } from '@nestjs/common';
import { PostsSerivce } from '../posts/service/posts.service';

@Module({
    providers: [PostsSerivce],
    exports: [PostsSerivce],
})
export class PostsModule {}
