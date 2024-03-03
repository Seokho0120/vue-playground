import axios from 'axios';

export function getPosts() {
	return axios.get('http://localhost:3000/posts');
}

export function getPostById(id) {
	return axios.get(`http://localhost:3000/posts/${id}`);
}

export function createPosts(data) {
	return axios.post('http://localhost:3000/posts', data);
}

export function updatePosts(id, data) {
	return axios.patch(`http://localhost:3000/posts/${id}`, data);
}

export function deletePosts(id) {
	return axios.delete(`http://localhost:3000/posts/${id}`);
}
