<template>
	<header class="pb-2">
		<div class="flex items-center justify-between">
			<RouterLink class="text-3xl font-bold" to="/">Hey, River!</RouterLink>

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
		<div class="flex gap-1">
			<p class="font-bold text-custom-red">
				{{ counter }}
			</p>
			Tasks today!
		</div>
	</header>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/couter';
import { storeToRefs } from 'pinia';

const counterStore = useCounterStore();
const { counter } = storeToRefs(counterStore);
</script>

<style scoped></style>
