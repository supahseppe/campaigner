<template>
    <browse-layout model="dummy">
        <div v-for="dummy in dummies" :key="dummy.id">
            <card>
                <template v-slot:title>
                    <inertia-link :href="route('dummies.show', dummy.slug)">
                        {{ dummy.title }}
                    </inertia-link>
                </template>
                <div v-html="dummy.description" />
            </card>
        </div>
    </browse-layout>
</template>

<script>
    import MainLayout from '_Layouts/MainLayout';
    import BrowseLayout from '_Layouts/BrowseLayout';
    import CardHorizontal from '_Components/cards/CardHorizontal';

    export default {
        name: 'Browse',
        components: {
            card: CardHorizontal,
            BrowseLayout,
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
