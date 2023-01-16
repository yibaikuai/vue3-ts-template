import type {RouteRecordRaw} from "vue-router";
import Layout from "@/layouts/index.vue";
const uploadRoutes:RouteRecordRaw[] =[
    {
        path: '/upload',
        name: 'Upload',
        component: Layout,
        children: [
            {
                path: '/upload',
                name: 'Upload',
                component: () => import('@/views/upload/index.vue'),
            }]
    }]

export default uploadRoutes