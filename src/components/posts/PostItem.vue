<script setup lang="ts">
import { computed } from 'vue';

interface Props {
	title: string;
	content: string;
	createdAt: string | Date | number;
	category: string;
	status: string;
}

interface Colors {
	[key: string]: string;
}

const props = defineProps<Props>();

const colors: Colors = {
	Personal: 'bg-blue-100 text-blue-800',
	Work: 'bg-green-100 text-green-800',
	Study: 'bg-yellow-100 text-yellow-800',
	Health: 'bg-red-100 text-red-800',
	Other: 'bg-gray-100 text-gray-800',
};

const categoryColor = computed(() => colors[props.category] || 'bg-blue-100');
</script>

<template>
	<div
		class="w-full flex flex-col bg-white border border-gray-100 rounded-lg shadow hover:bg-gray-100"
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
			<p class="mb-3 font-normal text-gray-800 dark:text-gray-400 truncate">
				{{ content }}
			</p>
			<p class="text-sm text-gray-500">
				{{ $dayjs(props.createdAt).format('YYYY-MM-DD') }}
			</p>
		</div>
	</div>
</template>

<style scoped></style>
