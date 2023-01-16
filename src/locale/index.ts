// locale/index.ts
import { createI18n } from "vue-i18n";

// locale/index.ts
// 导入全局中英文配置对象
import en from './en-US'
import zh from './zh-CN'

// 默认读取本地存储语言设置
const defaultLocale = localStorage.getItem('locale') || 'zh-CN'

const i18n = createI18n({
    locale: defaultLocale,// 默认语言
    fallbackLocale: 'en-US',// 不存在默认则为英文
    allowComposition: true,// 允许组合式api
    messages: {
        'en-US': en, // 标识:配置对象
        'zh-CN': zh
    },
})
export default i18n