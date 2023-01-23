export interface RequestOptions {
    // Whether to process the request result
    isTransformResponse?: boolean;
}

// 返回res.data的interface
export interface IResponse<T = any> {
    code: number | string;
    data: T;
    msg: string;
    status: string | number;
}