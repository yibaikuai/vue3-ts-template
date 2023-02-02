<template>
    <transition name="fade">
        <div>
            <div class="dashboard-box">
                <div class="dashboard-top">
                    <el-card class="ana-card">
                        <div class="bar-item">
                            <div class="item-title">
                                {{ $t('dashboard.visitorNumber') }}
                            </div>
                            <el-divider></el-divider>
                            <el-skeleton
                                animated
                                :loading="hasRender"
                                :rows="2"
                            >
                                {{ visitorNumber }}
                            </el-skeleton>
                        </div>
                    </el-card>
                    <el-card class="ana-card">
                        <div class="bar-item">
                            <div class="item-title">
                                {{ $t('dashboard.dealAmount') }}
                            </div>
                            <el-divider></el-divider>
                            <el-skeleton
                                animated
                                :loading="hasRender"
                                :rows="2"
                            >
                                {{ dealAmount }}
                            </el-skeleton>
                        </div>
                    </el-card>
                    <el-card class="ana-card">
                        <div class="bar-item">
                            <div class="item-title">
                                {{ $t('dashboard.downloadNumber') }}
                            </div>
                            <el-divider></el-divider>
                            <el-skeleton
                                animated
                                :loading="hasRender"
                                :rows="2"
                            >
                                {{ downloadNumber }}
                            </el-skeleton>
                        </div>
                    </el-card>
                    <el-card class="ana-card">
                        <div class="bar-item">
                            <div class="item-title">
                                {{ $t('dashboard.dealNumber') }}
                            </div>
                            <el-divider></el-divider>
                            <el-skeleton
                                animated
                                :loading="hasRender"
                                :rows="2"
                            >
                                {{ dealNumber }}
                            </el-skeleton>
                        </div>
                    </el-card>
                </div>
                <div class="dashboard-mid animate-delay">
                    <el-card class="chart-card">
                        <div id="chart"></div>
                    </el-card>
                </div>
                <div class="dashboard-btm"></div>
            </div>
        </div>
    </transition>
</template>

<script lang="ts" setup>
import * as echarts from 'echarts/core';
import { GridComponent, GridComponentOption } from 'echarts/components';
import { LineChart, LineSeriesOption } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { onMounted, onUpdated, ref } from 'vue';
import { getDashBoardInfoApi } from '@/api/dashboard';
echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);
let visitorNumber = ref(0);
let dealAmount = ref(0);
let downloadNumber = ref(0);
let dealNumber = ref(0);
type EChartsOption = echarts.ComposeOption<
    GridComponentOption | LineSeriesOption
>;
const initChart = () => {
    let chartDom = document.getElementById('chart')!;
    let myChart = echarts.init(chartDom);
    let option: EChartsOption;

    option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line',
            },
        ],
    };
    option && myChart.setOption(option);

    window.onresize = function () {
        //自适应大小
        myChart.resize();
    };
};
let hasRender = ref(true);
setTimeout(() => {
    hasRender.value = false;
}, 1000);

const getDashBoardInfo = async () => {
    let res = await getDashBoardInfoApi();
    visitorNumber.value = res.visitorNumber;
    dealAmount.value = res.dealAmount;
    downloadNumber.value = res.downloadNumber;
    dealNumber.value = res.dealNumber;
};
onMounted(() => {
    initChart();
    getDashBoardInfo();
});
onUpdated(() => {
    initChart();
});
</script>

<style scoped lang="less">
.dashboard-box {
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    .dashboard-top {
        height: 150px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .ana-card {
            width: 24%;
            background-color: var(--bar-bg-color);
            color: var(--text-color);
            border: 2px solid var(--border-color);
            .bar-item {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }
    }
    .dashboard-mid {
        padding-top: 20px;
        width: 100%;
        height: 400px;
        .chart-card {
            width: 100%;
            height: 400px;
            #chart {
                width: 100%;
                height: 400px;
                transition: 0.5s;
            }
        }
    }
}
:deep(.el-divider) {
    margin: 0 0 10px 0;
    color: var(--border-color);
}
:deep(.el-card__body) {
    padding: 0 0;
    width: 100%;
    height: 100%;
}
:deep(.el-card) {
    border: 1px solid var(--border-color);
    background-color: var(--bar-bg-color);
}
:deep(.el-skeleton) {
    width: 90%;
    height: 90%;
}
.animate-delay {
    transition-delay: 2s;
}
.fade-enter-active {
    transition: all 0.3s ease-out;
}
.fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter-from {
    transform: translateY(20px);
    opacity: 0;
}
.fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
    transition: 0.3s;
}
.fade-enter-active .dashboard-mid {
    transition: all 0.3s ease-out;
}
.fade-leave-active .dashboard-mid {
    transition: opacity 0.3s;
    transition-delay: 1.5s;
}
.fade-enter-from .dashboard-mid {
    transform: translateY(20px);
    opacity: 0;
}
.fade-leave-to .dashboard-mid {
    transform: translateX(20px);
    opacity: 0;
    transition: 0.3s;
}
</style>
