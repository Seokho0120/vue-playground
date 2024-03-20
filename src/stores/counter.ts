import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
	state: () => ({
		counter: 0,
	}),
	getters: {},
	actions: {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		setCounter(value: any) {
			this.counter = value;
		},
	},
});
