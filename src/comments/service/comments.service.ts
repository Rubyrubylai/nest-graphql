import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentsService {
	async addComment(input) {
		return {
			id: input.id,
			content: input.comment.content,
		}
	}
}
