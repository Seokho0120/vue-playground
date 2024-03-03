<template>
	<header class="flex-col justify-between items-center p-6">
		<h1>
			<RouterLink class="text-3xl font-bold" to="/">River</RouterLink>
		</h1>
		<nav class="flex flex-col gap-4 mt-4">
			<RouterLink to="/">home</RouterLink>
			<RouterLink to="/about">about</RouterLink>
			<RouterLink to="/posts">posts</RouterLink>
			<RouterLink to="/contact">contact</RouterLink>
		</nav>
	</header>
</template>

<script setup></script>

<style scoped></style>
