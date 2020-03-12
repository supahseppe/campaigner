<template>
    <section class="h-screen container">
        <section-header class="px-4">
            <h1>{{ dummy.name }}</h1>
            <template #aside>
                <btn :href="route('dummies.edit', dummy.slug)">
                    Edit
                </btn>
            </template>
        </section-header>
        <section class="p-4">
            <p>{{ dummy.id }}</p>
        </section>
    </section>
</template>

<script>
    import { sync } from 'vuex-pathify';
    import MainLayout from '_Layouts/MainLayout';
    import Btn from '_Components/Btn';
    import SectionHeader from '_Components/SectionHeader';

    export default {
        name: 'Dummy',
        components: {
            Btn,
            SectionHeader,
        },
        props: {
            dummy: {
                type: Object,
                default: () => {},
            },
        },
        data() {
            return {
                pageTitle: `Dummy: ${this.dummy.name}`,
                pageDescription: `Viewing the ${this.dummy.name} dummy.`,
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
