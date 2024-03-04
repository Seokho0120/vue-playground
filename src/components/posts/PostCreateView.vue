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
	<PostForm v-model:title="form.title" v-model:content="form.content" />
</template>

<script setup>
import { ref } from 'vue';
import PostForm from '@/components/posts/PostForm.vue';

const form = ref({
	title: null,
	content: null,
});
</script>

<style scoped></style>
