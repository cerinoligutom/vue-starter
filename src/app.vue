<template>
	<div id="app">
		<component :is="layout">
			<div id="nav">
				<BaseLink :name="$routeNames.HOME">Home</BaseLink>
				|
				<BaseLink :name="$routeNames.ABOUT">About</BaseLink>
			</div>
			<!-- Rerender page on every route change for cleaner components.
		See https://youtu.be/7YZ5DwlLSt8?t=1066 -->
			<router-view :key="$route.fullPath" />
		</component>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import { LAYOUT_NAMES } from '@/layouts/layout-names';

export default Vue.extend({
	name: 'App',
	computed: {
		layout() {
			return this.$route.meta.layout || LAYOUT_NAMES.DEFAULT;
		},
	},
});
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;

	a {
		font-weight: bold;
		color: #2c3e50;

		&.router-link-exact-active {
			color: #42b983;
		}
	}
}

@import 'nprogress/nprogress.css';
</style>
