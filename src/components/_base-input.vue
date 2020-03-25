<template>
	<label>
		{{ label }}
		<input v-bind="$attrs" :type="type" @input="$emit('update', $event.target.value)" v-on="$listeners" />
	</label>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'BaseInput',
	inheritAttrs: false,
	// Change the v-model event name to `update` to avoid changing
	// the behavior of the native `input` event.
	// https://vuejs.org/v2/guide/components-custom-events.html#Customizing-Component-v-model
	model: {
		event: 'update',
	},
	props: {
		label: {
			type: String,
			default: undefined,
		},
		type: {
			type: String,
			default: 'text',
			validator(value: string) {
				return ['email', 'number', 'password', 'search', 'tel', 'text', 'url'].includes(value);
			},
		},
	},
});
</script>

<style lang="scss" scoped></style>
