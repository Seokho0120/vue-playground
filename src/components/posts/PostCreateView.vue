<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import PostForm from '@/components/posts/PostForm.vue';
import { createPosts } from '@/api/posts';
import type { Form } from '@/types/posts';

const router = useRouter();

const form = ref<Form>({
	title: '',
	content: '',
	category: '',
	status: '',
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

<template>
	<div class="flex items-center justify-between">
		<div class="flex item-center pb-4">
			<h2 class="text-3xl font-bold">Add to Tasks</h2>
		</div>
	</div>

	<PostForm
		v-model:title="form.title"
		v-model:content="form.content"
		v-model:category="form.category"
		@submit.prevent="saveTask"
	>
		<template #actions>
			<button
				class="font-medium text-sm px-8 py-2.5 text-center me-2 mb-2 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 rounded-lg"
			>
				Save
			</button>
		</template>
	</PostForm>
</template>

<style scoped></style>
