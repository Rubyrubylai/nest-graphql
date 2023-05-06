import { Injectable } from '@nestjs/common';
import { Author } from '../model/authors.model';
import { GetAuthorArgs } from '../dto/authors.dto';

@Injectable()
export class AuthrosSerivce {
	async findAll(args: GetAuthorArgs) {
		return {
			id: 1,
			lastName: args.lastName,
			firstName: args.firstName,
		}
	}

	async findOneById(id: number): Promise<Author> {
		return {
			id: id,
			lastName: "lastName",
			firstName: "firstName",
			posts: []
		};
	}
}
