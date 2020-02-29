<template>
    <div class="p-4">
        <h1 class="mb-3 text-2xl font-semibold">Dashboard</h1>
        <h2 class="h2">Campaigns</h2>
        <div v-for="(campaign, i) in campaigns.data" :key="i">
            <p>{{ campaign.title }}</p>
        </div>
        <h2 class="h2">Characters</h2>
        <template v-if="characters.length">
            <div v-for="(character, i) in characters.data" :key="i">
                <p>{{ character.name }}</p>
            </div>
        </template>
        <p v-else>
            You have no characters.
            <inertia-link :href="route('characters.create')">Make one now!</inertia-link>
        </p>
    </div>
</template>

<script>
    import Layout from '_Layouts/MainLayout';

    export default {
        metaInfo: { title: 'Dashboard' },
        layout: Layout,
        props: ['campaigns', 'characters'],
    };
</script>
