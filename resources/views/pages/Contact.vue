<template>
    <container>
        <h1
            class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate"
        >
            Contact Us
        </h1>
    </container>
</template>

<script>
    import { sync } from 'vuex-pathify';
    import MarketingLayout from '_Layouts/MarketingLayout';
    import Container from '_Layouts/Container';

    export default {
        name: 'ContactPage',
        components: { Container },
        props: {},
        data() {
            return {
                pageTitle: 'Contact Us',
                pageDescription: '',
            };
        },
        computed: {
            syncedPageTitle: sync('pageTitle'),
        },
        watch: {},
        created() {},
        mounted() {
            this.syncedPageTitle = this.pageTitle;
        },
        methods: {},
        layout: MarketingLayout,
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
