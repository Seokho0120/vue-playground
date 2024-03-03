<template>
	<form @submit.prevent class="pb-4 py-2">
		<div class="relative">
			<div
				class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
			>
				<svg
					class="w-5 h-5 text-gray-500 dark:text-gray-400"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 20 20"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
					/>
				</svg>
			</div>
			<input
				placeholder="Search Task"
				type="text"
				class="block w-full p-2 pl-10 text-sm rounded-xl text-lg bg-gray-100"
			/>
		</div>
	</form>
</template>

<script setup></script>

<style lang="scss" scoped></style>
