<template>
    <layout-dashboard :title="title">
        <div class="padding">
            <sm-input-group>
                <sm-input-text search @keyup.enter="onSearch" v-model="searchInput" />
                <sm-input-button icon="search" @click="onSearch" />
            </sm-input-group>

            <sm-grid class="padding">
                <sm-row>
                    <sm-col v-for="design in designs" v-bind:key="design.id" xs="12" sm="6" md="4" lg="3" xl="3">
                        <div class="gap">
                            <design-card :design="design" />
                        </div>
                    </sm-col>
                </sm-row>
            </sm-grid>
        </div>
    </layout-dashboard>
</template>
<script setup>
import { ref, computed } from 'vue';

import LayoutDashboard from '../components/layout-dashboard.vue'
import SmInputGroup from '../components/sm-input-group.vue'
import SmInputButton from '../components/sm-input-button.vue'
import SmInputText from '../components/sm-input-text.vue'
import designCard from '../components/design-card.vue';
import SmGrid from '../components/sm-grid.vue'
import SmRow from '../components/sm-row.vue'
import SmCol from '../components/sm-col.vue'
import { features } from '../dashboard'
import useCatalogsStore from '../stores/catalogs-store';
const { title } = features.filter(f => f.name == 'design-search')[0]
const catalogsStore = useCatalogsStore();
catalogsStore.loadMeta();

const searchInput = ref("")
const search = ref("")

const designs = computed(() => {
    if (search.value.length == 0) return []
    return catalogsStore.designs.filter(d => d.name.includes(search.value)).slice(0, 10)
})

const onSearch = () => search.value = searchInput.value
</script>
<style lang="scss" scoped>
@import "../assets/base.scss";

.padding {
    padding: $size-2;
}
</style>