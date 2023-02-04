import { post } from '@/utils/http/axios';
import { URL, LoginDataType, loginResponse, logOutResponse } from './types';
// 定义参数类型接口

const loginApi = (loginData: LoginDataType) => {
    return post<loginResponse>({
        url: URL.login,
        data: loginData,
    });
};

const logOutApi = () => {
    return post<logOutResponse>({
        url: URL.loginOut,
    });
};

export { loginApi, logOutApi };
