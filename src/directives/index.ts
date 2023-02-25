import pin from './pin';
import { App } from 'vue';
export default {
    install(app: App) {
        app.directive('pin', pin);
    },
};
