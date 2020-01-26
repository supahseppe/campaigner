<template>
    <section class="h-screen container">
        <section-header class="px-4">
            <h1>{{ campaign.title }}</h1>
            <template #aside>
                <btn :href="route('campaigns.edit', campaign.slug)">
                    Edit
                </btn>
            </template>
        </section-header>
        <section class="p-4">
            <div v-html="campaign.description" />
        </section>
    </section>
</template>

<script>
    import MainLayout from '_Layouts/MainLayout';
    import SectionHeader from '_Components/SectionHeader';
    import Btn from '_Components/Btn';

    export default {
        name: 'Campaign',
        components: {
            SectionHeader,
            Btn,
        },
        props: {
            campaign: {
                type: Object,
                default: () => {},
            },
        },
        data() {
            return {
                pageTitle: `Campaign: ${this.campaign.title}`,
                pageDescription: `Viewing the ${this.campaign.title} campaign.`,
            };
        },
        computed: {},
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
