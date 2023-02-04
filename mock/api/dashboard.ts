import { MockMethod } from 'vite-plugin-mock';
import { Random } from 'mockjs';
const dealAmount = Random.integer(1000, 10000);
const visitorNumber = Random.integer(1000, 10000);
const dealNumber = Random.integer(1000, 10000);
const downloadNumber = Random.integer(1000, 10000);
export default [
    {
        url: '/api/getDashBoardInfo', // 注意，这里只能是string格式
        method: 'get',
        response: () => {
            return {
                code: 0,
                status: 200,
                data: {
                    dealAmount,
                    visitorNumber,
                    dealNumber,
                    downloadNumber,
                },
                msg: '获取成功',
            };
        },
    },
] as MockMethod[]; // 定义数据格式
