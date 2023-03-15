<template>
    <layout-dashboard title="控制面板">
        <sm-grid class="padding">
            <sm-row>
                <sm-col xs="6" sm="4" md="3" lg="2" xl="1" v-for="feature in features" v-bind:key="feature.title">
                    <router-link :to="{ name: feature.route }">
                        <div class="feature-card">
                            <sm-icon :icon="feature.icon" class="icon" />
                            <div class="title">{{ feature.title }}</div>
                        </div>
                    </router-link>
                </sm-col>
            </sm-row>
        </sm-grid>
    </layout-dashboard>
</template>

<script setup>
import LayoutDashboard from '../components/layout-dashboard.vue';
import SmGrid from '../components/sm-grid.vue';
import SmRow from '../components/sm-row.vue';
import SmCol from '../components/sm-col.vue';
import SmIcon from '../components/sm-icon.vue';
import { RouterLink } from 'vue-router';
import { features } from '../dashboard';


</script>
<style lang="scss" scoped>
@import "../assets/base.scss";

.padding {
    padding: $size-1;
}

.feature-card {
    margin: $size-1;
    background-color: $primary-color;
    color: $auxiliary-color;
    padding: $size-2;

    .icon {
        width: 100%;
        height: $size-6;
    }

    .title {
        text-align: center;
        font-size: $sm-font-size;
    }
}
</style>