<template>
    <div>
        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
                <component :is="Component" />
                <!--  二级路由的内容 具体在页面内部的内容 -->
            </transition>
        </router-view>
    </div>
</template>

<script lang="ts" setup></script>

<style scoped>
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
</style>
