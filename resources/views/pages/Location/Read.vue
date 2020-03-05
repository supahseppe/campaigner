<template>
    <section class="h-screen container">
        <section-header class="px-4">
            <h1>{{ location.name }}</h1>
            <template #aside>
                <btn :href="route('locations.edit', location.slug)">
                    Edit
                </btn>
            </template>
        </section-header>
        <section class="p-4">
            <p>{{ location.id }}</p>
        </section>
    </section>
</template>

<script>
    import MainLayout from '_Layouts/MainLayout';
    import Btn from '_Components/Btn';
    import SectionHeader from '_Components/SectionHeader';
    import { sync } from 'vuex-pathify';

    export default {
        name: 'Location',
        components: {
            Btn,
            SectionHeader,
        },
        props: {
            location: {
                type: Object,
                default: () => {},
            },
        },
        data() {
            return {
                pageTitle: `Location: ${this.location.name}`,
                pageDescription: `Viewing the ${this.location.name} location.`,
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
