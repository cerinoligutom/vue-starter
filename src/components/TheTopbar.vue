<template>
	<div class="fixed top-0 left-0 right-0 topbar bg-surface">{{ componentName }} component works!</div>
</template>

<script lang="ts">
import Vue from 'vue';

interface IData {
	componentName: string;
}

export default Vue.extend({
	name: 'TheTopbar',
	data() {
		const _data: IData = {
			componentName: 'TheTopbar',
		};
		return _data;
	},
});
</script>

<style lang="scss" scoped>
.topbar {
	height: var(--navbar-height);
	z-index: 9999;
}
</style>
