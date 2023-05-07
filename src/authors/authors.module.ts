import { Module } from '@nestjs/common';
import { AuthorsResolver } from './authors.resolver';
import { AuthrosSerivce } from './service/authors.service';
import { PostsModule } from 'src/posts/posts.module';
import { CommentsModule } from 'src/comments/comments.module';

@Module({
    imports: [PostsModule, CommentsModule],
    providers: [AuthorsResolver, AuthrosSerivce],
})
export class AuthorsModule {}
