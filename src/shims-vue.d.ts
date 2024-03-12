import { DefineComponent } from 'vue';
import dayjs from 'dayjs';

declare module '*.vue' {
	const component: DefineComponent<{}, {}, any>;
	export default component;
}

declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$dayjs: typeof dayjs;
	}
}
