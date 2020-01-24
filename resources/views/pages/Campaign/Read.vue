<template>
    <div>
        <section class="flex items-center justify-between">
            <h1 class="text-3xl mb-6">{{ campaign.title }}</h1>
            <inertia-link
                :href="route('campaigns.edit', campaign.slug)"
                class="text-blue-200 font-bold py-2 px-4 bg-indigo-900 rounded"
            >
                Edit
            </inertia-link>
        </section>
        <section>
            <div v-html="campaign.description" />
        </section>
    </div>
</template>

<script>
    import MainLayout from '_Layouts/MainLayout';

    export default {
        name: 'Campaign',
        components: {},
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
