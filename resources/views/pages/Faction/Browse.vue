<template>
    <section>
        <browse-layout model="faction" :pagination="pager.links">
            <div class="bg-white shadow overflow-hidden sm:rounded-md">
                <ul>
                    <li
                        v-for="faction in factions"
                        :key="faction.id"
                        class="border-t border-gray-200 first:border-0"
                    >
                        <inertia-link
                            :href="route('factions.show', [faction.slug])"
                            class="flex items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
                        >
                            <div class="px-4 py-4 sm:px-6 flex-grow">
                                <div class="flex items-center justify-between">
                                    <div
                                        class="text-sm leading-5 font-medium text-indigo-600 truncate"
                                    >
                                        {{ faction.name }}
                                    </div>
                                    <div class="ml-2 flex-shrink-0 flex">
                                        <span
                                            class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                                        >
                                            Useful Taxonomy
                                        </span>
                                    </div>
                                </div>
                                <div class="mt-2 sm:flex sm:justify-between">
                                    <div class="sm:flex">
                                        <div
                                            class="mr-6 flex items-center text-sm leading-5 text-gray-500"
                                        >
                                            <svg
                                                class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"
                                                />
                                            </svg>
                                            More Taxonomy Terms
                                        </div>
                                        <div
                                            class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mt-0"
                                        >
                                            <svg
                                                class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                            Primary Location
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mx-4">
                                <svg
                                    class="h-5 w-5 text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </div>
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
    import { sync } from 'vuex-pathify';

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
            pageTitle: 'Browsing Faction',
            description: 'Viewing all factions associated with the current user',
        }),
        computed: {
            factions() {
                return this.pager.data;
            },
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
