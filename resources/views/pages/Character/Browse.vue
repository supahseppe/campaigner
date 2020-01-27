<template>
    <browse-layout model="character" :title="npcTitle">
        <template v-if="npcs" #header-buttons>
            <btn :href="route('npcs.create')" class="ml-4">Add New NPC</btn>
        </template>
        <div v-for="character in characters" :key="character.id">
            <card class="mx-2">
                <template v-slot:title>
                    <inertia-link :href="route('characters.show', character.slug)">
                        {{ character.name }}
                    </inertia-link>
                </template>
                <p>{{ character.high_concept }}</p>
            </card>
        </div>
    </browse-layout>
</template>

<script>
    import MainLayout from '_Layouts/MainLayout';
    import BrowseLayout from '_Layouts/Browse/BrowseLayout';
    import CardHorizontal from '_Components/cards/CardHorizontal';
    import Btn from '_Components/Btn';

    export default {
        name: 'Browse',
        components: {
            card: CardHorizontal,
            BrowseLayout,
            Btn,
        },
        props: {
            npcs: {
                type: Boolean,
                default: false,
            },
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
            npcTitle() {
                return this.npcs ? 'Your NPCs' : null;
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
