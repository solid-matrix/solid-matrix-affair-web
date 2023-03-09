<template>
    <layout-catalogs>
        <sm-set-title :title="title" />

        <template v-slot:header>
            <h1>
                {{ store.homeMeta.title }} <small>{{ store.subTitle }}</small>
            </h1>
            <div>{{ store.homeMeta.caption }}</div>
        </template>

        <sm-grid class="padding">
            <sm-row>
                <sm-col v-for="catalog in store.catalogs" v-bind:key="catalog.id" xs="6" sm="4" md="3" lg="2" xl="2">
                    <div class="gap">
                        <router-link :to="{
                            name: 'catalogs-catalog',
                            params: { catalogId: catalog.id },
                        }">
                            <catalog-card :catalog="catalog" />
                        </router-link>
                    </div>


                </sm-col>
            </sm-row>
        </sm-grid>
    </layout-catalogs>
</template>
<script setup>
import { computed } from 'vue';

import SmSetTitle from '../components/sm-set-title.vue';
import SmGrid from '../components/sm-grid.vue';
import SmRow from '../components/sm-row.vue';
import SmCol from '../components/sm-col.vue';
import LayoutCatalogs from '../components/layout-catalogs.vue';
import CatalogCard from '../components/catalog-card.vue';


import useCatalogsStore from '../stores/catalogs-store';

const store = useCatalogsStore();
const title = computed(() => store.homeMeta.title || "Catalogs");


</script>
<style lang="scss" scoped>
.padding {
    padding: 4px;
}

.gap {
    margin: 4px;
}
</style>