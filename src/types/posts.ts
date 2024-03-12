export interface Post {
	title: string;
	content: string;
	createdAt: number;
	id?: number;
	category: string;
}

export interface FetchPostsResponse {
	data: Post[];
}

export type Form = Omit<Post, 'id' | 'createdAt'>;
