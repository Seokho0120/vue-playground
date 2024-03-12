// import { DefineComponent } from 'vue';
import dayjs from 'dayjs';

// declare module '*.vue' {
// 	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
// 	const component: DefineComponent<{}, {}, any>;
// 	export default component;
// }

declare module '*.vue' {
	import { ComponentOptions } from 'vue';
	const componentOptions: ComponentOptions;
	export default componentOptions;
}

declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$dayjs: typeof dayjs;
	}
}
