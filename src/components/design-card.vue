<template>
    <div class="design-card">
        <sm-img class="cover" :src="design.url.thumbnail" />
        <div class="name">
            {{ design.name }}
        </div>
    </div>
</template>
<script setup>
import SmImg from './sm-img.vue';

const props = defineProps({ design: Object, });

</script>
<style lang="scss" scoped>
@import "../assets/base.scss";

.design-card {
    width: 100%;
    margin: 0 auto;
    position: relative;
    min-height: 120px;

    .cover {
        img {
            width: 100%;
        }
    }


    .name {
        text-align: center;
        width: 100%;
        color: white;
        background-color: $primary-color;
        font-size: $lg-font-size;
        padding: 8px;
        box-sizing: border-box;
    }
}
</style>