<template>
    <div></div>
</template>

<script>
    import { sync } from 'vuex-pathify';
    import MainLayout from '_Layouts/MainLayout';

    export default {
        name: 'AboutPage',
        components: {},
        props: {},
        data() {
            return {
                pageTitle: 'About Us',
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
