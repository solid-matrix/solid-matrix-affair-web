<template>
    <sm-loading-page v-if="!store.ready" />
    <div v-else class="layout">
        <!-- Header -->
        <header>
            <slot name="header"></slot>
        </header>
        <!-- Main -->
        <main>
            <slot></slot>
        </main>
        <!-- Footer -->
        <layout-footer />
        <!-- Nav -->
        <nav>
            <div class="placeholder"></div>
            <div class="fixed">
                <div class="navbar">
                    <sm-input-group>
                        <sm-input-button icon="back" @click="$router.back()" />
                        <sm-input-button icon="image" @click="$router.push({ name: 'catalogs-home' })" />
                        <sm-input-text search @keyup.enter="onSearch" v-model="searchInput" />
                        <sm-input-button icon="search" @click="onSearch" />
                    </sm-input-group>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue';

import SmLoadingPage from './sm-loading-page.vue'
import SmInputGroup from './sm-input-group.vue';
import LayoutFooter from './layout-footer.vue'
import SmInputButton from './sm-input-button.vue';
import SmInputText from './sm-input-text.vue';
import useCatalogsStore from '../stores/catalogs-store';


const store = useCatalogsStore();
const router = useRouter();
const searchInput = ref("")

store.loadMeta();

const onSearch = () => {
    const search = searchInput.value.trim();
    if (search && search.length > 0)
        router.push({ name: "catalogs-search", params: { search } });
}

</script>


<style lang="scss" scoped>
@import "../assets/base.scss";

.layout {
    min-height: 100vh;
    background-color: $layout-bg-color;
    color: $layout-color;
}

header {
    min-height: $header-height;

    padding: 16px 0;
    font-size: $sm-font-size;
    line-height: $md-font-size;
    text-align: center;
    white-space: pre-line;

}

main {
    background-color: $main-bg-color;
    color: $main-color;
    box-shadow: 0 0 16px black;
    border-left: 3px solid $primary-color;
    border-right: 3px solid $primary-color;
    padding: 0;
}

footer {
    padding: $size-2 $size-1;
    line-height: $sm-font-size * 2;
    font-size: $sm-font-size;
    text-align: center;
}

nav {
    .placeholder {
        height: $navbar-height;
    }

    .fixed {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        box-sizing: border-box;
        padding: $size-2;

        .navbar {
            font-size: $xl-font-size;
            box-shadow: 0 0 8px black;

            * {
                background-color: $auxiliary-color;
                color: $primary-color;
            }
        }
    }
}
</style>
