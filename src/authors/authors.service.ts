import { Injectable } from '@nestjs/common';
import { Author } from './authors.model';

@Injectable()
export class AuthrosSerivce {
    async findOneById(id: string): Promise<Author> {
        return {
            id: id,
            lastName: "lastName",
            firstName: "firstName"
        };
    }
}
