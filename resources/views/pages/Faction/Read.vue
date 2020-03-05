<template>
    <section class="h-screen container">
        <section-header class="px-4">
            <h1>{{ faction.name }}</h1>
            <template #aside>
                <btn :href="route('factions.edit', faction.slug)">
                    Edit
                </btn>
            </template>
        </section-header>
        <section class="p-4">
            <p>{{ faction.id }}</p>
        </section>
    </section>
</template>

<script>
    import MainLayout from '_Layouts/MainLayout';
    import Btn from '_Components/Btn';
    import SectionHeader from '_Components/SectionHeader';
    import { sync } from 'vuex-pathify';

    export default {
        name: 'Factions',
        components: {
            Btn,
            SectionHeader,
        },
        props: {
            faction: {
                type: Object,
                default: () => {},
            },
        },
        data() {
            return {
                pageTitle: `Factions: ${this.faction.name}`,
                pageDescription: `Viewing the ${this.faction.name} factions.`,
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
