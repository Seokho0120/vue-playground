<template>
	<!-- <div class="h-full">
			<img
				class="object-cover w-full h-full rounded-t-lg md:rounded-none md:rounded-s-lg"
				src="../../assets/posts/best-react-practices.png"
				alt="best-react-practices"
			/>
		</div> -->
	<div
		class="flex flex-col bg-white border border-gray-100 rounded-lg shadow hover:bg-gray-100"
	>
		<div class="flex flex-col justify-between p-4">
			<div class="pb-4">
				<span
					:class="`${categoryColor} text-xs me-2 px-2.5 py-0.5 rounded-full`"
				>
					{{ category }}
				</span>
			</div>

			<h5
				class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white"
			>
				{{ title }}
			</h5>
			<p class="mb-3 font-normal text-gray-800 dark:text-gray-400">
				{{ content }}
			</p>
			<p class="text-sm text-gray-500">{{ modifiedDate }}</p>
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
	category: {
		type: String,
	},
});

const dayjs = inject('dayjs');

const modifiedDate = computed(
	() => dayjs(props.createdAt).format('YYYY-MM-DD'),
	// dayjs(props.createdAt).format('YYYY-MM-DD HH:mm'),
);

const categoryColor = computed(() => {
	const colors = {
		Personal: 'bg-blue-100 text-blue-800',
		Work: 'bg-green-100 text-green-800',
		Study: 'bg-yellow-100 text-yellow-800',
		Health: 'bg-red-100 text-red-800',
		Other: 'bg-gray-100 text-gray-800',
	};

	return colors[props.category] || 'bg-blue-100';
});
</script>

<style scoped></style>
