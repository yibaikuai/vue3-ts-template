<template>
    <div class="header-box">
        <div class="header-left">
            <IconFont
                icon="system-uicons:side-menu"
                class="menu-icon"
                @click="toggleCollapse"
            />
            <IconFont
                class="github-icon"
                icon="bi:github"
                @click="goGithub"
            ></IconFont>
        </div>
        <div class="header-right">
            <div class="theme-area">
                <IconFont icon="noto-v1:sun" />
                <el-switch v-model="isDark" @click="toggleTheme" />
                <IconFont icon="noto-v1:night-with-stars" />
            </div>
            <div class="full-area" @click="toggleScreen">
                <IconFont
                    icon="icon-park-outline:full-screen-one"
                    v-show="!full"
                />
                <IconFont
                    icon="fluent:full-screen-minimize-24-filled"
                    v-show="full"
                />
            </div>
            <el-dropdown style="height: 48px" class="language-area">
                <span class="language-info">
                    <IconFont icon="cil:language" class="language-icon" />
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="changeLang('zh-CN')"
                            ><IconFont
                                icon="icon-park-outline:chinese"
                                style="margin-right: 5px"
                            />简体中文</el-dropdown-item
                        >
                        <el-dropdown-item @click="changeLang('en-US')"
                            ><IconFont
                                icon="icon-park-outline:english"
                                style="margin-right: 5px"
                            />English
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <el-dropdown style="height: 48px" class="user-area">
                <span class="user-info">
                    <el-avatar size="small" class="user-avatar"
                        ><IconFont icon="ri:user-star-fill"></IconFont>
                    </el-avatar>
                    <div class="user-name">admin</div>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>
                            <IconFont
                                icon="ri:user-star-fill"
                                style="margin-right: 5px"
                            ></IconFont
                            >{{ $t('header.user.userCenter') }}
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <IconFont
                                icon="ri:logout-circle-r-line"
                                style="margin-right: 5px"
                            />
                            {{ $t('header.user.logout') }}
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance, ref } from 'vue';
import { usePageStore, useLocaleStore } from '@/store';
import useLocale from '@/hook/useLocale';
const { changeLocale } = useLocale();
import { isFull, toggleFull } from 'be-full';
const store = usePageStore();
const localeStore = useLocaleStore();
const instance = getCurrentInstance();

const toggleCollapse = () => {
    const collapseState = store.$state.isCollapse;
    instance?.proxy?.$Bus.emit('toggle-collapse', !collapseState);
};
const goGithub = () => {
    window.open('https://github.com/yibaikuai/vue3-ts-template');
};
let full = ref(false);
const toggleScreen = () => {
    full.value = !isFull();
    toggleFull();
};
import { useDark, useToggle } from '@vueuse/core';
import { ElMessage } from 'element-plus';

const isDark = useDark();
const toggleDark = useToggle(isDark);
const toggleTheme = () => {
    toggleDark(isDark.value);
};
const changeLang = (lang: string) => {
    instance?.proxy?.$Bus.emit('change-lang', lang);
    ElMessage.success(`已切换至${lang === 'zh-CN' ? '简体中文' : 'English'}`);
    localeStore.setLocale(lang);
    changeLocale(lang);
};
</script>

<style scoped lang="less">
.header-box {
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: space-between;
    .header-left {
        flex: 1;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .menu-icon {
            font-size: 37px;
            cursor: pointer;
            color: var(--text-color);
            &:hover {
                color: var(--theme-color);
            }
        }
        .github-icon {
            cursor: pointer;
            font-size: 22px;
            margin-left: 12px;
            color: var(--text-color);
            &:hover {
                color: var(--theme-color);
            }
        }
    }
    .header-right {
        flex: 2;
        align-items: center;
        display: flex;
        justify-content: right;
        .theme-area {
            display: flex;
            align-items: center;
            margin-right: 10px;
            font-size: 17px;
            .el-switch {
                margin: 0 5px;
            }
        }
        .full-area {
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            color: var(--text-color);
            &:hover {
                background-color: var(--hover-color);
            }
        }
        .user-area {
            cursor: pointer;
            &:hover {
                background-color: var(--hover-color);
            }
            .user-info {
                display: flex;
                justify-content: space-around;
                align-items: center;
                font-size: 16px;
                margin: 0 15px;
                .user-name {
                    flex: 1;
                    margin-right: 4px;
                    color: var(--text-color);
                }
                .user-avatar {
                    flex: 1;
                    margin-right: 6px;
                }
            }
        }
        .language-area {
            cursor: pointer;
            .language-info {
                width: 48px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: var(--text-color);
            }
            &:hover {
                background-color: var(--hover-color);
            }
            .language-icon {
                font-size: 21px;
            }
        }
    }
}
</style>
