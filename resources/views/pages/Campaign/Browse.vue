<template>
    <section class="min-h-screen container">
        <browse-layout model="campaign">
            <div
                v-for="campaign in campaigns"
                class="flex-auto w-full p-2 md:max-w-5/12 lg:max-w-4/12 xl:max-w-3/12"
                :key="campaign.id"
            >
                <panel class="w-full h-full">
                    <inertia-link :href="route('campaigns.show', campaign.slug)">
                        <h1
                            class="text-base font-semibold leading-tight xl:text-lg text-gray-900"
                        >
                            {{ campaign.title }}
                        </h1>
                    </inertia-link>
                </panel>
            </div>
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
