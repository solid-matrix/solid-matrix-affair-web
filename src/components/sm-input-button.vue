<template>
    <button class="sm-input-button">
        <sm-icon v-if="icon" :icon="icon" />
        <slot></slot>
        <span v-if="text">{{ text }}</span>
    </button>
</template>
<script setup>
import SmIcon from './sm-icon.vue';

defineProps({
    icon: String,
    text: String,
})

</script>
<style lang="scss">
@import "../assets/base.scss";

.sm-input-button {
    outline: none;
    display: inline-block;
    box-sizing: content-box;
    width: auto;
    padding: 8px;
    margin: 0;
    border: 1px $primary-color solid;
    line-height: 1em;
    font-size: 1em;
    background-color: $primary-color;
    color: $auxiliary-color;
    cursor: pointer;
}
</style>