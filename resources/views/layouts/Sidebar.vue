<template>
    <nav class="sidebar flex flex-col bg-black p-4">
        <inertia-link :href="route('characters.index')" class="mb-6">
            Characters
        </inertia-link>
        <inertia-link :href="route('campaigns.index')" class="mb-6">
            Campaigns
        </inertia-link>
        <!--        <inertia-link :href="route('npcs.index')" class=mb-6">NPCs</inertia-link>-->
        <!--        <inertia-link :href="route('factions.index')" class=mb-6">Factions</inertia-link>-->
        <!--        <inertia-link :href="route('locations.index')" class=mb-6">Locations</inertia-link>-->
        <!--        <inertia-link :href="route('tasks.index')" class=mb-6">Tasks</inertia-link>-->
    </nav>
</template>

<script>
    export default {
        name: 'Sidebar',
        data() {
            return {
                isOpen: false,
            };
        },
    };
</script>
