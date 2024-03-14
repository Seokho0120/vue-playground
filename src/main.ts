import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/App.vue';
import router from './router';
import dayjs from './plugins/dayjs';
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/aura-light-green/theme.css';
// import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import './index.css';

const app = createApp(App);
app.use(PrimeVue);
app.use(router);
app.use(dayjs);
app.use(createPinia());
app.mount('#app');
