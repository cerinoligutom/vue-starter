<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'NoLayout',
	functional: true,
	render: function(createElement, context) {
		return context.children;
	},
});
</script>
