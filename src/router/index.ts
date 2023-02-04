import { createRouter, createWebHistory } from 'vue-router';
import { RouteRecordRaw } from 'vue-router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Layout from '@/layouts/index.vue';

const modulesFiles: any = import.meta.glob('./modules/**/*.ts', {
    eager: true,
}); // 读取modules文件夹下的所有ts文件
// eager设置为true，表示立即执行，否则需要调用函数才会执行
// import()方法 是运行时加载模块，返回一个Promise对象 import在编译时加载，所以在运行时不能动态加载
// [{ 模块路径： ./modules/Test/index.ts :  模块对象：{  模块接口default: { 路由数组[] } } },{}]
// console.log(modulesFiles)
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Layout,
        meta: {
            title: '首页',
        },
        redirect: '/dashboard',
        children: [
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: () => import('@/views/dashboard/index.vue'),
                meta: {
                    title: '首页',
                },
            },
        ],
    },
];
for (const path in modulesFiles) {
    // console.log(modulesFiles[path].default[0].children); // 每一个路由模块的对象的数组
    routes[0].children!.push(...modulesFiles[path].default[0].children); // 将每一个路由模块的对象的数组展开成每一个对象 push进去

    // 模块导出是export default 将default作为接口 default 是因为每一个路由模块都是一个对象，对象里面有一个default属性,代表模块的接口
}
// console.log(routes)
// const storeFille:any = import.meta.glob('@/store/*.ts',{eager:true})
// const storeFille:any = import.meta.glob('@/store/modules/**/*.ts',{eager:true})
// console.log(storeFille)
// 模块导出export {useTestStore}  导出的是useTestStore接口 而不是default接口
const loginRoutes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/index.vue'),
    },
];
routes.push(...loginRoutes);
const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (_to, _from, next) => {
    NProgress.start();
    next();
});

router.afterEach(() => {
    NProgress.done();
});
export default router;
