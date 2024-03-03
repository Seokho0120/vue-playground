<template>
	<h2 class="text-3xl font-bold pb-4 pt-6">PostList</h2>
	<div class="grid grid-cols-3 gap-4">
		<div v-for="post in posts" :key="post.id">
			<PostItem
				:title="post.title"
				:content="post.content"
				:created-at="post.createdAt"
			/>
		</div>
	</div>
</template>

<script setup>
import PostItem from './posts/PostItem.vue';
import { ref } from 'vue';
import { getPosts } from '@/api/posts';

const posts = ref([]);

const fetchPosts = async () => {
	const { data } = await getPosts();
	posts.value = data;
};
fetchPosts();
</script>

<style lang="scss" scoped></style>
