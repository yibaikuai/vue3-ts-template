import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    AxiosError,
} from "axios";
import { IResponse } from "./type";
import {ElMessage} from "element-plus";

axios.defaults.timeout = 5000
const axiosInstance: AxiosInstance = axios.create({
    baseURL:import.meta.env.VITE_APP_API_BASEURL + '',
    // import.meta.env 是vite提供的环境变量
});

axiosInstance.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        return config
    },
    (error: any) => {
        ElMessage.error(error)
        return Promise.reject(error)
    }
    )

axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        const { data } = response
        if (data.status === 200) {
            ElMessage.success(data.msg)
        }else{
            ElMessage.error(data.msg)
        }
        return response
    },
    (error: AxiosError) => {
        ElMessage.error(error.message || 'network error')
        return Promise.reject(error)
    })
// Promise<T> T是泛型，表示Promise.resolve的返回值类型
const request = <T = any>(config: AxiosRequestConfig): Promise<T> => {
    const conf = config
    return new Promise((resolve) => {
        axiosInstance.request<any,AxiosResponse<IResponse>>(config).then((res:AxiosResponse<IResponse>) => {
            // const { data: { result }} = res  // 连续解构赋值
            const {result:data} = res.data
            resolve(data as T)
        })
    })
}

export function get<T = any>(config: AxiosRequestConfig): Promise<T> {
    return request<T>({...config, method: 'GET', })
}
export function post<T = any>(config: AxiosRequestConfig): Promise<T> {
    return request<T>({...config, method: 'POST', })
}

export default request
export type {AxiosResponse,AxiosInstance}

