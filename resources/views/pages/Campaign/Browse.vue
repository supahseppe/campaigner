<template>
    <section>
        <browse-layout model="campaign" :pagination="pager.links">
            <panel v-for="campaign in campaigns" :key="campaign.id" class="w-full h-full">
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
    import { sync } from 'vuex-pathify';

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
            syncedPageTitle: sync('pageTitle'),
        },
        watch: {},
        created() {},
        mounted() {
            this.syncedPageTitle = this.pageTitle;
        },
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
