<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { getPosts } from '@/api/posts';
import PostItem from '@/components/posts/PostItem.vue';
import PostFilter from '@/components/posts/PostFilter.vue';
import { useCounterStore } from '@/stores/couter';
import { Post } from '@/types/posts';

const router = useRouter();
const posts = ref<Post[]>([]);
const title = ref<string>('');
const counterStore = useCounterStore();

const goPage = (id: string) => {
	router.push({
		name: 'PostDetail',
		params: {
			id,
		},
	});
};

const fetchPosts = async () => {
	try {
		const { data } = await getPosts();
		posts.value = data;
		counterStore.setCouter(data.length);
	} catch (err) {
		console.error(err);
	}
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

const goToWrite = () => {
	router.push({
		name: 'PostCreate',
	});
};
</script>

<template>
	<PostFilter :title="title" @update:title="title = $event" />

	<div class="flex items-center justify-between">
		<div v-if="$route.path !== '/'" class="flex items-center">
			<RouterLink to="/" class="text-[#ee3914]">&lt; Prev</RouterLink>
		</div>

		<div class="flex item-center pb-4">
			<h2 class="text-3xl font-bold">Tasks</h2>
		</div>

		<div
			class="flex items-center"
			:class="{ invisible: $route.path === '/posts' }"
		>
			<RouterLink to="/posts" class="text-[#ee3914]">See All &gt;</RouterLink>
		</div>
	</div>

	<div class="grid grid-cols-2 gap-4 relative">
		<div
			v-for="{ id, category, content, createdAt, title } in filteredPosts"
			:key="id"
			class="w-full cursor-pointer"
		>
			<PostItem
				@click="goPage(id!)"
				:title="title"
				:content="content"
				:created-at="createdAt"
				:category="category"
			/>
		</div>
	</div>

	<button
		@click="goToWrite"
		type="button"
		class="absolute right-[30%] bottom-[7%] text-4xl w-16 h-16 flex items-center justify-center text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 rounded-full"
	>
		<span>+</span>
	</button>
</template>

<style scoped></style>
