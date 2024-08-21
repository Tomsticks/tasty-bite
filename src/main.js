import './assets/main.css';
import '@mdi/font/css/materialdesignicons.css';
import { createApp } from 'vue';
import { createVuetify } from 'vuetify/lib/framework.mjs';
import 'vuetify/styles';
import * as components from 'vuetify/lib/components/index.mjs';
import * as directives from 'vuetify/lib/directives/index.mjs';
import { Notify, Quasar } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css';
import { createPinia } from 'pinia';
import 'quasar/dist/quasar.css';
import App from './App.vue';
import router from './router';
const pinia = createPinia();
const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.use(Quasar, {
  plugins: {
    Notify: Notify,
  },
});

app.use(pinia);
app.mount('#app');
