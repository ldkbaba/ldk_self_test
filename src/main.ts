import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import './assets/tailwindcss/index.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import store from './store/index'

// src/index.js

loadFonts()

createApp(App)
  .use(vuetify)
  .use(store)
  .mount('#app')

