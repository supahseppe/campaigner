<template>
    <section>
        <browse-layout model="character" :title="npcTitle" :pagination="pager.links">
            <template #header-buttons>
                <btn :href="route('npcs.create')" class="ml-4">Add New NPC</btn>
            </template>
            <div class="bg-white shadow overflow-hidden sm:rounded-md">
                <ul>
                    <li
                        v-for="character in characters"
                        :key="character.id"
                        class="border-t border-200 first:border-0"
                    >
                        <inertia-link
                            :href="route('characters.show', [character.slug])"
                            class="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
                        >
                            <div class="flex items-center px-4 py-4 sm:px-6">
                                <div class="min-w-0 flex-1 flex items-center">
                                    <div class="flex-shrink-0">
                                        <img
                                            class="h-12 w-12 rounded-full"
                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt=""
                                        />
                                    </div>
                                    <div
                                        class="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4"
                                    >
                                        <div>
                                            <div
                                                class="text-sm leading-5 font-medium text-indigo-600 truncate"
                                            >
                                                {{ character.name }}
                                            </div>
                                            <div
                                                class="mt-2 flex items-center text-sm leading-5 text-gray-500"
                                            >
                                                <span class="truncate">
                                                    {{ character.high_concept }}
                                                </span>
                                            </div>
                                        </div>
                                        <div class="hidden md:block">
                                            <div>
                                                <div
                                                    class="text-sm leading-5 text-gray-900"
                                                >
                                                    Info
                                                </div>
                                                <div
                                                    class="mt-2 flex items-center text-sm leading-5 text-gray-500"
                                                >
                                                    <p v-if="character.active">
                                                        Currently active
                                                    </p>
                                                    <p v-else>Currently inactive</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
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
