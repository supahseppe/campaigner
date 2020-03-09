<template>
    <div class="w-screen h-screen overflow-hidden pointer-events-auto">
        <div class="w-full h-full bg-black opacity-50" @click="closeTakeover"></div>
        <div :class="containerClasses">
            <slot />
            <template v-if="view">
                <component :is="view" v-bind="componentProps" />
            </template>
        </div>
    </div>
</template>

<script>
    const BrowseCampaign = () => import('_Pages/Campaign/Browse');
    const BrowseCharacter = () => import('_Pages/Character/BrowseCharacter');
    const BrowseNpc = () => import('_Pages/Character/BrowseNpc');
    const BrowseFaction = () => import('_Pages/Faction/Browse');
    const BrowseLocation = () => import('_Pages/Location/Browse');
    const BrowseTask = () => import('_Pages/Task/Browse');
    const ReadCampaign = () => import('_Pages/Campaign/Read');
    const ReadCharacter = () => import('_Pages/Character/Read');
    const ReadFaction = () => import('_Pages/Faction/Read');
    const ReadLocation = () => import('_Pages/Location/Read');
    const ReadTask = () => import('_Pages/Task/Read');
    const EditCampaign = () => import('_Pages/Campaign/Edit');
    const EditCharacter = () => import('_Pages/Character/Edit');
    const EditFaction = () => import('_Pages/Faction/Edit');
    const EditLocation = () => import('_Pages/Location/Edit');
    const EditTask = () => import('_Pages/Task/Edit');
    const AddCampaign = () => import('_Pages/Campaign/Add');
    const AddCharacter = () => import('_Pages/Character/Add');
    const AddFaction = () => import('_Pages/Faction/Add');
    const AddLocation = () => import('_Pages/Location/Add');
    const AddTask = () => import('_Pages/Task/Add');

    export default {
        name: 'QuickAccess',
        components: {
            'campaign.browse': BrowseCampaign,
            'character.browse': BrowseCharacter,
            'npc.browse': BrowseNpc,
            'faction.browse': BrowseFaction,
            'location.browse': BrowseLocation,
            'task.browse': BrowseTask,
            'campaign.read': ReadCampaign,
            'character.read': ReadCharacter,
            'faction.read': ReadFaction,
            'location.read': ReadLocation,
            'task.read': ReadTask,
            'campaign.edit': EditCampaign,
            'character.edit': EditCharacter,
            'faction.edit': EditFaction,
            'location.edit': EditLocation,
            'task.edit': EditTask,
            'campaign.add': AddCampaign,
            'character.add': AddCharacter,
            'faction.add': AddFaction,
            'location.add': AddLocation,
            'task.add': AddTask,
        },
        props: {
            view: {
                type: String,
                default: null,
            },
        },
        data() {
            return {};
        },
        computed: {
            containerClasses() {
                let base = [
                    'bg-white shadow',
                    'p-6',
                    'absolute',
                    'right-0',
                    'inset-y-0',
                    'w-percent-80',
                    'md:w-percent-70',
                    'xxl:w-percent-60',
                ];

                return base;
            },
            componentProps() {
                const name = this.$page.takeover.model;
                const model = this.$page.takeover[name];
                return { [name]: JSON.parse(model) };
            },
        },
        watch: {},
        created() {},
        mounted() {},
        methods: {
            closeTakeover() {
                this.$inertia.post(
                    this.route('modal').url(),
                    { action: 'close' },
                    {
                        replace: false,
                        preserveState: true,
                        preserveScroll: true,
                        only: ['takeover'],
                    }
                );
            },
        },
    };
</script>
