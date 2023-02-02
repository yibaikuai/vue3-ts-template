import { get } from '@/utils/http/axios';
import { dashboardType, URL } from '@/api/dashboard/types';

const getDashBoardInfoApi = () => {
    return get<dashboardType>({
        url: URL.getDashBoardInfo,
    });
};

export { getDashBoardInfoApi };
