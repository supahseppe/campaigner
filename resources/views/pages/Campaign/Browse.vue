<template>
    <section class="h-screen">
        <div class="">
            <div class="flex items-center justify-between mb-6">
                <h1 class="text-3xl">Your Campaigns</h1>
                <inertia-link :href="route('campaigns.create')">
                    Create new Campaign
                </inertia-link>
            </div>
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
        </div>
    </section>
</template>

<script>
    import MainLayout from '_Layouts/MainLayout';
    import CardHorizontal from '_Components/cards/CardHorizontal';

    export default {
        name: 'Browse',
        components: {
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
