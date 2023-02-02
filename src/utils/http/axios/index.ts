import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    AxiosError,
} from 'axios';
import { IResponse } from './type';
import { ElMessage } from 'element-plus';

axios.defaults.timeout = 5000;
const axiosInstance: AxiosInstance = axios.create({
    // import.meta.env 是vite提供的环境变量
});

axiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        return config;
    },
    (error: any) => {
        ElMessage.error(error);
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        const { data } = response;
        if (data.status === 200) {
            ElMessage.success(data.msg);
        } else {
            ElMessage.error(data.msg);
        }
        return response;
    },
    (error: AxiosError) => {
        let msg = '';
        const status = error.response?.status;
        switch (status) {
            case 400:
                msg = '请求错误';
                break;
            case 401:
                msg = 'token失效，请重新登录';
                break;
            case 403:
                msg = '拒绝访问';
                break;
            case 404:
                msg = `请求地址出错: ${error.response?.config.url}`;
                break;
            case 408:
                msg = '请求超时';
                break;
            case 500:
                msg = '服务器内部错误';
                break;
            case 501:
                msg = '服务未实现';
                break;
            case 502:
                msg = '网关错误';
                break;
            case 503:
                msg = '服务不可用';
                break;
            case 504:
                msg = '网关超时';
                break;
            case 505:
                msg = 'HTTP版本不受支持';
                break;
            default:
                msg = '网络连接故障';
                break;
        }
        ElMessage.error(msg);
        return Promise.reject(error);
    }
);
// Promise<T> T是泛型，表示Promise.resolve的返回值类型
const request = <T = any>(config: AxiosRequestConfig): Promise<T> => {
    return new Promise((resolve) => {
        axiosInstance
            .request<any, AxiosResponse<IResponse>>(config)
            .then((res: AxiosResponse<IResponse>) => {
                // const { data: { result }} = res  // 连续解构赋值
                const { data } = res.data;
                resolve(data as T);
            });
    });
};

export function get<T = any>(config: AxiosRequestConfig): Promise<T> {
    return request<T>({ ...config, method: 'GET' });
}
export function post<T = any>(config: AxiosRequestConfig): Promise<T> {
    return request<T>({ ...config, method: 'POST' });
}

export default request;
export type { AxiosResponse, AxiosInstance };
