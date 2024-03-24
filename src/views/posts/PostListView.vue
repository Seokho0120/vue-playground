<script setup lang="ts">
import { computed, ref } from 'vue';
import PostItem from '@/components/posts/PostItem.vue';
import PostFilter from '@/components/posts/PostFilter.vue';
import PostHeader from '@/components/posts/PostHeader.vue';
import PostModal from '@/components/posts/PostModal.vue';
import { deletePosts, getPosts } from '@/api/posts';
import { useCounterStore } from '@/stores/counter';
import { Post } from '@/types/posts';
import { storeToRefs } from 'pinia';

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
	newStatus: 'New',
	progressStatus: 'In Progress',
	doneStatus: 'Done',
});
const title = ref<string>('');
const counterStore = useCounterStore();
const { counter } = storeToRefs(counterStore);

const fetchPosts = async () => {
	try {
		const { data } = await getPosts();
		posts.value = data;
		counterStore.setCounter(data.length);
	} catch (err) {
		console.error(err);
	}
};
fetchPosts();

const filteredNewPosts = computed(() =>
	posts.value.filter(post => post.status === 'New'),
);

const filteredInProgressPosts = computed(() =>
	posts.value.filter(post => post.status === 'In Progress'),
);

const filteredDonePosts = computed(() =>
	posts.value.filter(post => post.status === 'Done'),
);

const openModal = (post: Post) => {
	selectedPost.value = post;
	showModal.value = !showModal.value;
};

const deleteTask = async (postId: string) => {
	await deletePosts(postId);
	posts.value = posts.value.filter(post => post.id !== postId);
	showModal.value = false;
	fetchPosts();
};

// const filteredPosts = computed(() => {
// 	if (!title.value) {
// 		return posts.value;
// 	}

// 	// 대소문자 구분없이 검색 필터
// 	return posts.value.filter(post =>
// 		post.title.toLowerCase().includes(title.value.toLowerCase()),
// 	);
// });

// const goToWrite = () => {
// 	router.push({
// 		name: 'PostCreate',
// 	});
// };
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
			<!-- New Posts -->
			<div class="flex flex-col gap-4">
				<PostHeader :counter="counter" :status="status.newStatus" />
				<div
					v-for="post in filteredNewPosts"
					:key="post.id"
					class="w-full cursor-pointer"
				>
					<PostItem
						@click="openModal(post)"
						:title="post.title"
						:content="post.content"
						:created-at="post.createdAt"
						:category="post.category"
						:status="post.status"
					/>
				</div>
			</div>

			<!-- In Progress -->
			<div class="flex flex-col gap-4">
				<PostHeader :counter="counter" :status="status.progressStatus" />
				<div
					v-for="post in filteredInProgressPosts"
					:key="post.id"
					class="w-full cursor-pointer"
				>
					<PostItem
						@click="openModal(post)"
						:title="post.title"
						:content="post.content"
						:created-at="post.createdAt"
						:category="post.category"
						:status="post.status"
					/>
				</div>
			</div>

			<!-- Done -->
			<div class="flex flex-col gap-4">
				<PostHeader :counter="counter" :status="status.doneStatus" />
				<div
					v-for="post in filteredDonePosts"
					:key="post.id"
					class="w-full cursor-pointer"
				>
					<PostItem
						@click="openModal(post)"
						:title="post.title"
						:content="post.content"
						:created-at="post.createdAt"
						:category="post.category"
						:status="post.status"
					/>
				</div>
			</div>
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
