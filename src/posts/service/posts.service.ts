import { Injectable } from '@nestjs/common';
import { Post } from '../models/post.model';

@Injectable()
export class PostsSerivce {
	async findAll(authorId: number): Promise<[Post]> {
		return [{
			id: authorId,
			title: 'post',
			votes: 2,
		}];
	}
}
