import type { FetchPostsResponse, Post } from '@/types/posts';
import axios from 'axios';

export function getPosts(): Promise<FetchPostsResponse> {
	return axios
		.get<Post[]>('http://localhost:4000/posts')
		.then(response => ({ data: response.data }));

	// return axios.get<Post[]>('http://localhost:4000/posts');
}

export function getPostById(id: string) {
	return axios.get(`http://localhost:4000/posts/${id}`);
}

export function createPosts(data: Post) {
	return axios.post('http://localhost:4000/posts', data);
}

// export function updatePosts(id, data) {
// 	return axios.patch(`http://localhost:4000/posts/${id}`, data);
// }

export function deletePosts(id: string) {
	return axios.delete(`http://localhost:4000/posts/${id}`);
}
