<script setup lang="ts">
import { RouterLink } from 'vue-router';

// import { useCounterStore } from '@/stores/couter';
// import { storeToRefs } from 'pinia';

// const counterStore = useCounterStore();
// const { counter } = storeToRefs(counterStore);

const NAVLIST = [
	{ name: 'CARD', to: '/posts' },
	{ name: 'TABLE', to: '/table' },
	{ name: 'BOARD', to: '/board' },
];
</script>

<template>
	<nav class="flex flex-col items-center bg-gray-100 rounded-xl p-4">
		<div class="border-b-2 pb-4 mb-4">
			<!-- <RouterLink class="text-3xl font-bold" to="/">Hey, River!</RouterLink> -->

			<div class="rounded-full w-16 h-16 overflow-hidden">
				<RouterLink to="/mypage">
					<img
						class="w-full h-full object-cover"
						src="../assets/my-profile-ani.jpg"
						alt="my-profile"
					/>
				</RouterLink>
			</div>
		</div>

		<div class="flex flex-col items-center gap-4">
			<p class="text-xs font-semibold text-gray-400">MENU</p>
			<div v-for="(navItem, idx) in NAVLIST" :key="idx">
				<RouterLink
					:to="navItem.to"
					class="rounded-xl p-2 text-gray-600 hover:bg-[#4d3be5] hover:text-white"
					>{{ navItem.name }}</RouterLink
				>
			</div>
		</div>

		<!-- <div class="flex gap-1">
			<p class="font-bold text-custom-red">
				{{ counter }}
			</p>
			Tasks today!
		</div> -->
	</nav>
</template>

<style scoped></style>
