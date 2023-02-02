import { post } from '@/utils/http/axios';
import { IResponse } from '@/utils/http/axios/type'; // 导入返回值类型接口

// 定义参数类型接口
interface LoginDataType {
    username?: string;
    password?: string;
}
// 定义地址枚举
enum URL {
    login = 'api/login',
}

const loginApi = async (loginData: LoginDataType) => {
    await post<IResponse>({
        url: URL.login,
        data: loginData,
    });
};

export { loginApi };
