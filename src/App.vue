<script setup lang="ts">
import NavView from '@/layouts/NavView.vue';
import TheView from '@/layouts/TheView.vue';
</script>

<template>
	<main class="drop-shadow-2xl p-14 bg-custom-background">
		<div class="bg-white p-10 rounded-3xl">
			<!-- <div
			class="bg-white p-10 rounded-3xl"
			:class="{
				'w-1/2': $route.path !== '/table',
				'w-4/3': $route.path === '/table',
			}"
		> -->
			<NavView v-if="$route.path === '/'" />
			<TheView />
		</div>
	</main>
</template>

<style></style>
