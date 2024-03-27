<script setup lang="ts">
import { ref, watch } from 'vue';
import { categories } from '@/constants/categories';
import { statuses } from '@/constants/statuses';
import { XMarkIcon } from '@heroicons/vue/24/solid';
import Dropdown from 'primevue/dropdown';

interface Colors {
	[key: string]: string;
}

interface Props {
	title: string;
	content: string;
	category: string;
	status?: string;
	createAt?: number;
	modelValue?: boolean;
}

const props = defineProps<Props>();

const emit = defineEmits([
	'update:title',
	'update:content',
	'update:category',
	'update:status',
	'update:createAt',
	'update:modelValue',
]);

const selectedCategory = ref<string>(props.category);
const selectedStatus = ref<{ name: string }>({ name: '' });

const closeModal = () => emit('update:modelValue', false);

const selectCategory = (category: string) => {
	selectedCategory.value = category;
	emit('update:category', category);
};

const categoryColors: Colors = {
	Personal: 'bg-blue-200 text-blue-1000',
	Work: 'bg-green-200 text-green-1000',
	Study: 'bg-yellow-200 text-yellow-1000',
	Health: 'bg-red-200 text-red-1000',
	Other: 'bg-gray-200 text-gray-1000',
};

const getCategoryColor = (category: string, selected = false): string => {
	const baseColor = categoryColors[category];

	return selected
		? baseColor
		: baseColor.replace('200', '100').replace('1000', '800');
};

watch(selectedStatus, newValue => {
	emit('update:status', newValue.name);
});
</script>

<template>
	<form class="flex flex-col gap-8">
		<div class="flex flex-col">
			<div class="flex items-center justify-between pb-4">
				<label for="title" class="text-2xl font-bold">Task Name</label>
				<button @click="closeModal">
					<XMarkIcon class="h-5 w-5" />
				</button>
			</div>
			<input
				:value="title"
				@input="
					$emit('update:title', ($event.target as HTMLInputElement).value)
				"
				type="text"
				class="w-full p-2 pl-4 text-sm rounded-xl bg-gray-100 focus:outline-none"
				placeholder="Title"
				id="title"
				autofocus
			/>
		</div>

		<div class="flex flex-col">
			<label class="text-2xl font-bold pb-4">Status</label>
			<Dropdown
				v-model="selectedStatus"
				:options="statuses"
				optionLabel="name"
				placeholder="Select a Status"
				class="w-full bg-gray-100"
			/>
		</div>

		<div class="flex flex-col">
			<label for="content" class="text-2xl font-bold pb-4">Description</label>
			<textarea
				:value="content"
				@input="
					$emit('update:content', ($event.target as HTMLInputElement).value)
				"
				class="w-full p-2 pl-4 text-sm rounded-xl bg-gray-100 focus:outline-none"
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

<style scoped></style>
