<template>
    <div>
        <div class="p-4">
            <panel class="mb-6">
                <div
                    class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6 flex items-center justify-between"
                >
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        Campaigns
                    </h3>
                    <btn :href="route('campaigns.create')">
                        <p>Create</p>
                        <icon icon="plus" color="white" class="ml-1" />
                    </btn>
                </div>
                <div class="px-4 py-5 sm:px-6">
                    <template v-if="campaigns.data.length">
                        <ul>
                            <li v-for="(campaign, i) in campaigns.data" :key="i">
                                <inertia-link
                                    :href="route('campaigns.show', [campaign.slug])"
                                    class="block rounded hover:bg-indigo-100 focus:outline-none focus:bg-indigo-100 transition duration-150 ease-in-out"
                                >
                                    <div class="flex items-center pr-4 py-4 sm:px-4">
                                        <div class="min-w-0 flex-1 flex items-center">
                                            <div
                                                class="min-w-0 flex-1 md:grid md:grid-cols-2 md:gap-4"
                                            >
                                                <div
                                                    class="text-sm leading-5 font-medium text-indigo-600 truncate"
                                                >
                                                    {{ campaign.title }}
                                                </div>
                                                <div
                                                    class="pt-4 flex-shrink-0 sm:pt-0 sm:ml-auto"
                                                >
                                                    <div class="flex overflow-hidden">
                                                        <img
                                                            class="inline-block h-6 w-6 rounded-full text-white shadow-solid"
                                                            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                            alt=""
                                                        />
                                                        <img
                                                            class="-ml-1 inline-block h-6 w-6 rounded-full text-white shadow-solid"
                                                            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                            alt=""
                                                        />
                                                        <img
                                                            class="-ml-1 inline-block h-6 w-6 rounded-full text-white shadow-solid"
                                                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                                                            alt=""
                                                        />
                                                        <img
                                                            class="-ml-1 inline-block h-6 w-6 rounded-full text-white shadow-solid"
                                                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                            alt=""
                                                        />
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
                    </template>
                    <p v-else>
                        You have no campaigns.
                        <inertia-link
                            :href="route('campaigns.create')"
                            class="text-indigo-600 hover:text-indigo-700 focus:text-indigo-700"
                        >
                            Make one now!
                        </inertia-link>
                    </p>
                </div>
            </panel>
            <panel class="mb-6">
                <div
                    class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6 flex items-center justify-between"
                >
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        Characters
                    </h3>
                    <btn :href="route('campaigns.create')">
                        <p>Create</p>
                        <icon icon="plus" color="white" class="ml-1" />
                    </btn>
                </div>
                <div class="px-4 py-5 sm:px-6">
                    <template v-if="characters.data.length">
                        <ul class="list-disc">
                            <li
                                v-for="(character, i) in characters.data"
                                :key="i"
                                class="ml-4"
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
                                                            Played by
                                                            {{
                                                                character.player[0]
                                                                    .username
                                                            }}
                                                        </div>
                                                        <div
                                                            class="mt-2 flex items-center text-sm leading-5 text-gray-500"
                                                        >
                                                            <p v-if="character.active">
                                                                Currently active
                                                            </p>
                                                            <p v-else>
                                                                Currently inactive
                                                            </p>
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
                    </template>
                    <p v-else>
                        You have no characters.
                        <inertia-link
                            :href="route('characters.create')"
                            class="text-indigo-600 hover:text-indigo-700 focus:text-indigo-700"
                        >
                            Make one now!
                        </inertia-link>
                    </p>
                </div>
            </panel>
        </div>
    </div>
</template>

<script>
    import { sync } from 'vuex-pathify';
    import MainLayout from '_Layouts/MainLayout';
    import Panel from '_Components/cards/Panel';
    import Btn from '_Components/Btn';
    import Icon from '_Components/Icon';

    export default {
        name: 'Dashboard',
        layout: MainLayout,
        components: {
            Icon,
            Btn,
            Panel,
        },
        props: ['campaigns', 'characters'],
        data() {
            return {
                pageTitle: 'Dashboard',
                pageDescription: 'User Dashboard',
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
