import { createRouter, createWebHistory } from 'vue-router';
import HomeListView from '@/components/HomeListView.vue';
import AboutView from '@/components/AboutView.vue';
import PostListView from '@/components/PostListView.vue';
import ContactView from '@/components/ContactView.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: HomeListView,
	},
	{
		path: '/posts',
		name: 'PostList',
		component: PostListView,
	},
	{
		path: '/contact',
		name: 'Contact',
		component: ContactView,
	},
	{
		path: '/about',
		name: 'About',
		component: AboutView,
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
