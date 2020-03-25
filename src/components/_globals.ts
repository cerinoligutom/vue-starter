import Vue from 'vue';

// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context(
	// The relative path of the components folder
	'./',
	// Whether or not to look in subfolders
	false,
	// The regular expression used to match base component filenames.
	// Only include "_base-" prefixed .vue files
	/_base-[\w-]+\.vue$/,
);

requireComponent.keys().forEach(fileName => {
	// Get the component config
	const componentConfig = requireComponent(fileName);
	// Get the PascalCase version of the component name
	const componentName = fileName
		// Remove the "./_" from the beginning
		.replace(/^\.\/_/, '')
		// Remove the file extension from the end
		.replace(/\.\w+$/, '')
		// Split up kebabs
		.split('-')
		// Upper case
		.map(kebab => kebab.charAt(0).toUpperCase() + kebab.slice(1))
		// Concatenated
		.join('');

	// Register component globally
	Vue.component(
		componentName,
		// Look for the component options on `.default`, which will
		// exist if the component was exported with `export default`,
		// otherwise fall back to module's root.
		componentConfig.default || componentConfig,
	);
});
