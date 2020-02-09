<template>
    <section class="h-full container">
        <browse-layout model="faction" :pagination="pager.links">
            <panel
                v-for="faction in factions"
                class="w-full h-full"
                :key="faction.id"
            >
                <inertia-link :href="route('factions.show', faction.slug)">
                    {{ faction.name }}
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
            pageTitle: 'Browsing Faction',
            description: 'Viewing all factions associated with the current user',
        }),
        computed: {
            factions() {
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
