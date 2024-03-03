<script setup>
import NavView from '@/layouts/NavView.vue';
import TheView from '@/layouts/TheView.vue';
import TheSideViewVue from '@/layouts/TheSideView.vue';
</script>

<template>
	<div
		class="flex item-center justify-center w-full h-screen max-w-screen-2xl mx-auto p-10 md:py-32"
	>
		<NavView class="w-1/5 bg-custom-bg" />
		<TheView class="w-4/5" />
		<!-- <TheSideViewVue class="w-2/5" /> -->
	</div>
</template>

<style></style>
