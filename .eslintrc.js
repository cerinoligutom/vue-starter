module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/essential',
		'plugin:vue/strongly-recommended',
		'plugin:vue/recommended',
		'eslint:recommended',
		'@vue/typescript/recommended',
		'@vue/prettier',
		'@vue/prettier/@typescript-eslint',
	],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		'vue/component-name-in-template-casing': [
			'error',
			'PascalCase',
			{
				registeredComponentsOnly: true,
				ignores: [],
			},
		],
		'no-console': 'warn',
		'no-debugger': 'warn',
		quotes: ['warn', 'single'],
		'@typescript-eslint/no-explicit-any': 1,
		'@typescript-eslint/no-var-requires': 0,
		'@typescript-eslint/interface-name-prefix': 0,
		'@typescript-eslint/no-use-before-define': 0,
	},
};
