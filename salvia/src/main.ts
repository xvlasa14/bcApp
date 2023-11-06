import { createApp } from 'vue';
import App from './views/App.vue';
import "./views/style.scss";

import router from './router';

createApp(App).use(router).mount('#app'); 