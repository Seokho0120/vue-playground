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
			v-for="{
				category,
				content,
				createdAt,
				status,
				title,
				id,
			} in filterPostsByStatus"
			:key="id"
			class="w-full cursor-pointer"
		>
			<PostItem
				@click="openModal(id as string)"
				:title="title"
				:content="content"
				:created-at="createdAt"
				:category="category"
				:status="status"
			/>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
