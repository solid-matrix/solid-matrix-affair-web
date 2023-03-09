<script setup>
import icons from "./icons";

const props = defineProps({
    icon: String
});

const render = icons[props.icon];
</script>

<template>
    <component :is="render" class="sm-icon" />
</template>

<style lang="scss" >
svg>path {
    fill: currentColor;
}

.sm-icon {
    display: inline-block;
    box-sizing: border-box;
    font-style: normal;
    text-align: center;
    text-transform: none;
    text-rendering: optimizeLegibility;
    width: 1em;
    height: 1em;
    line-height: 1em;
}
</style>

