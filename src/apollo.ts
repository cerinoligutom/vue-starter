// https://apollo.vuejs.org/guide/installation.html#_1-apollo-client

import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Vue from 'vue';
import { env } from './config/environment';

// HTTP connection to the API
const httpLink = createHttpLink({
	// You should use an absolute URL here
	uri: env.graphqlEndpoint,

	// For session cookie-based authentication
	credentials: 'include',
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
export const apolloClient = new ApolloClient({
	link: httpLink,
	cache,
	connectToDevTools: !env.isProduction,
});

// Make it available as a global instance property
// Read more @ https://vuejs.org/v2/cookbook/adding-instance-properties.html
Vue.prototype.$apolloClient = apolloClient;

// Make the added global instance property above visible to TypeScript
declare module 'vue/types/vue' {
	interface Vue {
		$apolloClient: typeof apolloClient;
	}
}
