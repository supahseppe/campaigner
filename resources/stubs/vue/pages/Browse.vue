<template>
    <section>
        <div v-for="dummy in dummies" :key="dummy.id">
            <p>Dummy: {{ dummy.id }}</p>
        </div>
    </section>
</template>

<script>
    import MainLayout from '_Layouts/MainLayout';

    export default {
        name: 'Browse',
        components: {},
        props: {
            dummies: {
                type: Array,
                default: () => [],
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
