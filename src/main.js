import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routers/index.js'
import * as Icons from "@element-plus/icons-vue";

// element plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// svg icons
import "virtual:svg-icons-register";

const app = createApp(App)

// register the element Icons component
Object.keys(Icons).forEach(key => {
  app.component(key, Icons[key]);
});


app.use(router).use(ElementPlus).mount('#app')
