import { Module } from '@nestjs/common';
import { AuthorsResolver } from './authors.resolver';
import { AuthrosSerivce } from './service/authors.service';
import { PostsModule } from 'src/posts/posts.moduel';

@Module({
    imports: [PostsModule],
    providers: [AuthorsResolver, AuthrosSerivce]
})
export class AuthorsModule {}
