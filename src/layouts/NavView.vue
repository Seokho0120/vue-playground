<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { TableCellsIcon, Squares2X2Icon } from '@heroicons/vue/24/solid';

const NAV_LIST = [
	{ icon: Squares2X2Icon, to: '/posts' },
	{ icon: TableCellsIcon, to: '/table' },
];
</script>

<template>
	<nav class="flex flex-col items-center bg-gray-100 rounded-xl p-4">
		<div class="border-b-2 pb-4 mb-4">
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
			<div v-for="(navItem, idx) in NAV_LIST" :key="idx">
				<RouterLink :to="navItem.to" class="rounded-xl text-gray-500">
					<component
						:is="navItem.icon"
						class="p-2 h-10 w-10 justify-center items-center rounded-full hover:bg-customMain hover:text-white"
						v-if="navItem.icon"
					/>
				</RouterLink>
			</div>
		</div>
	</nav>
</template>

<style scoped></style>
