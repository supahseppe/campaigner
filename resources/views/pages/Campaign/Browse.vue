<template>
    <section class="h-screen container">
        <browse-layout model="campaign">
            <div class="flex-grow w-full pt-2 p-4 flex">
                <template v-for="campaign in campaigns">
                    <panel
                        class="flex-1 max-w-sm lg:max-w-md first:mr-0 mr-4"
                        :key="campaign.id"
                    >
                        <inertia-link :href="route('campaigns.show', campaign.slug)">
                            <h1
                                class="text-base font-semibold leading-tight xl:text-lg text-gray-900"
                            >
                                {{ campaign.title }}
                            </h1>
                        </inertia-link>
                    </panel>
                </template>
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
