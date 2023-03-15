<template>
    <div class="layout">
        <sm-set-title :title="title" />
        <header>
            <router-link :to="{
                name: 'dashboard-home'
            }">
                <sm-icon icon="home" class="home-button" />
            </router-link>
            <div class="title">{{ title }}</div>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <layout-footer />
        </footer>
    </div>
</template>
<script setup>
import LayoutFooter from './layout-footer.vue'
import smIcon from './sm-icon.vue';
import SmSetTitle from './sm-set-title.vue';
import { RouterLink } from 'vue-router';
const props = defineProps({ title: String });

</script>
<style lang="scss" scoped>
@import "../assets/base.scss";

.layout {
    min-height: 100vh;
    background-color: $primary-color;
}

header {
    height: $size-6;
    background-color: $primary-color;
    color: $auxiliary-color;
    line-height: $size-6;

    .home-button {
        position: absolute;
        left: 0;
        top: 0;
        height: $size-4;
        width: $size-4;
        margin: $size-1;
    }

    .title {
        height: $size-6;
        line-height: $size-6;
        display: inline-block;
        color: $auxiliary-color;
        text-align: center;
        width: 100%;
    }
}

main {
    background-color: $auxiliary-color;
}

footer {
    padding: $size-2 $size-1;
    line-height: $sm-font-size * 2;
    font-size: $sm-font-size;
    text-align: center;
    background-color: $primary-color;
    color: $auxiliary-color;
}
</style>