import { createApp } from 'vue'
import App from './App.vue'
import router from '@/routers/index.js'
import * as Icons from "@element-plus/icons-vue";
import i18n from '@/languages/index.js'

// element plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// svg icons
import "virtual:svg-icons-register";

// reset base css style
import "@/style/reset.css"

const app = createApp(App)

// register the element Icons component
Object.keys(Icons).forEach(key => {
  app.component(key, Icons[key]);
});


app.use(router).use(ElementPlus).use(i18n).mount('#app')
