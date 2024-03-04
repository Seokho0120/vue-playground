<template>
	<form class="flex flex-col gap-8">
		<div class="flex flex-col">
			<label for="title" class="text-2xl font-bold pb-4">Taks Name</label>
			<input
				:value="title"
				@input="$emit('update:title', $event.target.value)"
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
				@input="$emit('update:content', $event.target.value)"
				class="w-full p-2 pl-4 text-sm rounded-xl bg-gray-100"
				placeholder="Content"
				id="content"
				rows="5"
			/>
		</div>

		<div class="flex flex-col">
			<label class="text-2xl font-bold pb-4">Status</label>
			<div class="flex flex-wrap gap-3">
				<div
					v-for="category in CATEGORIES"
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

<script setup>
import { ref } from 'vue';

const CATEGORIES = [
	{
		name: 'Personal',
		id: 1,
	},
	{
		name: 'Work',
		id: 2,
	},
	{
		name: 'Study',
		id: 3,
	},
	{
		name: 'Health',
		id: 4,
	},
	{
		name: 'Other',
		id: 5,
	},
];

defineProps({
	title: String,
	content: String,
	category: String,
});

const emit = defineEmits(['update:title', 'update:content', 'update:category']);

let selectedCategory = ref('');

const selectCategory = category => {
	selectedCategory.value = category;
	emit('update:category', category);
};

const getCategoryColor = (category, selected = false) => {
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
		colors[category] ||
		(colors ? 'bg-blue-200 text-blue-1000' : 'bg-blue-100 text-blue-800')
	);
};
</script>

<style lang="scss" scoped></style>
