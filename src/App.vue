<script setup lang="ts">
import NavView from '@/layouts/NavView.vue';
import TheView from '@/layouts/TheView.vue';
import HeaderView from '@/layouts/HeaderView.vue';
</script>

<template>
	<main class="p-24">
		<div class="flex gap-8 bg-white p-6 rounded-3xl">
			<NavView />
			<div class="w-full">
				<HeaderView />
				<TheView />
			</div>
		</div>
	</main>
</template>

<style>
body {
	background-color: #cce3f3;
}
</style>
