<template>
    <browse-layout model="character">
        <div v-for="character in characters" :key="character.id">
            <card>
                <template v-slot:title>
                    <inertia-link :href="route('characters.show', character.slug)">
                        {{ character.name }}
                    </inertia-link>
                </template>
                <div v-html="character.bio" />
            </card>
        </div>
    </browse-layout>
</template>

<script>
    import MainLayout from '_Layouts/MainLayout';
    import BrowseLayout from '_Layouts/Browse/BrowseLayout';
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
            pageTitle: 'Browsing Characters',
            description: 'Viewing all characters associated with the current user',
        }),
        computed: {
            characters() {
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
