<template>
    <div class="loading">
        <loading-icon class="loading-icon" />
    </div>
</template>

<script setup>
import LoadingIcon from './icons/icon-loading.vue';
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";

.loading {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $primary-color;

    .loading-icon {
        position: relative;
        color: $auxiliary-color;
        width: 64px;
        height: 64px;
        top: -32px;
        margin: 50vh auto;
    }
}
</style>