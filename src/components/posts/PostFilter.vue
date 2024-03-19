<script setup lang="ts">
import { ref, watch } from 'vue';

defineProps({
	title: String,
});

const emit = defineEmits(['update:title']);
const searchText = ref<string>('');

const changeTitle = (e: Event) => {
	const target = e.target as HTMLInputElement;
	searchText.value = target.value;
};

watch(searchText, newValue => {
	emit('update:title', newValue);
});
</script>

<template>
	<form @submit.prevent class="">
		<div class="relative">
			<div
				class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
			>
				<svg
					class="w-5 h-5 text-gray-500 dark:text-gray-400"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 20 20"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
					/>
				</svg>
			</div>
			<input
				:value="title"
				@input="changeTitle"
				placeholder="Search for Tasks Title"
				type="text"
				class="block w-full p-2 pl-10 text-sm rounded-xl bg-gray-100"
			/>
		</div>
	</form>
</template>

<style lang="scss" scoped></style>
