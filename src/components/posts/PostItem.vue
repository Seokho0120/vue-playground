<template>
	<div
		class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
	>
		<!-- <div class="h-full">
			<img
				class="object-cover w-full h-full rounded-t-lg md:rounded-none md:rounded-s-lg"
				src="../../assets/posts/best-react-practices.png"
				alt="best-react-practices"
			/>
		</div> -->
		<div class="flex flex-col justify-between p-4 leading-normal">
			<h5
				class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
			>
				{{ title }}
			</h5>
			<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
				{{ content }}
			</p>
			<p>{{ modifiedDate }}</p>
		</div>
	</div>
</template>

<script setup>
import { computed, inject } from 'vue';

const props = defineProps({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
	},
	createdAt: {
		type: [String, Date, Number],
	},
});

const dayjs = inject('dayjs');
const modifiedDate = computed(() =>
	dayjs(props.createdAt).format('YYYY-MM-DD HH:mm'),
);
</script>

<style scoped></style>
