import { defineStore } from 'pinia';

type pageType = {
    isCollapse: boolean;
};

export const usePageStore = defineStore({
    id: 'page',
    state: (): pageType => ({
        isCollapse: false,
    }),
    getters: {
        getIsCollapse(): boolean {
            return this.isCollapse;
        },
    },
    actions: {
        toggleIsCollapse(): void {
            this.isCollapse = !this.isCollapse;
        },
        setIsCollapse(isCollapse: boolean): void {
            this.isCollapse = isCollapse;
        },
    },
    persist: {
        enabled: true,
        encryptionKey: 'page',
    },
});

export default usePageStore;
