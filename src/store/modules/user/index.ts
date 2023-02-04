import { defineStore } from 'pinia';

interface userType {
    token: string;
}

export const useUserStore = defineStore({
    id: 'user',
    state: (): userType => ({
        token: '',
    }),
    actions: {
        setToken(token: string): void {
            this.token = token;
        },
        clearToken(): void {
            this.token = '';
        },
    },
    persist: {
        enabled: true,
        encryptionKey: 'userInfo',
    },
});
