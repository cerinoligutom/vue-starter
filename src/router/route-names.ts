import Vue from 'vue';

export enum RouteNames {
	HOME = 'Home',
	ABOUT = 'About',
}

// Make it available as a global instance property
// Read more @ https://vuejs.org/v2/cookbook/adding-instance-properties.html
Vue.prototype.$routeNames = RouteNames;
declare module 'vue/types/vue' {
	interface Vue {
		$routeNames: typeof RouteNames;
	}
}
