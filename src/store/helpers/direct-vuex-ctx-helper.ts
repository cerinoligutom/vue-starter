import { moduleActionContext, moduleGetterContext } from '../index';
export const getContexts = <T>(module: T) => {
	const getterContext = (args: [any, any, any, any]) => moduleGetterContext(args, module);
	const actionContext = (context: any) => moduleActionContext(context, module);

	return { getterContext, actionContext };
};
