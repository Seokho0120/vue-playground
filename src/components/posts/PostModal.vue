<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { XMarkIcon } from '@heroicons/vue/24/solid';
import PostForm from './PostForm.vue';
import { Form, Post } from '@/types/posts';
import { updatePost } from '@/api/posts';
// import router from '@/router';

const showEdit = ref<boolean>(false);
const form = ref<Form>({
	title: '',
	content: '',
	category: '',
	status: '',
});

const props = defineProps<{
	selectedPost: Post;
}>();

const { selectedPost } = props;

watch(
	() => selectedPost,
	newVal => {
		if (newVal) {
			form.value.title = newVal.title;
			form.value.content = newVal.content;
			form.value.category = newVal.category;
			form.value.status = newVal.status;
		}
	},
	{ immediate: true },
);

const emit = defineEmits([
	'update:showModal',
	'deleteTask',
	'updateSuccess',
	'updatePostData',
]);

const closeModal = () => emit('update:showModal', false);

const categoryColor = computed(() => {
	const colors: Record<string, string> = {
		Personal: 'bg-blue-100 text-blue-800',
		Work: 'bg-green-100 text-green-800',
		Study: 'bg-yellow-100 text-yellow-800',
		Health: 'bg-red-100 text-red-800',
		Other: 'bg-gray-100 text-gray-800',
	};

	return form.value.category
		? colors[form.value.category] || 'bg-blue-100'
		: 'bg-blue-100';
});

const removeTask = () => {
	if (selectedPost?.id) {
		emit('deleteTask', selectedPost?.id);
	}
};

const editTable = () => {
	showEdit.value = true;
};

const editTask = async () => {
	if (!selectedPost.id) return;

	try {
		const { status, data } = await updatePost(selectedPost.id, {
			...form.value,
		});
		if (status === 200) {
			emit('updateSuccess');
			emit('updatePostData', data);
			showEdit.value = false;
			// 	// closeModal();
		}
	} catch (error) {
		console.error('error', error);
	}
};

console.log('modal-selectedPost', selectedPost);
</script>

<template>
	<!-- background -->
	<div
		class="w-full fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center"
	>
		<!-- container -->
		<div class="w-[700px] m-4 bg-white p-8 rounded-lg shadow-lg">
			<div
				v-if="showEdit === false"
				class="flex items-center justify-between pb-4"
			>
				<h2 class="text-3xl font-bold">{{ form?.title }}</h2>
				<!-- <h2 class="text-3xl font-bold">{{ selectedPost?.title }}</h2> -->
				<div class="flex items-center gap-4">
					<span
						:class="{
							'bg-[#33ca25]': form?.status === 'New',
							'bg-[#6433ca]': form?.status === 'In Progress',
							'bg-[#ac4cdc]': form?.status === 'Done',
						}"
						class="text-sm px-4 py-1 rounded-3xl text-white"
					>
						{{ form?.status }}
						<!-- {{ selectedPost?.status }} -->
					</span>
					<button @click="closeModal">
						<XMarkIcon class="h-4 w-4" />
					</button>
				</div>
			</div>

			<div v-if="showEdit === false" class="flex flex-col gap-4">
				<div class="flex gap-4">
					<p class="font-bold">Due Date</p>
					<p>{{ $dayjs(selectedPost?.createdAt).format('YYYY-MM-DD') }}</p>
				</div>

				<div class="flex gap-4">
					<p class="font-bold">Category</p>
					<div>
						<span
							:class="`${categoryColor} text-xs me-2 px-2.5 py-0.5 rounded-full`"
						>
							{{ form?.category }}
							<!-- {{ selectedPost?.category }} -->
						</span>
					</div>
				</div>

				<div class="flex flex-col gap-2">
					<p class="font-bold">Description</p>
					<p>{{ form?.content }}</p>
					<!-- <p>{{ selectedPost?.content }}</p> -->
				</div>

				<div class="flex items-center gap-2 mt-8">
					<button
						@click="editTable"
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
