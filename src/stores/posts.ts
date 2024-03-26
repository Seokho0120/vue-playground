import { defineStore } from 'pinia';

export const usePostStore = defineStore('posts', {
	state: () => ({
		postsUpdated: false,
	}),

	actions: {
		setPostsUpdated(isUpdated: boolean) {
			this.postsUpdated = isUpdated;
		},
	},
});
