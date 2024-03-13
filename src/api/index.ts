import axios from 'axios';

const SERVER_URL = `${import.meta.env.VITE_APP_API_URL}posts/`;

const api = () => {
	const instance = axios.create({
		baseURL: SERVER_URL,
	});

	return instance;
};

export default api;
