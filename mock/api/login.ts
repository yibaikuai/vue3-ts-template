import { MockMethod } from 'vite-plugin-mock';
export default [
    {
        url: '/api/login', // 注意，这里只能是string格式
        method: 'post',
        response: () => {
            return {
                code: 0,
                status: 200,
                data: {
                    token: '123456',
                },
                msg: '登录成功',
            };
        },
    },
    {
        url: '/api/loginOut', // 注意，这里只能是string格式
        method: 'post',
        response: () => {
            return {
                code: 0,
                status: 200,
                data: {
                    msg: '退出成功',
                },
                msg: '退出成功',
            };
        },
    },
] as MockMethod[]; // 定义数据格式
