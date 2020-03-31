import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';
import '@/assets/styles/global.scss';

import '@/validation';
import '@/apollo';

// Globally register all `Base`-prefixed components
import '@/components/_base';
import { env } from './config/environment';

Vue.config.productionTip = !env.isProduction;

new Vue({
	router,
	store: store.original,
	render: h => h(App),
}).$mount('#app');
