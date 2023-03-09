<template>
    <div class="sm-row">
        <slot></slot>
    </div>
</template>

<style lang="scss">
.sm-row {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: stretch;
    align-content: stretch;
    display: flex;
}
</style>
