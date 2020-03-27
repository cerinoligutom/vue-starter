/* eslint-disable @typescript-eslint/no-unused-vars */

import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/home.vue';
import NProgress from 'nprogress';
import { RouteNames } from './route-names';

NProgress.configure({
	showSpinner: false,
});

Vue.use(VueRouter);

const routes: RouteConfig[] = [
	{
		path: '/',
		name: RouteNames.HOME,
		component: Home,
	},
	{
		path: '/about',
		name: RouteNames.ABOUT,
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '@/views/about.vue'),
	},
];

const router = new VueRouter({
	// Use the HTML5 history API (i.e. normal-looking routes)
	// instead of routes with hashes (e.g. example.com/#/about).
	// This may require some server configuration in production:
	// https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
	// Simulate native-like scroll behavior when navigating to a new
	// route and using back/forward buttons.
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { x: 0, y: 0 };
		}
	},
});

// Before each route evaluates...
router.beforeEach((routeTo, routeFrom, next) => {
	// If this isn't an initial page load...
	if (routeFrom.name !== null) {
		// Start the route progress bar.
		NProgress.start();
	}
	next();
});

// Create a `beforeResolve` hook, which fires whenever
// `beforeRouteEnter` and `beforeRouteUpdate`.
router.beforeResolve(async (routeTo, routeFrom, next) => {
	// You can do custom logic here such as checking if the current logged in user
	// is allowed to enter the route.
	next();
});

// When each route is finished evaluating...
router.afterEach((routeTo, routeFrom) => {
	// Complete the animation of the route progress bar.
	NProgress.done();
});

export default router;
