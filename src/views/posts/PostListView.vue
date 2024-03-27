<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import PostFilter from '@/components/posts/PostFilter.vue';
import PostModal from '@/components/posts/PostModal.vue';
import PostList from '@/components/posts/PostList.vue';
import { deletePosts, getPostById, getPosts } from '@/api/posts';
import { Post } from '@/types/posts';
import { usePostStore } from '@/stores/posts';

const postStore = usePostStore();

const posts = ref<Post[]>([]);
const selectedPost = ref<Post>({
	title: '',
	content: '',
	createdAt: 0,
	id: '',
	category: '',
	status: '',
});
const showModal = ref<boolean>(false);
const status = ref({
	new: 'New',
	progress: 'In Progress',
	done: 'Done',
});
const title = ref<string>('');

const fetchPosts = async () => {
	try {
		const { data } = await getPosts();
		posts.value = data;
	} catch (err) {
		console.error(err);
	}
};
onMounted(fetchPosts);

const openModal = async (id: string) => {
	try {
		const { data } = await getPostById(id);
		selectedPost.value = data;
		showModal.value = !showModal.value;
	} catch (err) {
		console.error(err);
	}
};

const deleteTask = async (postId: string) => {
	await deletePosts(postId);
	fetchPosts();
	showModal.value = false;
};

watch(
	() => postStore.postsUpdated,
	newValue => {
		if (newValue) {
			fetchPosts();
			postStore.setPostsUpdated(false);
		}
	},
	{ immediate: true },
);
</script>

<template>
	<div class="flex items-center justify-between py-4 gap-2">
		<h2 class="text-3xl font-bold">Tasks</h2>
		<PostFilter
			:title="title"
			@update:title="title = $event"
			class="w-[320px]"
		/>
	</div>

	<div class="flex flex-col bg-gray-100 p-8 rounded-xl">
		<div class="grid grid-cols-3 gap-6">
			<PostList :posts="posts" :status="status.new" @openModal="openModal" />
			<PostList
				:posts="posts"
				:status="status.progress"
				@openModal="openModal"
			/>
			<PostList :posts="posts" :status="status.done" @openModal="openModal" />
		</div>
	</div>

	<PostModal
		v-if="showModal"
		v-model:showModal="showModal"
		:selectedPost="selectedPost"
		@deleteTask="deleteTask"
		@updateSuccess="fetchPosts"
	/>
</template>

<style scoped></style>
