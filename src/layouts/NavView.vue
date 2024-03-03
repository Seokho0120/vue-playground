<template>
	<header class="pb-6">
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
		<p class="">7 Tasks today!</p>

		<!-- <nav class="flex flex-col gap-4 mt-4">
			<RouterLink to="/">home</RouterLink>
			<RouterLink to="/about">about</RouterLink>
			<RouterLink to="/posts">posts</RouterLink>
			<RouterLink to="/contact">contact</RouterLink>
		</nav> -->
	</header>
</template>

<script setup></script>

<style scoped></style>
