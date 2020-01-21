<template>
    <div></div>
</template>

<script>
    import MainLayout from '_Layouts/MainLayout';

    export default {
        name: 'Dummy',
        components: {},
        props: {
            dummy: {
                type: Object,
                default: () => {},
            },
        },
        data: () => ({
            title: '',
            description: '',
        }),
        computed: {},
        watch: {},
        created() {},
        mounted() {},
        methods: {},
        layout: MainLayout,
        metaInfo() {
            return {
                title: this.title,
                meta: [
                    {
                        name: 'description',
                        content: this.description,
                    },
                ],
            };
        },
    };
</script>
