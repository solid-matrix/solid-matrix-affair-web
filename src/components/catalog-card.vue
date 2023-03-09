<template>
    <div class="catalog-card">
        <sm-img class="cover" src="/catalog-cover.jpg" />

        <div class="title">
            {{ catalog.title }}
        </div>
        <div class="subtitle">
            {{ catalog.subTitle }}
        </div>
    </div>
</template>

<script setup>
import SmImg from './sm-img.vue';

const props = defineProps({ catalog: Object, });
</script>

<style lang="scss" scoped>
@import "../assets/base.scss";

.catalog-card {
    width: 100%;
    margin: 0 auto;
    position: relative;
    min-height: 120px;

    .cover {
        img {
            width: 100%;
        }
    }

    .title {
        position: absolute;
        top: 0;
        left: 0;
        margin: 50% 0;
        text-align: center;
        width: 100%;
        color: white;
        font-size: $lg-font-size;
    }

    .subtitle {
        position: absolute;
        bottom: 0;
        left: 0;
        text-align: center;
        width: 100%;
        line-height: calc($sm-font-size + 8px);
        color: #eee;
        font-size: $md-font-size;
        padding: 8px;
        box-sizing: border-box;
    }
}
</style>