import { ref, watchEffect } from 'vue';

export const useDebounce = (valueRef: string, delay: number = 400) => {
	const debounced = ref(valueRef);

	watchEffect(() => {
		const handler = setTimeout(() => {
			debounced.value = valueRef;
		}, delay);
		return () => clearTimeout(handler);
	});

	return debounced;
};
