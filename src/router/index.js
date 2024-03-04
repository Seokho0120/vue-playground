import { createRouter, createWebHistory } from 'vue-router';
import MyPageView from '@/views/MyPageView.vue';
import PostCreateView from '@/components/posts/PostCreateView.vue';
import PostListView from '@/views/posts/PostListView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: PostListView,
	},
	{
		path: '/posts',
		name: 'PostList',
		component: PostListView,
	},
	{
		path: '/posts/:id',
		name: 'PostDetail',
		component: PostDetailView,
	},
	{
		path: '/posts/:id/edit',
		name: 'PostEdit',
		component: PostEditView,
	},
	{
		path: '/posts/create',
		name: 'PostCreate',
		component: PostCreateView,
	},
	{
		path: '/mypage',
		name: 'MyPage',
		component: MyPageView,
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
