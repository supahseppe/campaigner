<template>
    <div>
        <section class="flex items-center justify-between">
            <h1 class="text-3xl mb-6">{{ dummy.title }}</h1>
            <inertia-link
                :href="route('dummies.edit', dummy.slug)"
                class="text-blue-200 font-bold py-2 px-4 bg-indigo-900 rounded"
            >
                Edit
            </inertia-link>
        </section>
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
        data() {
            return {
                pageTitle: `Dummy: ${this.dummy.title}`,
                pageDescription: `Viewing the ${this.dummy.title} dummy.`,
            };
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
