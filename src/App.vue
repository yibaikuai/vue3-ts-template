<script setup lang="ts"></script>
<template>
    <div class="first-level">
        <router-view />
        <!--    一级路由展示的内容 全都是Layout组件的内容    -->
    </div>
</template>

<style scoped lang="less">
.first-level {
    height: 100%;
}
</style>
