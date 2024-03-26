<script setup lang="ts">
import { ref, watch } from 'vue';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';

defineProps<{
	title: string;
}>();

const emit = defineEmits<{
	(e: 'update:title', newValue: string): void;
}>();
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
	<form @submit.prevent>
		<div
			class="flex items-center border bg-gray-100 rounded-xl overflow-hidden"
		>
			<MagnifyingGlassIcon class="h-4 w-4 text-gray-500 ml-3" />
			<input
				:value="title"
				@input="changeTitle"
				placeholder="Search for Tasks Title"
				type="text"
				class="w-full flex-1 p-2 pl-2 text-sm bg-transparent outline-none"
			/>
		</div>
	</form>
</template>

<style lang="scss" scoped></style>
