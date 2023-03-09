<template>
    <layout-catalogs>
        <sm-set-title :title="title" />
        <template v-slot:header>
            <div>{{ catalog.caption }}</div>
        </template>
        <sm-grid class="padding">
            <sm-row>
                <sm-col v-for="design in catalog.designs" v-bind:key="design.id" xs="12" sm="6" md="4" lg="3" xl="3">
                    <div class="gap">
                        <design-card :design="design" />
                    </div>
                </sm-col>
            </sm-row>
        </sm-grid>
    </layout-catalogs>
</template>

<script setup>
import { computed } from "vue";
import useStore from '../stores/catalogs-store';
import SmSetTitle from "../components/sm-set-title.vue";
import SmGrid from '../components/sm-grid.vue';
import SmRow from '../components/sm-row.vue';
import SmCol from '../components/sm-col.vue';
import DesignCard from "../components/design-card.vue";
import LayoutCatalogs from "../components/layout-catalogs.vue";

const props = defineProps({ catalogId: String })
const store = useStore();

const catalog = computed(() => store.catalogMap[props.catalogId])
const title = computed(() => catalog.value.title || "Catalog")

</script>

<style lang="scss" scoped>
.padding {
    padding: 4px;
}

.gap {
    margin: 4px;
}
</style>