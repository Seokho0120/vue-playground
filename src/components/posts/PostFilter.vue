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
		<div class="flex relative">
			<div class="absolute top-3 flex items-center ps-3 pointer-events-none">
				<MagnifyingGlassIcon class="h-4 w-4" />
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
