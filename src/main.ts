import Vue from 'vue';
import App from './app.vue';
import router from './router';
import store from './store';
import '@/assets/css/tailwind.css';

import '@/apollo';

// Globally register all `_base`-prefixed components
import '@/components/_globals';
import { env } from './config/environment';

Vue.config.productionTip = !env.isProduction;

new Vue({
	router,
	store: store.original,
	render: h => h(App),
}).$mount('#app');
