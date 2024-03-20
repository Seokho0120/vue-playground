<script setup lang="ts">
import { computed, ref } from 'vue';
// import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import PostItem from '@/components/posts/PostItem.vue';
import PostFilter from '@/components/posts/PostFilter.vue';
import PostHeader from '@/components/posts/PostHeader.vue';
import PostModal from '@/components/posts/PostModal.vue';
import { getPosts } from '@/api/posts';
import { useCounterStore } from '@/stores/counter';
import { Post } from '@/types/posts';

// const router = useRouter();
const posts = ref<Post[]>([]);
const status = ref({
	newStatus: 'New',
	progressStatus: 'In Progress',
	doneStatus: 'Done',
});
const title = ref<string>('');
const showModal = ref<boolean>(false);
const counterStore = useCounterStore();
const { counter } = storeToRefs(counterStore);

// const goPage = (id: string) => {
// 	router.push({
// 		name: 'PostDetail',
// 		params: {
// 			id,
// 		},
// 	});
// };

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

const openModal = () => {
	showModal.value = !showModal.value;
};
</script>

<template>
	<!-- <div v-if="$route.path === '/'" class="flex items-center">
		<RouterLink to="/table" class="text-[#ee3914]">Table &gt;</RouterLink>
	</div> -->

	<div class="flex items-center justify-between py-4 gap-2">
		<!-- <div v-if="$route.path !== '/'" class="flex items-center">
			<RouterLink to="/" class="text-[#ee3914]">&lt; Prev</RouterLink>
		</div> -->

		<h2 class="text-3xl font-bold">Tasks</h2>
		<PostFilter
			:title="title"
			@update:title="title = $event"
			class="w-[320px]"
		/>

		<!-- <div
			class="flex items-center"
			:class="{ invisible: $route.path === '/posts' }"
		>
			<RouterLink to="/posts" class="text-[#ee3914]">See All &gt;</RouterLink>
		</div> -->
	</div>

	<div class="flex flex-col bg-gray-100 p-8 rounded-xl">
		<!-- <span
			class="flex items-center font-light px-4 py-1 border-[1px] border-gray-200 rounded-3xl"
		>
			new
		</span> -->

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
						@click="openModal"
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
						@click="openModal"
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
						@click="openModal"
						:title="post.title"
						:content="post.content"
						:created-at="post.createdAt"
						:category="post.category"
						:status="post.status"
					/>
				</div>
			</div>
		</div>

		<!-- <button
		@click="goToWrite"
		type="button"
		class="right-[30%] bottom-[7%] text-4xl w-16 h-16 flex items-center justify-center text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 rounded-full"
	>
		<span>+</span>
	</button> -->
	</div>

	<PostModal v-if="showModal" />
</template>

<style scoped></style>
@/stores/counter
