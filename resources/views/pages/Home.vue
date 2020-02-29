<template>
    <div class="p-4">
        <h1 class="mb-3 text-2xl font-semibold">Dashboard</h1>
        <h2 class="h2">Campaigns</h2>
        <div v-for="(campaign, i) in campaigns.data" :key="i">
            <p>{{ campaign.title }}</p>
        </div>
        <h2 class="h2">Characters</h2>
        <template v-if="characters.length">
            <div v-for="(character, i) in characters.data" :key="i">
                <p>{{ character.name }}</p>
            </div>
        </template>
        <p v-else>
            You have no characters.
            <inertia-link :href="route('characters.create')">Make one now!</inertia-link>
        </p>
    </div>
</template>

<script>
    import MainLayout from '_Layouts/MainLayout';
    import SectionHeader from '_Components/SectionHeader';
    import Btn from '_Components/Btn';
    import axios from 'axios';

    export default {
        name: 'Dashboard',
        metaInfo: { title: 'Dashboard' },
        layout: Layout,
        components: {
            SectionHeader,
            Btn,
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
        mounted() {
            axios
                .get(
                    route('campaigns.autocomplete', {
                        user: this.$page.auth.user.slug
                    }),
                    {
                        headers: {
                            Accept: 'application/json',
                        },
                    }
                )
                .then(response => {
                    console.log(response);
                });
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
