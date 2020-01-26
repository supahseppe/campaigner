<template>
    <section class="h-screen container">
        <browse-layout model="campaign">
            <div v-for="campaign in campaigns" :key="campaign.id">
                <card>
                    <template v-slot:title>
                        <inertia-link :href="route('campaigns.show', campaign.slug)">
                            {{ campaign.title }}
                        </inertia-link>
                    </template>
                    <div v-html="campaign.description" />
                </card>
            </div>
        </browse-layout>
    </section>
</template>

<script>
    import MainLayout from '_Layouts/MainLayout';
    import BrowseLayout from '_Layouts/BrowseLayout';
    import CardHorizontal from '_Components/cards/CardHorizontal';

    export default {
        name: 'Browse',
        components: {
            BrowseLayout,
            card: CardHorizontal,
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
