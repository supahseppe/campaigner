<template>
    <div></div>
</template>

<script>
    import MainLayout from '_Layouts/MainLayout';
    
    export default {
        name: "Read",
        components: {},
        props: {},
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