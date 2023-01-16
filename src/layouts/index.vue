<template>
  <div class="common-layout">
    <el-config-provider
        :locale="locale"
    >
    <el-container>
      <el-aside width="auto" class="aside-layout"><LayoutAside /></el-aside>
      <el-container>
        <el-header class="layout-header"><LayoutHeader  /></el-header>
        <el-main class="layout-content">
          <LayoutContent />
        </el-main>
      </el-container>
    </el-container>
    </el-config-provider>
  </div>
</template>

<script lang="ts" setup>
import LayoutContent from './content/index.vue'
import LayoutHeader from './header/index.vue'
import LayoutAside from './sider/index.vue'
import { ref,computed,getCurrentInstance} from 'vue'
import {usePageStore,useLocaleStore} from "@/store";
const store = usePageStore();
const localeStore = useLocaleStore();

import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'

const instance = getCurrentInstance() as any;
let currentlang = ref(localStorage.getItem('locale') || 'zh-CN');

instance?.proxy?.$Bus.on('change-lang', (lang: string) => {
  localeStore.setLocale(lang)
  currentlang.value = lang;
});
const locale = computed(() => (currentlang.value === 'zh-CN' ? zhCn : en))
</script>

<style scoped lang="less">
.el-container{
  height: 100%;
.aside-layout{
  left: 0;
  top: 0;
  opacity: 1;
  background: var(--bar-bg-color);
  box-shadow:inset -1px 0px 0px 0px rgba(20, 27, 53, 0.12);
}
}
.common-layout{
  width: 100%;
  height: 100%;
}
.layout-header{
  left: 260px;
  top: 0;
  height: 48px;
  opacity: 1;
  //background: rgba(255, 255, 255, 1);
  transition: 0.5s;
  background: var(--bar-bg-color);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
}
.layout-content{
  background-color:var(--content-bg-color);
  color: var(--text-color);
  transition: 0.5s;
  overflow: hidden;
}
</style>