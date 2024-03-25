<script setup lang="ts">
import { CheckCircleIcon, ClockIcon } from '@heroicons/vue/24/outline';
import { EllipsisHorizontalIcon } from '@heroicons/vue/24/solid';

defineProps<{
	status: string;
	counter: number;
}>();
</script>

<template>
	<div class="flex items-center border-b-2 pb-8 mb-4 gap-4">
		<span
			:class="{
				'bg-[#33ca25]': status === 'New',
				'bg-[#6433ca]': status === 'In Progress',
				'bg-[#ac4cdc]': status === 'Done',
			}"
			class="px-4 py-1 rounded-3xl text-white"
		>
			{{ status }}
		</span>

		<div class="flex items-center gap-2">
			<div class="flex items-center gap-1">
				<CheckCircleIcon class="h-4 w-4 text-gray-500" />
				<span class="text-sm text-gray-500">{{ counter }} Task</span>
			</div>

			<div class="flex items-center gap-1">
				<ClockIcon class="h-4 w-4 text-gray-500" />
				<span class="text-sm text-gray-500">284 Hours</span>
			</div>
		</div>
		<EllipsisHorizontalIcon class="h-6 w-6 text-gray-500 ml-auto" />
	</div>
</template>

<style lang="scss" scoped></style>
