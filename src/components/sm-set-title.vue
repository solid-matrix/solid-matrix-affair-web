<template></template>

<script setup>
import { onMounted, onUpdated, toRefs } from "vue";

const props = defineProps({
    title: String
})

onMounted(() => document.title = props.title || "");
onUpdated(() => document.title = props.title || "");
</script>