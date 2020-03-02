<template>
    <section>
        <browse-layout model="dummy" :pagination="pager.links">
            <div class="bg-white shadow overflow-hidden sm:rounded-md">
                <ul>
                    <li
                        v-for="dummy in dummies"
                        :key="dummy.id"
                        class="border-t border-200 first:border-0"
                    >
                        <inertia-link
                            :href="route('dummies.show', dummy.slug)"
                            class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
                        >
                            {{ dummy.name }}
                        </inertia-link>
                    </li>
                </ul>
            </div>
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
