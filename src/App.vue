<script setup lang="ts">
import NavView from '@/layouts/NavView.vue';
import TheView from '@/layouts/TheView.vue';
</script>

<template>
	<main class="p-24">
		<div class="flex gap-8 bg-white p-6 rounded-3xl">
			<NavView v-if="$route.path === '/'" />
			<TheView />
		</div>
	</main>
</template>

<style>
body {
	background-color: #cce3f3;
}
</style>
