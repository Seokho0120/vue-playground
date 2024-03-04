<template>
	<div class="flex items-center justify-between">
		<RouterLink
			to="/"
			class="flex items-center text-[#ee3914]"
			:class="{ invisible: $route.path === '/' }"
			>&lt; Prev</RouterLink
		>

		<div class="flex item-center pb-4">
			<h2 class="text-3xl font-bold">Add to Tasks</h2>
		</div>

		<RouterLink
			to="/posts"
			class="text-[#ee3914] flex items-center"
			:class="{ invisible: $route.path === '/posts' || '/posts/create' }"
			>See All &gt;</RouterLink
		>
	</div>

	<PostForm
		v-model:title="form.title"
		v-model:content="form.content"
		v-model:category="form.category"
		@submit.prevent="saveTask"
	>
		<template #actions>
			<button
				class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
			>
				Save
			</button>
		</template>
	</PostForm>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import PostForm from '@/components/posts/PostForm.vue';
import { createPosts } from '@/api/posts';

const router = useRouter();

const form = ref({
	title: null,
	content: null,
	category: null,
});

const saveTask = async () => {
	try {
		await createPosts({
			...form.value,
			createdAt: Date.now(),
		});
		router.push({ name: 'PostList' });
	} catch (error) {
		console.error('error', error);
	}
};
</script>

<style scoped></style>
