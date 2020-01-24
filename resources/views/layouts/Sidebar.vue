<template>
    <nav class="sidebar bg-black p-4">
        <!--        <inertia-link :href="route('characters.index')">Characters</inertia-link>-->
        <inertia-link :href="route('campaigns.index')">Campaigns</inertia-link>
        <!--        <inertia-link :href="route('npcs.index')">NPCs</inertia-link>-->
        <!--        <inertia-link :href="route('factions.index')">Factions</inertia-link>-->
        <!--        <inertia-link :href="route('locations.index')">Locations</inertia-link>-->
        <!--        <inertia-link :href="route('tasks.index')">Tasks</inertia-link>-->
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
