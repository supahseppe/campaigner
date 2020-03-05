<template>
    <section class="">
        <section-header>
            <div>
                <h1>{{ character.name }}</h1>
                <p v-if="character.alias" class="text-base font-normal italic opacity-75">
                    ( {{ character.alias }} )
                </p>
            </div>
            <template #aside>
                <btn :href="route('characters.edit', character.slug)">
                    Edit
                </btn>
            </template>
        </section-header>
        <container>
            <p>
                High Concept: {{ character.high_concept }}
                <span v-if="character.npc" class="p-2 bg-indigo-300">NPC</span>
            </p>
            <div v-html="character.bio" />
        </container>
    </section>
</template>

<script>
    import MainLayout from '_Layouts/MainLayout';
    import SectionHeader from '_Components/SectionHeader';
    import Btn from '_Components/Btn';
    import Container from '_Layouts/Container';
    import { sync } from 'vuex-pathify';

    export default {
        name: 'Character',
        components: {
            Container,
            SectionHeader,
            Btn,
        },
        props: {
            character: {
                type: Object,
                default: () => {},
            },
        },
        data() {
            return {
                pageTitle: `Character: ${this.character.name}`,
                pageDescription: `Viewing the character ${this.character.name}.`,
            };
        },
        computed: {
            syncedPageTitle: sync('pageTitle'),
        },
        watch: {},
        created() {},
        mounted() {
            this.syncedPageTitle = this.pageTitle;
        },
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
