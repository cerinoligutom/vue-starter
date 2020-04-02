<template>
	<div class="flex flex-col">
		<TheTopbar></TheTopbar>
		<div class="relative layout-content">
			<slot></slot>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';
import TheTopbar from '@/components/TheTopbar.vue';

interface IData {
	componentName: string;
}

export default Vue.extend({
	name: 'Layout',
	components: {
		TheTopbar,
	},
	data() {
		const _data: IData = {
			componentName: 'Layout',
		};
		return _data;
	},
});
</script>

<style lang="scss" scoped>
.layout-content {
	top: var(--navbar-height);
	min-height: calc(100vh - var(--header-height));
}
</style>
