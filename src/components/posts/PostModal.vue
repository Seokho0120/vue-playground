<script setup lang="ts">
import { computed } from 'vue';
import { XMarkIcon } from '@heroicons/vue/24/solid';
// import { deletePosts } from '@/api/posts';
// import router from '@/router';

const props = defineProps<{
	showModal: boolean;
	selectedPost: {
		title: string;
		content: string;
		createdAt: number;
		category: string;
		status: string;
		id?: string;
	} | null;
}>();

const emit = defineEmits(['update:showModal', 'deleteTask']);

const closeModal = () => emit('update:showModal', false);

const categoryColor = computed(() => {
	const colors = {
		Personal: 'bg-blue-100 text-blue-800',
		Work: 'bg-green-100 text-green-800',
		Study: 'bg-yellow-100 text-yellow-800',
		Health: 'bg-red-100 text-red-800',
		Other: 'bg-gray-100 text-gray-800',
	};

	return (
		colors[props.selectedPost?.category as keyof typeof colors] || 'bg-blue-100'
	);
});

const removeTask = () => {
	emit('deleteTask', props.selectedPost?.id);
};
</script>

<template>
	<div
		class="w-full fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center"
	>
		<div class="w-1/3 m-4 bg-white p-8 rounded-lg shadow-lg">
			<h2 class="font-bold text-xl mb-4">{{ selectedPost?.title }}</h2>
			<p>{{ selectedPost?.content }}</p>
			<!-- <button
				@click="closeModal"
				class="mt-4 py-2 px-4 bg-red-500 text-white font-bold rounded"
			>
				Close
			</button> -->
		</div>
	</div>

	<div
		class="w-full fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center"
	>
		<div class="w-[700px] m-4 bg-white p-8 rounded-lg shadow-lg">
			<div class="flex items-center justify-between pb-4">
				<h2 class="text-3xl font-bold">{{ selectedPost?.title }}</h2>
				<div class="flex items-center gap-4">
					<span
						:class="{
							'bg-[#33ca25]': selectedPost?.status === 'New',
							'bg-[#6433ca]': selectedPost?.status === 'In Progress',
							'bg-[#ac4cdc]': selectedPost?.status === 'Done',
						}"
						class="text-sm px-4 py-1 rounded-3xl text-white"
					>
						{{ selectedPost?.status }}
					</span>
					<button @click="closeModal">
						<XMarkIcon class="h-4 w-4" />
					</button>
				</div>
			</div>

			<div class="flex flex-col gap-4">
				<div class="flex gap-4">
					<p class="font-bold">Due Date</p>
					<p>{{ $dayjs(selectedPost?.createdAt).format('YYYY-MM-DD') }}</p>
				</div>

				<div class="flex gap-4">
					<p class="font-bold">Category</p>
					<div>
						<span
							:class="`${categoryColor} text-xs me-2 px-2.5 py-0.5 rounded-full`"
						>
							{{ selectedPost?.category }}
						</span>
					</div>
				</div>

				<div class="flex flex-col gap-2">
					<p class="font-bold">Description</p>
					<p>{{ selectedPost?.content }}</p>
				</div>

				<div class="flex items-center gap-2 mt-8">
					<button
						class="bg-gray-100 hover:bg-gray-400 text-gray-800 font-semibold py-1 px-2 rounded"
					>
						Edit
					</button>
					<button
						@click="removeTask"
						class="bg-gray-100 hover:bg-gray-400 text-gray-800 font-semibold py-1 px-2 rounded"
					>
						Delete
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
