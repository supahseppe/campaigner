<template>
    <section class="h-full container">
        <browse-layout model="character" :title="npcTitle" :pagination="pager.links">
            <template v-if="npcs" #header-buttons>
                <btn :href="route('npcs.create')" class="ml-4">Add New NPC</btn>
            </template>
            <panel
                v-for="character in characters"
                class="w-full h-full"
                :key="character.id"
            >
                <inertia-link :href="route('characters.show', character.slug)">
                    {{ character.name }}
                </inertia-link>
                <p>{{ character.high_concept }}</p>
            </panel>
        </browse-layout>
    </section>
</template>

<script>
    import MainLayout from '_Layouts/MainLayout';
    import BrowseLayout from '_Layouts/Browse/BrowseLayout';
    import Panel from '_Components/cards/Panel';
    import Btn from '_Components/Btn';

    export default {
        name: 'Browse',
        components: {
            Panel,
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
