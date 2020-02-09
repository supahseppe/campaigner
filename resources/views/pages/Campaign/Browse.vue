<template>
    <section class="h-full container">
        <browse-layout model="campaign" :pagination="pager.links">
            <panel
                v-for="campaign in campaigns"
                class="w-full h-full"
                :key="campaign.id"
            >
                <inertia-link :href="route('campaigns.show', campaign.slug)">
                    {{ campaign.title }}
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
            pageTitle: 'Browsing Campaigns',
            description: 'Viewing all campaigns associated with the current user',
        }),
        computed: {
            campaigns() {
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
