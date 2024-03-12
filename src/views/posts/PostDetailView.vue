<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { getPostById } from '@/api/posts';
import type { Post } from '@/types/posts';

const route = useRoute();
const postId = Number(route.params.id);

const post = ref({
	title: '',
	content: '',
	createdAt: 0,
	category: '',
});

const fetchPost = async () => {
	try {
		const { data } = await getPostById(postId);
		console.log('data', data);
		setPost(data);
	} catch (error) {
		console.error('error', error);
	}
};

const setPost = ({ title, content, createdAt, category }: Post) => {
	post.value.title = title;
	post.value.content = content;
	post.value.createdAt = createdAt;
	post.value.category = category;
};
fetchPost();

const categoryColor = computed(() => {
	const colors = {
		Personal: 'bg-blue-100 text-blue-800',
		Work: 'bg-green-100 text-green-800',
		Study: 'bg-yellow-100 text-yellow-800',
		Health: 'bg-red-100 text-red-800',
		Other: 'bg-gray-100 text-gray-800',
	};

	return colors[post.value.category as keyof typeof colors] || 'bg-blue-100';
});
</script>

<template>
	<div class="flex items-center justify-between pb-4">
		<div v-if="$route.path !== '/'" class="flex items-center">
			<RouterLink to="/" class="text-[#ee3914]">&lt; Prev</RouterLink>
		</div>
	</div>

	<div>
		<div class="flex item-center pb-4">
			<h2 class="text-3xl font-bold">{{ post.title }}</h2>
		</div>

		<div class="flex flex-col gap-4">
			<div class="flex gap-4">
				<p class="font-bold">Due Date</p>
				<p>{{ $dayjs(post.createdAt).format('YYYY-MM-DD') }}</p>
			</div>

			<div class="flex gap-4">
				<p class="font-bold">Status</p>
				<div>
					<span
						:class="`${categoryColor} text-xs me-2 px-2.5 py-0.5 rounded-full`"
					>
						{{ post.category }}
					</span>
				</div>
			</div>

			<div class="flex flex-col gap-2">
				<p class="font-bold">Description</p>
				<p>{{ post.content }}</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
