import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const a = btoa( 'a' )

console.log( a )

createApp(App).use(store).use(router).mount('#app')
