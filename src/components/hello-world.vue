<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<p>
			For a guide and recipes on how to configure / customize this project,
			<br />
			check out the
			<BaseLink href="https://cli.vuejs.org" target="_blank" rel="noopener">
				vue-cli documentation
			</BaseLink>
			.
		</p>
		<h3>Installed CLI Plugins</h3>
		<ul>
			<li>
				<BaseLink href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">
					babel
				</BaseLink>
			</li>
			<li>
				<BaseLink href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener">
					typescript
				</BaseLink>
			</li>
			<li>
				<BaseLink href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">
					router
				</BaseLink>
			</li>
			<li>
				<BaseLink href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">
					vuex
				</BaseLink>
			</li>
			<li>
				<BaseLink href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">
					eslint
				</BaseLink>
			</li>
		</ul>
		<h3>Essential Links</h3>
		<ul>
			<li>
				<BaseLink href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</BaseLink>
			</li>
			<li>
				<BaseLink href="https://forum.vuejs.org" target="_blank" rel="noopener">
					Forum
				</BaseLink>
			</li>
			<li>
				<BaseLink href="https://chat.vuejs.org" target="_blank" rel="noopener">
					Community Chat
				</BaseLink>
			</li>
			<li>
				<BaseLink href="https://twitter.com/vuejs" target="_blank" rel="noopener">
					Twitter
				</BaseLink>
			</li>
			<li>
				<BaseLink href="https://news.vuejs.org" target="_blank" rel="noopener">News</BaseLink>
			</li>
		</ul>
		<h3>Ecosystem</h3>
		<ul>
			<li>
				<BaseLink href="https://router.vuejs.org" target="_blank" rel="noopener">
					vue-router
				</BaseLink>
			</li>
			<li>
				<BaseLink href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</BaseLink>
			</li>
			<li>
				<BaseLink href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">
					vue-devtools
				</BaseLink>
			</li>
			<li>
				<BaseLink href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">
					vue-loader
				</BaseLink>
			</li>
			<li>
				<BaseLink href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">
					awesome-vue
				</BaseLink>
			</li>
		</ul>
		<div>
			<pre>type: {{ typeof inputValue }}</pre>
			<pre>value: {{ JSON.stringify(inputValue) }}</pre>
			<BaseInput v-model="inputValue" type="number" label="This is a label">Base Button lage ni</BaseInput>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'HelloWorld',
	props: {
		msg: {
			type: String,
			default: '',
		},
	},
	data() {
		return {
			inputValue: undefined,
		};
	},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
