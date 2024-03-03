<template>
	<div>
		<h2>{{ post.title }}</h2>
		<p>{{ post.content }}</p>
		<p>{{ post.createdAt }}</p>
	</div>
</template>

<script setup>
import { getPostById } from '@/api/posts';
import { defineProps, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const postId = route.params.id;

const props = defineProps({
	id: Number,
});

const post = ref({
	title: null,
	content: null,
	createdAt: null,
});

const fetchPost = async () => {
	try {
		const { data } = await getPostById(postId);
		setPost(data);
	} catch (error) {
		console.error('error', error);
	}
};

const setPost = ({ title, content, createdAt }) => {
	post.value.title = title;
	post.value.content = content;
	post.value.createdAt = createdAt;
};
fetchPost();
</script>

<style lang="scss" scoped></style>
