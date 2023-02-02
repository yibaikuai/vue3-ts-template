import { defineStore } from 'pinia';

interface testType {
    number: number;
}

export const useTestStore = defineStore({
    id: 'test',
    state: (): testType => ({
        number: 0,
    }),
    getters: {},
    actions: {
        setNumber(number: number): void {
            this.number = number;
        },
    },
    persist: {
        enabled: true,
        encryptionKey: 'vueTest',
    },
});
