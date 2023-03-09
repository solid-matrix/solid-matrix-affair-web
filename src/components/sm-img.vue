<template>
    <div>
        <img :src="src" class="sm-img" loading="lazy" />
    </div>
</template>

<script setup>
const props = defineProps({
    src: String,

})
</script>

<style lang="scss" scoped>
.sm-img {
    display: block;
    margin: 0 auto;
    max-width: 100%;
}
</style>
