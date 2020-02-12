<template>
    <div class="p-4">
        <h1 class="mb-3 text-2xl font-semibold">Dashboard</h1>
        <p class="mb-12 leading-normal">You are logged in!</p>
    </div>
</template>

<script>
    import MainLayout from '_Layouts/MainLayout';
    import SectionHeader from '_Components/SectionHeader';
    import Btn from '_Components/Btn';
    import axios from 'axios';

    export default {
        name: 'Character',
        components: {
            SectionHeader,
            Btn,
        },
        props: {},
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
