<template>
    <section class="h-screen container">
        <section-header class="px-4">
            <h1>{{ campaign.title }}</h1>
            <template #aside>
                <btn :href="route('campaigns.edit', campaign.slug)">
                    Edit
                </btn>
            </template>
        </section-header>
        <section class="p-4 pb-6 max-w-percent-90 mx-auto">
            <div v-html="campaign.description" />
        </section>
        <panel>
            <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Players
                </h3>
            </div>
            <ul>
                <li v-for="(user, i) in campaign.users" :key="i" class="text-sm px-4 py-3 border-t border-gray-300 first:border-0">
                    {{ user.username }}, {{ user.pivot.role }}
                </li>
            </ul>
        </panel>
        <panel class="mt-6">
            <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Characters
                </h3>
            </div>
            <ul>
                <li v-for="(character, i) in campaign.characters" :key="i" class="text-sm px-4 py-3 border-t border-gray-300 first:border-0">
                    {{ character.name }}
                </li>
            </ul>
        </panel>
        <panel class="mt-6">
            <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Factions
                </h3>
            </div>
            <ul>
                <li v-for="(faction, i) in campaign.factions" :key="i" class="text-sm px-4 py-3 border-t border-gray-300 first:border-0">
                    {{ faction.name }}
                </li>
            </ul>
        </panel>
        <panel class="mt-6">
            <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                    NPCs
                </h3>
            </div>
            <ul>
                <li v-for="(npc, i) in campaign.npcs" :key="i" class="text-sm px-4 py-3 border-t border-gray-300 first:border-0">
                    {{ npc.name }}
                </li>
            </ul>
        </panel>
        <panel class="mt-6">
            <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Locations
                </h3>
            </div>
            <ul>
                <li v-for="(location, i) in campaign.locations" :key="i" class="text-sm px-4 py-3 border-t border-gray-300 first:border-0">
                    {{ location.name }}
                </li>
            </ul>
        </panel>
        <panel class="mt-6">
            <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Tasks
                </h3>
            </div>
            <ul>
                <li v-for="(task, i) in campaign.tasks" :key="i" class="text-sm px-4 py-3 border-t border-gray-300 first:border-0">
                    {{ task.name }}
                </li>
            </ul>
        </panel>
    </section>
</template>

<script>
    import MainLayout from '_Layouts/MainLayout';
    import SectionHeader from '_Components/SectionHeader';
    import Btn from '_Components/Btn';
    import { sync } from 'vuex-pathify';
    import Panel from '_Components/cards/Panel';

    export default {
        name: 'Campaign',
        components: {
            Panel,
            SectionHeader,
            Btn,
        },
        props: {
            campaign: {
                type: Object,
                default: () => {},
            },
        },
        data() {
            return {
                pageTitle: `Campaign: ${this.campaign.title}`,
                pageDescription: `Viewing the ${this.campaign.title} campaign.`,
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
