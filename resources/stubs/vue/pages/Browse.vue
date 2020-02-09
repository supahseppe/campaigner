<template>
    <section class="h-full container">
        <browse-layout model="dummy" :pagination="pager.links">
            <panel
                v-for="dummy in dummies"
                class="w-full h-full"
                :key="dummy.id"
            >
                <inertia-link :href="route('dummies.show', dummy.slug)">
                    {{ dummy.name }}
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
            pageTitle: 'Browsing Dummies',
            description: 'Viewing all dummies associated with the current user',
        }),
        computed: {
            dummies() {
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
