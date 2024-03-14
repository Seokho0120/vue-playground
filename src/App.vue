<script setup lang="ts">
import NavView from '@/layouts/NavView.vue';
import TheView from '@/layouts/TheView.vue';
</script>

<template>
	<main class="flex items-center justify-center drop-shadow-2xl mt-10">
		<div
			class="bg-white p-10 rounded-3xl"
			:class="{
				'w-1/2': $route.path !== '/table',
				'w-4/3': $route.path === '/table',
			}"
		>
			<NavView v-if="$route.path === '/'" />
			<TheView />
		</div>
	</main>
</template>

<style></style>
