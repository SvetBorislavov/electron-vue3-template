import devtools from '@vue/devtools';
import { createApp } from 'vue';

import './style.css';

import App from './App.vue';

const app = createApp(App);

app.mount('#app');

if (window.electronAPI.getNodeEnv() === 'development') {
  devtools.connect(`http://localhost`);
}
