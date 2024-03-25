<script setup lang="ts">
import { computed } from 'vue';
import PostHeader from '@/components/posts/PostHeader.vue';
import PostItem from '@/components/posts/PostItem.vue';
import { Post } from '@/types/posts';

const props = defineProps<{
	posts: Post[];
	status: string;
}>();

const filterPostsByStatus = computed(() =>
	props.posts.filter(post => post.status === props.status),
);

const emit = defineEmits<{
	(e: 'openModal', id: string): void;
}>();

const openModal = (id: string) => {
	emit('openModal', id);
};
</script>

<template>
	<div class="flex flex-col gap-4">
		<PostHeader :counter="filterPostsByStatus.length" :status="status" />
		<div
			v-for="post in filterPostsByStatus"
			:key="post.id"
			class="w-full cursor-pointer"
		>
			<PostItem
				@click="openModal(post.id as string)"
				:title="post.title"
				:content="post.content"
				:created-at="post.createdAt"
				:category="post.category"
				:status="post.status"
			/>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
