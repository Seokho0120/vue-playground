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
			<label for="content" class="text-2xl font-bold pb-4">Content</label>
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
			<label class="text-2xl font-bold pb-4">Category</label>
			<div class="flex flex-wrap gap-4">
				<div
					v-for="test in CATEGORIES"
					:key="test.id"
					class="flex items-center"
				>
					<input type="checkbox" :id="test.id" class="mr-2" />
					<label :for="test.id" class="cursor-pointer">{{ test.name }}</label>
				</div>
			</div>
		</div>
	</form>
</template>

<script setup>
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
});

defineEmits(['update:title', 'update:content']);
</script>

<style lang="scss" scoped></style>
