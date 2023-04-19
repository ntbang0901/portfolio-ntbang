import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
// Vuetify
import router from './router'
import vuetify from './plugins/vuetify'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(vuetify)
app.mount('#app')
