export interface Post {
	title: string;
	content: string;
	createdAt: number;
	id: string;
	category: string;
}

export interface FetchPostsResponse {
	data: Post[];
}
