import { createI18n } from 'vue-i18n'
import { getBrowserLang } from '@/utils/index.js'
import zh from './modules/zh'
import en from './modules/en'
import ja from './modules/ja'

const i18n = createI18n({
  legacy: false, // 如果要支持 compositionAPI，此项必须设置为 false
  locale: getBrowserLang(), // 设置语言支持
  globalInjection: true, // 全局注册 $t 方法
  messages: {
    zh,
    en,
    ja
  }
}) 

export default i18n