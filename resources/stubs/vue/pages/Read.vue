<template>
    <div>
        <h1 class="">Dummy {{ dummy.id }}</h1>
    </div>
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
            title: 'Viewing Dummy',
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
