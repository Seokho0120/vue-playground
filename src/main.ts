import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/App.vue';
import router from './router';
import dayjs from './plugins/dayjs';
import './index.css';

const app = createApp(App);
app.use(router);
app.use(dayjs);
app.use(createPinia());
app.mount('#app');
