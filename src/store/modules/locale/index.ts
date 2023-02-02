import { defineStore } from 'pinia';

export const useLocaleStore = defineStore({
    id: 'locale',
    state: () => ({
        locale: 'zh-CN',
    }),
    getters: {
        getLocale(): string {
            return this.locale;
        },
    },
    actions: {
        setLocale(locale: string) {
            this.locale = locale;
            localStorage.setItem('locale', locale);
        },
    },
});

export default useLocaleStore;
