<script setup>
import NavView from '@/layouts/NavView.vue';
import TheView from '@/layouts/TheView.vue';
import TheSideViewVue from '@/layouts/TheSideView.vue';
</script>

<template>
	<div class="flex w-full h-screen max-w-screen-2xl mx-auto">
		<NavView class="w-1/5 bg-custom-bg" />
		<TheView class="w-4/5" />
		<!-- <TheSideViewVue class="w-2/5" /> -->
	</div>
</template>

<style></style>
