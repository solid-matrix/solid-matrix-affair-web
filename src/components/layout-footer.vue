<template>
    <div>Powered By <b>SolidMatrix.Affair</b> Engine.</div>
    <div>
        <a :href="beianLink" target="_blank">{{ beianNo }}</a>
    </div>
</template>

<script setup>
const beianNo = import.meta.env.VITE_BEIAN_NO
const beianLink = import.meta.env.VITE_BEIAN_LINK
</script>