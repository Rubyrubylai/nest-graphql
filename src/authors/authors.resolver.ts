import { Resolver, Query, ID, Args } from '@nestjs/graphql';

import { AuthrosSerivce } from './authors.service';
import { Author } from './authors.model';

@Resolver(Author)
export class AuthorsResolver {
  constructor(private readonly authorsService: AuthrosSerivce) {}

  @Query(returns => Author)
  async author(@Args('id', { type: () => ID }) id: string) {
    return this.authorsService.findOneById(id)
  }
}