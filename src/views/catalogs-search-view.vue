<template>
    <layout-catalogs>
        <sm-set-title :title="title" />
        <template v-slot:caption>
            <div class="caption">
                <div>Search 搜索</div>
                <div>{{ search }}</div>
            </div>
        </template>

        <div class="not-found" v-if="designs.length === 0">
            <div>Not Found</div>
            <div>未找到</div>
        </div>

        <sm-grid class="padding">
            <sm-row>
                <sm-col v-for="design in designs" v-bind:key="design.id" xs="12" sm="6" md="4" lg="3" xl="3">
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


const props = defineProps({ search: String })
const store = useStore();

const designs = computed(() => store.designs.filter(d => d.name.includes(props.search)).slice(0, 100))
const title = "Search " + props.search;


</script>

<style lang="scss" scoped>
@import "../assets/base.scss";

.padding {
    padding: 4px;
}

.gap {
    margin: 4px;
}

.caption {
    font-size: $md-font-size;
    line-height: $lg-font-size;
}

.not-found {
    padding: 64px 0;
    text-align: center;
    font-size: $xl-font-size;
}
</style>