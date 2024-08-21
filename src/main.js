import './assets/main.css';
import '@mdi/font/css/materialdesignicons.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createVuetify } from 'vuetify/lib/framework.mjs';
import 'vuetify/styles';
import * as components from 'vuetify/lib/components/index.mjs';
import * as directives from 'vuetify/lib/directives/index.mjs';
import { Notify, Quasar } from 'quasar';
import '@quasar/extras/material-icons/material-icons.css';
// import 'quasar/src/css/index.sass';
import 'quasar/dist/quasar.css';
import App from './App.vue';
import router from './router';
const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);

app.use(Quasar, {
  plugins: {
    Notify: Notify,
  },
});

app.mount('#app');
