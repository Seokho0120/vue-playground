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
				<p>{{ modifiedDate }}</p>
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

<script setup>
import { getPostById } from '@/api/posts';
import { inject, ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const postId = route.params.id;

const post = ref({
	title: null,
	content: null,
	createdAt: null,
	category: null,
});

const fetchPost = async () => {
	try {
		const { data } = await getPostById(postId);
		setPost(data);
	} catch (error) {
		console.error('error', error);
	}
};

const setPost = ({ title, content, createdAt, category }) => {
	post.value.title = title;
	post.value.content = content;
	post.value.createdAt = createdAt;
	post.value.category = category;
};
fetchPost();

const dayjs = inject('dayjs');

const modifiedDate = computed(() =>
	dayjs(post.value.createdAt).format('YYYY-MM-DD'),
);

const categoryColor = computed(() => {
	const colors = {
		Personal: 'bg-blue-100 text-blue-800',
		Work: 'bg-green-100 text-green-800',
		Study: 'bg-yellow-100 text-yellow-800',
		Health: 'bg-red-100 text-red-800',
		Other: 'bg-gray-100 text-gray-800',
	};

	return colors[post.value.category] || 'bg-blue-100';
});
</script>

<style lang="scss" scoped></style>
