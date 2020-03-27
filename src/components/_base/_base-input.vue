<template>
	<ValidationProvider v-slot="{ errors, required, ariaInput, ariaMsg }" tag="div" :name="name || label" :rules="rules">
		<label>
			<span>{{ label || name }}</span>
			<span>{{ required ? ' *' : '' }}</span>
		</label>
		<input :id="name" v-bind="$attrs" :type="type" @input="$emit('update', $event.target.value)" v-on="$listeners" />
		<span v-if="errors[0]" v-bind="ariaMsg">err{{ errors[0] }}</span>
	</ValidationProvider>
</template>

<script lang="ts">
import Vue from 'vue';
import { ValidationProvider } from 'vee-validate';

export default Vue.extend({
	name: 'BaseInput',
	components: {
		ValidationProvider,
	},
	inheritAttrs: false,
	// Change the v-model event name to `update` to avoid changing
	// the behavior of the native `input` event.
	// https://vuejs.org/v2/guide/components-custom-events.html#Customizing-Component-v-model
	model: {
		event: 'update',
	},
	props: {
		name: {
			type: String,
			default: '',
		},
		label: {
			type: String,
			default: '',
		},
		rules: {
			type: [Object, String],
			default: '',
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
