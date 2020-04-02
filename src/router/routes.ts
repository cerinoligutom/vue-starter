import { RouteConfig } from 'vue-router';
import { RouteNames } from './route-names';
import { LAYOUT_NAMES } from '@/layouts/layout-names';

export const routes: RouteConfig[] = [
	{
		path: '/',
		name: RouteNames.HOME,
		meta: {
			// For multiple layouts
			layout: LAYOUT_NAMES.NONE,
		},
		component: () => import('@/views/Home.vue'),
	},
	{
		path: '/about',
		name: RouteNames.ABOUT,

		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
	},
];
