import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import Vue3Toastify, { type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

createApp(App)
  .use(Vue3Toastify, {
    position: 'top-right',
    autoClose: 3000,
    newestOnTop: true,
    hideProgressBar: true,
    theme: 'dark',
  } as ToastContainerOptions)
  .mount('#app');
