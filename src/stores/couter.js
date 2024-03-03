import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
	state: () => ({
		counter: 0,
	}),
	getters: {},
	actions: {
		setCouter(value) {
			this.counter = value;
		},
	},
});
