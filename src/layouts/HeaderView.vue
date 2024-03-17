<script setup lang="ts">
import router from '@/router';
import {
	PlusIcon,
	Cog6ToothIcon,
	BellAlertIcon,
} from '@heroicons/vue/24/solid';

const goToWrite = () => {
	router.push({
		name: 'PostCreate',
	});
};

const NAVLIST = [{ icon: Cog6ToothIcon }, { icon: BellAlertIcon }];
</script>

<template>
	<nav class="flex justify-between border-b-2 pb-7 pt-8">
		<!-- <div class="border-b-2 pb-7 pt-8"> -->
		<RouterLink to="/" class="flex items-center gap-6">
			<p class="text-3xl font-bold">Hey, River!</p>
			<!-- <button @click="goToWrite" type="button" class="bg-gray-400 gap-3">
				<div>+</div>
				<div>Create</div>
			</button> -->

			<button
				@click="goToWrite"
				type="button"
				class="flex items-center justify-center text-white font-light bg-customMain gap-2 px-4 py-1 rounded-3xl"
			>
				<PlusIcon class="h-6 w-6" />
				<p class="text-sm font-thin">|</p>
				<div class="text-sm font-medium">Create</div>
			</button>
		</RouterLink>

		<div class="flex items-center gap-2">
			<div v-for="(navItem, idx) in NAVLIST" :key="idx">
				<component
					:is="navItem.icon"
					class="p-2 h-10 w-10 justify-center items-center rounded-full text-gray-500 bg-gray-100 hover:bg-customMain hover:text-white cursor-pointer"
					v-if="navItem.icon"
				/>
			</div>
		</div>
		<!-- </div> -->
	</nav>
</template>

<style lang="scss" scoped></style>
