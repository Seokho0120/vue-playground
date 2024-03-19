<script setup lang="ts">
import router from '@/router';
import {
	PlusIcon,
	Cog6ToothIcon,
	BellAlertIcon,
	ChevronDownIcon,
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
		<RouterLink to="/" class="flex items-center gap-2">
			<!-- <p class="text-3xl font-bold">Hey, River!</p> -->
			<!-- <button @click="goToWrite" type="button" class="bg-gray-400 gap-3">
				<div>+</div>
				<div>Create</div>
			</button> -->

			<button
				type="button"
				class="flex items-center gap-1 font-light pl-4 pr-2 py-1 border-[1px] border-gray-200 rounded-3xl"
			>
				<span class="text-sm font-medium">Filter1</span>
				<ChevronDownIcon class="h-4 w-4" />
			</button>
			<button
				type="button"
				class="flex items-center gap-1 font-light pl-4 pr-2 py-1 border-[1px] border-gray-200 rounded-3xl"
			>
				<span class="text-sm font-medium">Filter2</span>
				<ChevronDownIcon class="h-4 w-4" />
			</button>
			<button
				type="button"
				class="flex items-center gap-1 font-light pl-4 pr-2 py-1 border-[1px] border-gray-200 rounded-3xl"
			>
				<span class="text-sm font-medium">Filter3</span>
				<ChevronDownIcon class="h-4 w-4" />
			</button>

			<button
				@click="goToWrite"
				type="button"
				class="flex items-center justify-center text-white font-light bg-customMain hover:bg-hoverCustomMain gap-2 ml-4 px-4 py-1 rounded-3xl"
			>
				<PlusIcon class="h-6 w-6" />
				<p class="text-sm font-thin">|</p>
				<span class="text-sm font-medium">Create</span>
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
