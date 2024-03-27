<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { XMarkIcon } from '@heroicons/vue/24/solid';
import PostForm from './PostForm.vue';
import { Form, Post } from '@/types/posts';
import { updatePost } from '@/api/posts';

interface Colors {
	[key: string]: string;
}

const showEdit = ref<boolean>(false);
const form = ref<Form>({
	title: '',
	content: '',
	category: '',
	status: '',
	createdAt: 0,
});

const props = defineProps<{
	selectedPost: Post;
}>();

const emit = defineEmits(['update:showModal', 'deleteTask', 'updateSuccess']);

watch(
	() => props.selectedPost,
	newVal => {
		if (newVal) {
			form.value.title = newVal.title;
			form.value.content = newVal.content;
			form.value.category = newVal.category;
			form.value.status = newVal.status;
			form.value.createdAt = newVal.createdAt;
		}
	},
	{ immediate: true },
);

const closeModal = () => emit('update:showModal', false);
const removeTask = () => emit('deleteTask', props.selectedPost?.id);
const toggleEdit = () => (showEdit.value = true);

const editTask = async () => {
	if (!props.selectedPost.id) return;

	try {
		const { status } = await updatePost(props.selectedPost.id, form.value);

		if (status === 200) {
			emit('updateSuccess');
			showEdit.value = false;
		}
	} catch (error) {
		console.error('error', error);
	}
};

const colors: Colors = {
	Personal: 'bg-blue-100 text-blue-800',
	Work: 'bg-green-100 text-green-800',
	Study: 'bg-yellow-100 text-yellow-800',
	Health: 'bg-red-100 text-red-800',
	Other: 'bg-gray-100 text-gray-800',
};

const categoryColor = computed(
	() => colors[form.value.category] || 'bg-blue-100',
);

const statusClass = computed(() => {
	if (form.value?.status === 'New') {
		return 'bg-[#33ca25]';
	} else if (form.value?.status === 'In Progress') {
		return 'bg-[#6433ca]';
	} else {
		return 'bg-[#ac4cdc]';
	}
});
</script>

<template>
	<div
		class="w-full fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center"
	>
		<div class="w-[700px] m-4 bg-white p-8 rounded-lg shadow-lg">
			<div
				v-if="showEdit === false"
				class="flex items-center justify-between pb-4"
			>
				<h2 class="text-3xl font-bold">{{ form?.title }}</h2>
				<div class="flex items-center gap-4">
					<span
						:class="statusClass"
						class="text-sm px-4 py-1 rounded-3xl text-white"
					>
						{{ form?.status }}
					</span>
					<button @click="closeModal">
						<XMarkIcon class="h-4 w-4" />
					</button>
				</div>
			</div>

			<div v-if="showEdit === false" class="flex flex-col gap-4">
				<div class="flex gap-4">
					<p class="font-bold">Due Date</p>
					<p>{{ $dayjs(form?.createdAt).format('YYYY-MM-DD') }}</p>
				</div>

				<div class="flex gap-4">
					<p class="font-bold">Category</p>
					<div>
						<span
							:class="`${categoryColor} text-xs me-2 px-2.5 py-0.5 rounded-full`"
						>
							{{ form?.category }}
						</span>
					</div>
				</div>

				<div class="flex flex-col gap-2">
					<p class="font-bold">Description</p>
					<p>{{ form?.content }}</p>
				</div>

				<div class="flex items-center gap-2 mt-8">
					<button
						@click="toggleEdit"
						class="bg-gray-100 hover:bg-gray-400 text-gray-800 font-semibold py-1 px-2 rounded"
					>
						Edit
					</button>
					<button
						@click="removeTask"
						class="bg-gray-100 hover:bg-gray-400 text-gray-800 font-semibold py-1 px-2 rounded"
					>
						Delete
					</button>
				</div>
			</div>

			<PostForm
				v-if="showEdit"
				v-model:title="form.title"
				v-model:content="form.content"
				v-model:category="form.category"
				v-model:status="form.status"
				v-model:createAt="form.createdAt"
				@submit.prevent="editTask"
			>
				<template #actions>
					<button
						class="font-medium text-sm px-8 py-2.5 text-center me-2 mb-2 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 rounded-lg"
					>
						Edit
					</button>
				</template>
			</PostForm>
		</div>
	</div>
</template>

<style lang="scss" scoped></style>
