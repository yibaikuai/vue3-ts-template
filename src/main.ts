import { createApp } from 'vue';
import './styles/style.css';
import 'animate.css';
import 'element-plus/dist/index.css';
import './styles/global.less';
import 'virtual:svg-icons-register'; //   这是一个虚拟模块，不会被打包，只会在开发环境中被解析，用于注册svg图标
import i18n from '@/locale';

import SvgIcon from '@/components/SvgIcon/index.vue'; // 用于全局注册svg组件
import mitt from 'mitt'; // 事件总线
import router from '@/router/index';
import ElementPlus from 'element-plus';

import { createPinia } from 'pinia';
import { usePersist } from 'pinia-use-persist'; // 用于持久化pinia的数据
import { useRegisterSW } from 'virtual:pwa-register/vue';
useRegisterSW();
const pinia = createPinia();
const Mitt = mitt();
pinia.use(usePersist);

import { Icon } from '@iconify/vue';
import App from './App.vue';
const app = createApp(App);
app.use(ElementPlus)
    .use(i18n)
    .use(router)
    .use(pinia)
    .component('SvgIcon', SvgIcon)
    .mount('#app');
app.config.globalProperties.$Bus = Mitt;
app.component('IconFont', Icon);
declare module 'vue' {
    // 扩展vue的globalProperties
    export interface ComponentCustomProperties {
        $Bus: typeof Mitt; // 声明注册
    }
}
