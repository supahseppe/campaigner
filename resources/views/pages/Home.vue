<template>
    <div>
        <section-header>
            <h1>Dashboard</h1>
        </section-header>
        <div class="p-4">
            <h2 class="h2">Campaigns</h2>
            <template v-if="campaigns.data.length">
                <div v-for="(campaign, i) in campaigns.data" :key="i">
                    <p>{{ campaign.title }}</p>
                </div>
            </template>
            <p v-else>
                You have no campaigns.
                <inertia-link :href="route('campaigns.create')">Make one now!</inertia-link>
            </p>
            <h2 class="h2">Characters</h2>
            <template v-if="characters.data.length">
                <div v-for="(character, i) in characters.data" :key="i">
                    <p>{{ character.name }}</p>
                </div>
            </template>
            <p v-else>
                You have no characters.
                <inertia-link :href="route('characters.create')">Make one now!</inertia-link>
            </p>
        </div>
    </div>
</template>

<script>
    import MainLayout from '_Layouts/MainLayout';
    import SectionHeader from '_Components/SectionHeader';

    export default {
        name: 'Dashboard',
        layout: MainLayout,
        components: {
            SectionHeader,
        },
        props: ['campaigns', 'characters'],
        data() {
            return {
                pageTitle: 'Dashboard',
                pageDescription: 'User Dashboard',
            };
        },
        computed: {},
        watch: {},
        created() {},
        mounted() {},
        methods: {},
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
