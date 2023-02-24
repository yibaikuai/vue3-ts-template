<template>
    <div
        ref="list"
        class="infinite-list-container"
        @scroll="scrollEvent($event)"
    >
        <div
            class="infinite-list-phantom"
            :style="{ height: listHeight + 'px' }"
        ></div>
        <div class="infinite-list" :style="{ transform: getTransform }">
            <div
                ref="items"
                class="infinite-list-item"
                v-for="item in visibleData"
                :key="item.id"
                :style="{
                    height: itemSize + 'px',
                    lineHeight: itemSize + 'px',
                }"
            >
                {{ item.value }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
const props = defineProps({
    listData: {
        type: Array,
        default: () => [],
    },
    itemSize: {
        type: Number,
        default: 200,
    },
});
let listHeight = computed(() => {
    return props.listData.length * props.itemSize;
});
let visibleCount = computed(() => {
    return Math.ceil(screenHeight.value / props.itemSize);
});
let getTransform = computed(() => {
    return `translate3d(0,${startOffset.value}px,0)`;
});
let visibleData = computed(() => {
    return props.listData.slice(startIndex.value, endIndex.value);
});
let screenHeight = ref(0);
let startOffset = ref(0);
let startIndex = ref(0);
let endIndex = ref(0);
const list = ref<HTMLDivElement>();
const scrollEvent = (e: Event) => {
    let scrollTop = (e.target as HTMLDivElement).scrollTop;
    startIndex.value = Math.floor(scrollTop / props.itemSize);
    endIndex.value = startIndex.value + visibleCount.value;
    startOffset.value = startIndex.value * props.itemSize;
};
onMounted(() => {
    screenHeight.value = list!.value!.clientHeight;
    endIndex.value = startIndex.value + visibleCount.value;
});
</script>

<style scoped>
.infinite-list-container {
    height: 500px;
    overflow: auto;
    position: relative;
    -webkit-overflow-scrolling: touch;
}

.infinite-list-phantom {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    z-index: -1;
}

.infinite-list {
    left: 0;
    right: 0;
    top: 0;
    position: absolute;
    text-align: center;
}

.infinite-list-item {
    padding: 10px;
    color: #555;
    box-sizing: border-box;
    border-bottom: 1px solid #999;
}
</style>
