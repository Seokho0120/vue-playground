<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getPosts } from '@/api/posts';
import { Post } from '@/types/posts';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const posts = ref<Post[]>([]);

onMounted(() => {
	fetchPosts();
});

const fetchPosts = async () => {
	try {
		const { data } = await getPosts();
		posts.value = data;
		// counterStore.setCouter(data.length);
	} catch (err) {
		console.error(err);
	}
};
</script>

<template>
	<div class="flex items-center justify-between">
		<div v-if="$route.path !== '/'" class="flex items-center">
			<RouterLink to="/" class="text-[#ee3914]">&lt; Prev</RouterLink>
		</div>

		<div class="flex pb-4 gap-4">
			<h2 class="text-3xl font-bold">Table</h2>
		</div>

		<div
			class="flex items-center"
			:class="{ invisible: $route.path === '/table' }"
		>
			<RouterLink to="/posts" class="text-[#ee3914]">See All &gt;</RouterLink>
		</div>
	</div>

	<div class="card">
		<DataTable :value="posts" :tableStyle="{ minWidth: '50rem' }">
			<Column field="title" header="Title" sortable></Column>
			<Column field="category" header="Category" sortable></Column>
			<Column field="createdAt" header="Created At" sortable></Column>
		</DataTable>
	</div>
</template>

<style lang="scss" scoped></style>
