// hook/useLocale.ts
import { computed } from "vue";
import { useI18n } from "vue-i18n";

export default function useLocale() {
    const i18n = useI18n();//实例化i18n
    const currentLocale = computed(() => {
        return i18n.locale.value // 固定写法 获取当前语言设置
    })
    // 切换语言
    const changeLocale = (value: string) => {
        i18n.locale.value = value;//赋值切换语言
        localStorage.setItem('locale', value);//修改本地存储
    }
    return {
        i18n,
        currentLocale,
        changeLocale
    }
}