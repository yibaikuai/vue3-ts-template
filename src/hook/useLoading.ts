import { Ref, ref } from 'vue';

type TApiFun<TData, TParams extends Array<any>> = (
    ...params: TParams
) => Promise<TData>;

interface AutoRequestOptions {
    // 定义一下初始状态
    loading?: boolean;
    // 接口调用成功时的回调
    onSuccess?: (data: any) => void;
}

type AutoRequestResult<TData, TParams extends Array<any>> = [
    Ref<boolean>,
    TApiFun<TData, TParams>
];

/* 控制loading状态的自动切换hook */
export function useAutoRequest<TData, TParams extends any[] = any[]>(
    fun: TApiFun<TData, TParams>,
    options?: AutoRequestOptions
): AutoRequestResult<TData, TParams> {
    const { loading = false, onSuccess } = options || { loading: false };

    const requestLoading = ref(loading);

    const run: TApiFun<TData, TParams> = (...params) => {
        requestLoading.value = true;
        return fun(...params)
            .then((res) => {
                onSuccess && onSuccess(res);
                return res;
            })
            .finally(() => {
                requestLoading.value = false;
            });
    };

    return [requestLoading, run];
}
