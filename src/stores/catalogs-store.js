import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { getMeta, getDesignUrl } from '../services/catalogs-service';


export default defineStore("catalogs", () => {

    const ready = ref(false)
    const loading = ref(false)

    const caption = ref("")
    const title = ref("")
    const subTitle = ref("")

    const catalogs = ref([])
    const designs = ref([])
    const catalogMap = ref({})
    const designMap = ref({})

    const homeMeta = computed(() => ({
        caption: caption.value,
        title: title.value,
        subTitle: subTitle.value
    }))

    const loadMeta = async () => {
        if (ready.value || loading.value) return;
        loading.value = true;

        const meta = await getMeta();

        if (meta == null) {
            loading.value = false;
            return;
        }

        const thisCatalogMap = {};
        const thisDesignMap = {};

        for (let i = 0; i < meta.catalogs.length; i++) {
            const catalog = meta.catalogs[i];
            catalog.title ||= catalog.name;
            catalog.subTitle ||= catalog.name;

            for (let j = 0; j < catalog.designs.length; j++) {
                const design = catalog.designs[j];

                // initial url with style;
                const styleNames = ['thumbnail', 'small', 'medium', 'large'];
                design.url = {};
                for (let k = 0; k < styleNames.length; k++) {
                    const styleName = styleNames[k];
                    design.url[styleName] = getDesignUrl(design, styleName);
                }

                design.catalog = thisCatalogMap[design.catalogId];
                thisDesignMap[design.id] = design;
            }
            thisCatalogMap[catalog.id] = catalog;
        }

        caption.value = meta.caption;
        title.value = meta.title;
        subTitle.value = meta.subTitle;
        catalogs.value = meta.catalogs;
        designs.value = meta.catalogs.reduce((arr, catalog) => arr.concat(catalog.designs), []);
        catalogMap.value = thisCatalogMap;
        designMap.value = thisDesignMap;

        ready.value = true;
        loading.value = false;
    }

    return {
        ready,
        loading,
        homeMeta,
        catalogs,
        designs,
        loadMeta,
        catalogMap,
        designMap,
    };
});
