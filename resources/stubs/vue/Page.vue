<template>
    <div></div>
</template>

<script>
    import MainLayout from '_Layouts/MainLayout';

    export default {
        name: 'DummyPage',
        components: {},
        props: {},
        data() {
            pageTitle: '',
            pageDescription: '',
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
