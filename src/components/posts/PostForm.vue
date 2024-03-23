<script setup lang="ts">
import { ref, watch } from 'vue';
import { categories } from '@/constants/categories';
import { XMarkIcon } from '@heroicons/vue/24/solid';

const props = defineProps({
	title: String,
	content: String,
	category: String,
});

const emit = defineEmits(['update:title', 'update:content', 'update:category']);

const selectedCategory = ref(props.category);

watch(selectedCategory, newValue => {
	emit('update:category', newValue);
});

watch(
	() => props.category,
	newValue => {
		selectedCategory.value = newValue;
	},
);

const selectCategory = (category: string) => {
	selectedCategory.value = category;
};

const getCategoryColor = (category: string, selected = false) => {
	const colors = {
		Personal: selected
			? 'bg-blue-200 text-blue-1000'
			: 'bg-blue-100 text-blue-800',
		Work: selected
			? 'bg-green-200 text-green-1000'
			: 'bg-green-100 text-green-800',
		Study: selected
			? 'bg-yellow-200 text-yellow-1000'
			: 'bg-yellow-100 text-yellow-800',
		Health: selected ? 'bg-red-200 text-red-1000' : 'bg-red-100 text-red-800',
		Other: selected
			? 'bg-gray-200 text-gray-1000'
			: 'bg-gray-100 text-gray-800',
	};

	return (
		colors[category as keyof typeof colors] ||
		(colors ? 'bg-blue-200 text-blue-1000' : 'bg-blue-100 text-blue-800')
	);
};
</script>

<template>
	<form class="flex flex-col gap-8">
		<div class="flex flex-col">
			<div class="flex items-center justify-between pb-4">
				<label for="title" class="text-2xl font-bold">Task Name</label>
				<button>
					<XMarkIcon class="h-4 w-4" />
				</button>
			</div>
			<input
				:value="title"
				@input="
					$emit('update:title', ($event.target as HTMLInputElement).value)
				"
				type="text"
				class="w-full p-2 pl-4 text-sm rounded-xl bg-gray-100"
				placeholder="Title"
				id="title"
				autofocus
			/>
		</div>

		<div class="flex flex-col">
			<label for="content" class="text-2xl font-bold pb-4">Description</label>
			<textarea
				:value="content"
				@input="
					$emit('update:content', ($event.target as HTMLInputElement).value)
				"
				class="w-full p-2 pl-4 text-sm rounded-xl bg-gray-100"
				placeholder="Content"
				id="content"
				rows="5"
			/>
		</div>

		<div class="flex flex-col">
			<label class="text-2xl font-bold pb-4">Category</label>
			<div class="flex flex-wrap gap-3">
				<div
					v-for="category in categories"
					:key="category.id"
					class="flex items-center gap-2"
				>
					<div
						:class="`${getCategoryColor(category.name, selectedCategory === category.name)} text-xs px-2.5 py-0.5 rounded-full cursor-pointer`"
						@click="selectCategory(category.name)"
					>
						{{ category.name }}
					</div>
				</div>
			</div>
		</div>

		<div class="flex justify-center gap-2 mt-4">
			<slot name="actions"></slot>
		</div>
	</form>
</template>

<style lang="scss" scoped></style>
