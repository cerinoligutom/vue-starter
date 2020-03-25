import { defineModule } from 'direct-vuex';
import { getContexts } from '../helpers/direct-vuex-ctx-helper';
import { User, Maybe } from '@/generated/graphql';

export interface IAuthModuleState {
	user: Maybe<User>;
}

const authModule = defineModule({
	namespaced: true,
	state: (): IAuthModuleState => ({
		user: null,
	}),
	getters: {
		exampleGetter: (...args) => {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const { state, getters, rootState, rootGetters } = getterContext(args);
		},
	},
	mutations: {
		SET_USER(state, user: User) {
			state.user = user;
		},
	},
	actions: {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		exampleAction: (context, payload: { id: string }) => {
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
			const { dispatch, commit, getters, state, rootGetters, rootState } = actionContext(context);
		},
	},
});

const { actionContext, getterContext } = getContexts(authModule);
export default authModule;
