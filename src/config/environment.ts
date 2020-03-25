/**
 * Make sure to prefix your custom environment variables with "VUE_APP_"
 * so that Vue acknowledges the environment variable.
 *
 * Read more about how the Vue CLI handles environment variables:
 * https://cli.vuejs.org/guide/mode-and-env.html
 */

export const env = {
	isProduction: process.env.NODE_ENV === 'production',
	graphqlEndpoint: process.env.VUE_APP_GRAPHQL_ENDPOINT ?? 'http://localhost:8080/graphql',
};
