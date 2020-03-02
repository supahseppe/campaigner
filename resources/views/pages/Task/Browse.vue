<template>
    <section>
        <browse-layout model="task" :pagination="pager.links">
            <panel
                v-for="task in tasks"
                class="w-full h-full"
                :key="task.id"
            >
                <inertia-link :href="route('tasks.show', task.slug)">
                    {{ task.name }}
                </inertia-link>
            </panel>
        </browse-layout>
    </section>
</template>

<script>
    import MainLayout from '_Layouts/MainLayout';
    import BrowseLayout from '_Layouts/Browse/BrowseLayout';
    import Panel from '_Components/cards/Panel';

    export default {
        name: 'Browse',
        components: {
            BrowseLayout,
            Panel,
        },
        props: {
            pager: {
                type: Object,
                default: () => {},
            },
        },
        data: () => ({
            pageTitle: 'Browsing Tasks',
            description: 'Viewing all tasks associated with the current user',
        }),
        computed: {
            tasks() {
                return this.pager.data;
            },
        },
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
