<template>
    <section class="h-full container">
        <browse-layout model="location" :pagination="pager.links">
            <panel
                v-for="location in locations"
                class="w-full h-full mb-24"
                :key="location.id"
            >
                <inertia-link :href="route('locations.show', location.slug)">
                    {{ location.name }}
                </inertia-link>
            </panel>
        </browse-layout>
    </section>
</template>

<script>
    import MainLayout from '_Layouts/MainLayout';
    import BrowseLayout from '_Layouts/Browse/BrowseLayout';
    import Panel from '_Components/cards/Panel';

    export default {
        name: 'Browse',
        components: {
            BrowseLayout,
            Panel,
        },
        props: {
            pager: {
                type: Object,
                default: () => {},
            },
        },
        data: () => ({
            pageTitle: 'Browsing Locations',
            description: 'Viewing all locations associated with the current user',
        }),
        computed: {
            locations() {
                return this.pager.data;
            },
        },
        watch: {},
        created() {},
        mounted() {},
        methods: {},
        layout: MainLayout,
        metaInfo() {
            return {
                title: this.pageTitle,
                meta: [
                    {
                        name: 'description',
                        content: this.pageDescription,
                    },
                ],
            };
        },
    };
</script>
