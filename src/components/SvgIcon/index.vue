<template>
    <svg aria-hidden="true" class="svg-icon" :style="getStyle">
        <use :xlink:href="symbolId" :fill="color" :size="size" />
    </svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import type { CSSProperties } from 'vue';
const props = defineProps({
    prefix: {
        type: String,
        default: 'icon',
    },
    name: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: '#333',
    },
    size: {
        type: [Number, String],
        default: 20,
    },
});
const symbolId = computed(() => `#${props.prefix}-${props.name}`);
const getStyle = computed((): CSSProperties => {
    const { size } = props;
    let s = `${size}`;
    s = `${s.replace('px', '')}px`;
    return {
        width: s,
        height: s,
    };
});
</script>
<style lang="less">
.svg-icon {
    width: 1em;
    height: 1em;
    fill: v-bind(color);
    vertical-align: middle;
    color: v-bind(color);
    cursor: pointer;
}
.svg-icon:hover {
    fill: var(--theme-color);
}
</style>
