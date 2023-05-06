import { Module } from '@nestjs/common';
import { AuthorsResolver } from './authors.resolver';
import { AuthrosSerivce } from './authors.service';

@Module({
    providers: [AuthorsResolver, AuthrosSerivce]
})
export class AuthorsModule {}
