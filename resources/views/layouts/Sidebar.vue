<template>
    <nav
        class="bg-gray-900 shadow-lg h-16 fixed bottom-0 md:relative md:h-screen z-10 w-full md:w-48"
    >
        <div class="flex flex-col pt-12 pl-6">
            <inertia-link :href="route('characters.index')" class="text-white mb-6">
                Characters
            </inertia-link>
            <inertia-link :href="route('campaigns.index')" class="text-white mb-6">
                Campaigns
            </inertia-link>
            <!--        <inertia-link :href="route('npcs.index')" class=mb-6">NPCs</inertia-link>-->
            <!--        <inertia-link :href="route('factions.index')" class=mb-6">Factions</inertia-link>-->
            <!--        <inertia-link :href="route('locations.index')" class=mb-6">Locations</inertia-link>-->
            <!--        <inertia-link :href="route('tasks.index')" class=mb-6">Tasks</inertia-link>-->
        </div>
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
