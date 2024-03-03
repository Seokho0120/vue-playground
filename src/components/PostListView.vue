<template>
	<!-- <button
		@click="goToWrite"
		type="button"
		class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
	>
		글쓰기
	</button> -->

	<div class="flex justify-between">
		<div v-if="$route.path !== '/'" class="flex items-center">
			<RouterLink to="/" class="text-[#ee3914]">&lt; Prev</RouterLink>
		</div>
		<h2 class="text-3xl font-bold pb-4">Tasks</h2>
		<div class="flex items-center">
			<RouterLink to="/posts" class="text-[#ee3914]">See All &gt;</RouterLink>
		</div>
	</div>

	<div
		:class="{
			'grid grid-cols-2 gap-4': true,
			'mt-6': $route.path === '/posts',
		}"
	>
		<div class="w-full" v-for="post in posts" :key="post.id">
			<PostItem
				:title="post.title"
				:content="post.content"
				:created-at="post.createdAt"
			/>
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getPosts } from '@/api/posts';
import PostItem from './posts/PostItem.vue';

const router = useRouter();
const posts = ref([]);

const goToWrite = () => {
	router.push({
		name: 'PostCreate',
	});
};

const fetchPosts = async () => {
	const { data } = await getPosts();
	posts.value = data;
};
fetchPosts();
</script>

<style lang="scss" scoped></style>
import { useRouter } from 'vue-router';
