<template>
	<!-- <button
		@click="goToWrite"
		type="button"
		class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
	>
		글쓰기
	</button> -->

	<PostFilter :title="title" @update:title="title = $event" />
	<div class="flex items-center justify-between">
		<div v-if="$route.path !== '/'" class="flex items-center">
			<RouterLink to="/" class="text-[#ee3914]">&lt; Prev</RouterLink>
		</div>

		<h2 class="text-3xl font-bold pb-4">Tasks</h2>

		<div
			class="flex items-center"
			:class="{ invisible: $route.path === '/posts' }"
		>
			<RouterLink to="/posts" class="text-[#ee3914]">See All &gt;</RouterLink>
		</div>
	</div>

	<div
		class="grid grid-cols-2 gap-4"
		:class="{
			'mt-6': $route.path === '/posts',
		}"
	>
		<!-- <div class="w-full cursor-pointer" v-for="post in posts" :key="post.id"> -->
		<div
			class="w-full cursor-pointer"
			v-for="post in filteredPosts"
			:key="post.id"
		>
			<PostItem
				@click="goPage(post.id)"
				:title="post.title"
				:content="post.content"
				:created-at="post.createdAt"
			/>
		</div>
	</div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { getPosts } from '@/api/posts';
import PostItem from '@/components/posts/PostItem.vue';
import PostFilter from '@/components/posts/PostFilter.vue';
import { useCounterStore } from '@/stores/couter';

const router = useRouter();
const posts = ref([]);
const title = ref('');
const counterStore = useCounterStore();

const goPage = id => {
	router.push({
		name: 'PostDetail',
		params: {
			id: id,
		},
	});
};

const fetchPosts = async () => {
	const { data } = await getPosts();
	posts.value = data;
	counterStore.setCouter(data.length);
};
fetchPosts();

const filteredPosts = computed(() => {
	if (!title.value) {
		return posts.value;
	}

	return posts.value.filter(post =>
		post.title.toLowerCase().includes(title.value.toLowerCase()),
	);
});

// const goToWrite = () => {
// 	router.push({
// 		name: 'PostCreate',
// 	});
// };
</script>

<style lang="scss" scoped></style>
