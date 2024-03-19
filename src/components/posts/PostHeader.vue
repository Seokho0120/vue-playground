<script setup lang="ts">
defineProps({
	status: String,
	counter: Number,
});
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
	</div>
</template>

<style lang="scss" scoped></style>
