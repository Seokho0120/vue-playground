<script setup lang="ts">
import { ref } from 'vue';
import { PlusIcon, ChevronDownIcon } from '@heroicons/vue/24/solid';
import { navList } from '@/constants/navList';
import PostForm from '@/components/posts/PostForm.vue';
import { Form } from '@/types/posts';
import { createPosts } from '@/api/posts';

const showCreateModal = ref<boolean>(false);

const form = ref<Form>({
	title: '',
	content: '',
	category: '',
	status: '',
});

console.log('form', form);

const openCreateModal = () => {
	showCreateModal.value = !showCreateModal.value;
};

const saveTask = async () => {
	try {
		await createPosts({
			...form.value,
			createdAt: Date.now(),
		});
	} catch (error) {
		console.error('error', error);
	}
};
</script>

<template>
	<nav class="flex justify-between border-b-2 pb-7 pt-8">
		<div class="flex items-center gap-2">
			<!-- TODO: btn 컨텐츠 적용 예정 -->
			<button
				type="button"
				class="flex items-center gap-1 font-light pl-4 pr-2 py-1 border-[1px] border-gray-200 rounded-3xl"
			>
				<span class="text-sm font-medium">Filter1</span>
				<ChevronDownIcon class="h-4 w-4" />
			</button>
			<button
				type="button"
				class="flex items-center gap-1 font-light pl-4 pr-2 py-1 border-[1px] border-gray-200 rounded-3xl"
			>
				<span class="text-sm font-medium">Filter2</span>
				<ChevronDownIcon class="h-4 w-4" />
			</button>
			<button
				type="button"
				class="flex items-center gap-1 font-light pl-4 pr-2 py-1 border-[1px] border-gray-200 rounded-3xl"
			>
				<span class="text-sm font-medium">Filter3</span>
				<ChevronDownIcon class="h-4 w-4" />
			</button>

			<button
				@click="openCreateModal"
				type="button"
				class="flex items-center justify-center text-white font-light bg-customMain hover:bg-hoverCustomMain gap-2 ml-4 px-4 py-1 rounded-3xl"
			>
				<PlusIcon class="h-6 w-6" />
				<p class="text-sm font-thin">|</p>
				<span class="text-sm font-medium">Create</span>
			</button>
		</div>

		<ul class="flex items-center gap-2">
			<li v-for="(navItem, idx) in navList" :key="idx">
				<component
					v-if="navItem.icon"
					:is="navItem.icon"
					class="p-2 h-10 w-10 justify-center items-center rounded-full text-gray-500 bg-gray-100 hover:bg-customMain hover:text-white cursor-pointer"
				/>
			</li>
		</ul>

		<div
			v-if="showCreateModal"
			class="w-full fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center"
		>
			<div class="w-[700px] m-4 bg-white p-8 rounded-lg shadow-lg">
				<PostForm
					v-model="showCreateModal"
					v-model:title="form.title"
					v-model:content="form.content"
					v-model:category="form.category"
					v-model:status="form.status"
					@submit.prevent="saveTask"
				>
					<template #actions>
						<button
							class="font-medium text-sm px-8 py-2.5 text-center me-2 mb-2 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 rounded-lg"
						>
							Save
						</button>
					</template>
				</PostForm>
			</div>
		</div>
	</nav>
</template>

<style lang="scss" scoped></style>
