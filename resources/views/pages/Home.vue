<template>
    <div>
        <section-header>
            <h1>Dashboard</h1>
        </section-header>
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
                        <ul class="list-disc">
                            <li
                                v-for="(campaign, i) in campaigns.data"
                                :key="i"
                                class="ml-4"
                            >
                                <p>{{ campaign.title }}</p>
                            </li>
                        </ul>
                    </template>
                    <p v-else>
                        You have no campaigns.
                        <inertia-link :href="route('campaigns.create')">
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
                                <p>{{ character.name }}</p>
                            </li>
                        </ul>
                    </template>
                    <p v-else>
                        You have no characters.
                        <inertia-link :href="route('characters.create')">
                            Make one now!
                        </inertia-link>
                    </p>
                </div>
            </panel>
        </div>
    </div>
</template>

<script>
    import MainLayout from '_Layouts/MainLayout';
    import SectionHeader from '_Components/SectionHeader';
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
            SectionHeader,
        },
        props: ['campaigns', 'characters'],
        data() {
            return {
                pageTitle: 'Dashboard',
                pageDescription: 'User Dashboard',
            };
        },
        computed: {},
        watch: {},
        created() {},
        mounted() {},
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
