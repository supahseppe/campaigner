<template>
    <section class="h-screen container">
        <section-header class="px-4">
            <h1>{{ task.name }}</h1>
            <template #aside>
                <btn :href="route('tasks.edit', task.slug)">
                    Edit
                </btn>
            </template>
        </section-header>
        <section class="p-4">
            <p>{{ task.id }}</p>
        </section>
    </section>
</template>

<script>
    import MainLayout from '_Layouts/MainLayout';
    import Btn from '_Components/Btn';
    import SectionHeader from '_Components/SectionHeader';

    export default {
        name: 'Task',
        components: {
            Btn,
            SectionHeader,
        },
        props: {
            task: {
                type: Object,
                default: () => {},
            },
        },
        data() {
            return {
                pageTitle: `Task: ${this.task.name}`,
                pageDescription: `Viewing the ${this.task.name} task.`,
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
