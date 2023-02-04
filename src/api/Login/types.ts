export interface LoginDataType {
    username: string;
    password: string;
}
// 定义地址枚举
export enum URL {
    login = 'api/login',
    loginOut = 'api/loginOut',
}

export interface loginResponse {
    token: string;
}

export interface logOutResponse {
    msg: string;
}
