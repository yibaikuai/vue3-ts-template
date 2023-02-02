<template>
    <el-menu
        :collapse="isCollapse"
        class="menu-list"
        text-color="var(--text-color)"
        background-color="var(--bar-bg-color)"
        :default-active="activeIndex"
        active-text-color="white"
    >
        <div class="aside-title">
            <img alt="logo" id="logo" :src="getSrc('logo')" />
            <div class="aside-title-words" v-show="!isCollapse">Template</div>
        </div>
        <div class="menu-item-divider">MENU</div>
        <el-menu-item
            index="/dashboard"
            class="menu-item"
            @click="goTo('/dashboard')"
        >
            <IconFont
                icon="icon-park-outline:dashboard-one"
                class="dashboard-icon"
            />
            <transition>
                <span
                    v-show="!isCollapse"
                    class="menu-item-words animate__animated animate__bounceIn"
                    >{{ $t('sider.dashboard.title') }}</span
                >
            </transition>
        </el-menu-item>
        <el-menu-item
            index="/upload"
            class="menu-item"
            @click="goTo('/upload')"
        >
            <SvgIcon
                name="test-vue"
                size="20"
                :color="isActiveIcon('/upload')"
            ></SvgIcon>
            <transition>
                <div
                    class="menu-item-words animate__animated animate__bounceIn"
                    v-show="!isCollapse"
                >
                    {{ $t('sider.upload.title') }}
                </div>
            </transition>
        </el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
import router from '@/router';
import { ref } from 'vue';
let activeIndex: string = router.currentRoute.value.path;
import { getCurrentInstance } from 'vue';
import { useDark } from '@vueuse/core';
import { usePageStore } from '@/store';
const store = usePageStore();
const isDark = useDark();
const instance = getCurrentInstance() as any;
let isCollapse = ref(false);
instance?.proxy?.$Bus.on('toggle-collapse', (collapseState: boolean) => {
    isCollapse.value = collapseState;
    store.setIsCollapse(collapseState);
});
const goTo = (path: string) => {
    activeIndex = path;
    router.push(path);
};
const isActiveIcon = (path: string) => {
    const currentPath = router.currentRoute.value.path;
    if (!isDark.value) {
        return currentPath === path ? 'white' : 'black';
    } else {
        return currentPath === path ? 'black' : 'white';
    }
};
const getSrc = (name: string) => {
    return new URL(`../../assets/images/${name}.png`, import.meta.url).href; //不能用‘@’
};
</script>

<style scoped lang="less">
.menu-list {
    transition: 0.5s;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    height: 100%;
    boder-right: 1px solid #e4e7ed;
    .aside-title {
        width: 240px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;
        #logo {
            width: 20px;
            height: 20px;
        }
        .aside-title-words {
            padding-left: 5px;
            width: 93px;
            height: 24px;
            opacity: 1;
            /** 文本1 */
            font-size: 20px;
            font-weight: 600;
            letter-spacing: 0;
            color: var(--text-color);
        }
    }
    .menu-item-divider {
        padding: 15px 0 14px 0;
        color: var(--text-color);
    }
    .menu-item {
        position: relative;
        width: 90%;
        height: 45px;
        opacity: 1;
        border-radius: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 4px;
        cursor: pointer;
        padding-left: 20px;
        z-index: 1;
        .menu-item-words {
            padding: 14px;
            font-size: 17px;
            font-weight: 700;
            letter-spacing: 0.42px;
        }
        .dashboard-icon {
            font-size: 19px;
        }
    }
    .menu-item:after {
        position: absolute;
        content: '';
        width: 0;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 10px;
        transition: 0.25s;
        z-index: -1;
    }
    .menu-item:hover:after {
        width: 100%;
        background-color: var(--theme-color);
    }
    .menu-item:hover {
        transition: 0.25s;
        color: white;
        background-color: white;
    }
}
.is-active {
    background: var(--theme-color) !important;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>
