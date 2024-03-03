import { createRouter, createWebHistory } from 'vue-router';
import MyPageView from '@/views/MyPageView.vue';
import PostListView from '@/components/PostListView.vue';
import PostCreateView from '@/components/posts/PostCreateView.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: PostListView,
	},
	{
		path: '/mypage',
		name: 'MyPage',
		component: MyPageView,
	},
	{
		path: '/posts',
		name: 'PostList',
		component: PostListView,
	},
	{
		path: '/posts/create',
		name: 'PostCreate',
		component: PostCreateView,
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
