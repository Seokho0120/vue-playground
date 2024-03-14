import type { FetchPostsResponse, Post, Form } from '@/types/posts';
import api from './index';

export function getPosts(): Promise<FetchPostsResponse> {
	return api().get<Post[]>('');
}

export function getPostById(id: string) {
	return api().get(`/${id}`);
}

export function createPosts(data: Post) {
	return api().post('', data);
}

export function updatePost(id: string, data: Form) {
	return api().patch(`/${id}`, data);
}

export function deletePosts(id: string) {
	return api().delete(`/${id}`);
}
