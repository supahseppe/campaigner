<template>
    <section class="h-screen container">
        <section-header>
            <span class="text-gray-700">Editing:</span>
            {{ campaign.title }}
        </section-header>
        <trashed-message v-if="campaign.deleted_at" class="mb-6" @restore="restore">
            This campaign has been deleted.
        </trashed-message>
        <form
            class="w-full p-4 bg-white rounded md:max-w-lg lg:max-w-xl xl:max-w-3xl mx-auto"
            @submit.prevent="submit"
        >
            <div>
                <div>
                    <div>
                        <div
                            class="sm:grid xl:grid-cols-3 xl:gap-4 xl:items-start xl:pt-5"
                        >
                            <label
                                for="title"
                                class="block text-sm font-medium leading-5 text-gray-700 xl:mt-px xl:pt-2"
                            >
                                Campaign Title
                            </label>
                            <div class="mt-1 xl:mt-0 xl:col-span-2">
                                <text-input id="title" v-model="form.title" />
                            </div>
                        </div>

                        <div
                            class="mt-6 sm:mt-5 xl:grid xl:grid-cols-3 xl:gap-4 xl:items-start xl:border-t xl:border-gray-200 xl:pt-5 pointer-events-none opacity-50"
                        >
                            <label
                                for="cover_photo"
                                class="block text-sm leading-5 font-medium text-gray-700 xl:mt-px xl:pt-2"
                            >
                                Cover photo
                            </label>
                            <div class="mt-2 xl:mt-0 xl:col-span-2">
                                <div
                                    class="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                                >
                                    <div class="text-center">
                                        <svg
                                            class="mx-auto h-12 w-12 text-gray-400"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 48 48"
                                        >
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                        <p class="mt-1 text-sm text-gray-600">
                                            <btn type="button">
                                                Upload a file
                                            </btn>
                                            or drag and drop
                                        </p>
                                        <p class="mt-1 text-xs text-gray-500">
                                            PNG, JPG, GIF up to 10MB
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            class="mt-6 xl:mt-5 xl:grid xl:grid-cols-3 xl:gap-4 xl:items-start xl:border-t xl:border-gray-200 xl:pt-5"
                        >
                            <label
                                for="description"
                                class="block text-sm font-medium leading-5 text-gray-700 xl:mt-px xl:pt-2"
                            >
                                Description
                            </label>
                            <div class="mt-2 xl:mt-0 xl:col-span-2">
                                <div class="max-w-lg flex rounded-md shadow-sm">
                                    <wysiwyg
                                        id="description"
                                        v-model="form.description"
                                    />
                                </div>
                                <p class="mt-2 text-sm text-gray-500">
                                    Write a bit about your campaign.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-6 border-t border-gray-200 pt-8 sm:mt-5">
                    <div>
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                            Players
                        </h3>
                        <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                            The players currently in this campaign. Below, you can invite
                            players to join your campaign.
                        </p>
                    </div>
                    <div class="mt-6 sm:mt-5">
                        <div class="grid gap-4 md:grid-cols-2">
                            <panel
                                v-for="player in campaign.players"
                                :key="player.id"
                                class="w-full sm:shadow-md"
                            >
                                <div class="p-4 grid grid-cols-1 grid-rows-3 gap-4">
                                    <div class="row-span-2">
                                        <p class="text-lg tracking-wide">
                                            {{ player.username }}
                                        </p>
                                        <p class="text-sm">
                                            <em>
                                                {{ player.email }}
                                            </em>
                                        </p>
                                    </div>
                                    <div class="w-full flex">
                                        <btn
                                            class="ml-auto"
                                            color="gray"
                                            @click.stop.prevent=""
                                        >
                                            View Profile
                                        </btn>
                                    </div>
                                </div>
                            </panel>
                        </div>
                    </div>
                    <div class="mt-6 sm:mt-5">
                        <div class="bg-gray-50 overflow-hidden rounded-lg shadow-inner">
                            <div class="px-4 py-5 sm:p-6">
                                <transition-group name="fadeUp" tag="div">
                                    <template v-for="field in playerFields">
                                        <auto-complete-section
                                            :key="field.index"
                                            :field="field"
                                            model="user"
                                            search-field="username"
                                            style="animation-duration: 0.3s"
                                            @item-select="
                                                selectItem(
                                                    $event,
                                                    field.index,
                                                    'playerFields'
                                                )
                                            "
                                            @remove-section="removeItem($event, 'player')"
                                        />
                                    </template>
                                </transition-group>
                            </div>
                        </div>
                        <transition name="fade">
                            <div v-if="showInviteForm" class="py-6">
                                <div
                                    class="bg-gray-50 overflow-hidden rounded-lg shadow-inner"
                                >
                                    <div class="px-4 py-5 sm:p-6">
                                        <label
                                            for="email_invites"
                                            class="block text-sm font-medium leading-5 text-gray-700"
                                        >
                                            Email Invitations
                                        </label>
                                        <div class="mt-1 relative rounded-md shadow-sm">
                                            <textarea
                                                id="email_invites"
                                                class="form-input block w-full sm:text-sm sm:leading-5"
                                                placeholder="player_one@example.com, player_two@example.com"
                                            />
                                        </div>
                                        <p class="mt-2 text-sm text-gray-500">
                                            Add as many emails as you'd like, comma
                                            separated.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </transition>
                        <div
                            class="sm:border-t sm:border-gray-200 sm:pt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
                        >
                            <btn
                                wide
                                class="xl:col-start-2"
                                @click.stop.prevent="showInviteForm = true"
                            >
                                <p class="mr-4">Invite via email</p>
                                <icon icon="email" color="white" />
                            </btn>
                            <btn wide @click.stop.prevent="addField('playerFields')">
                                <p class="mr-4">Link an existing player</p>
                                <icon icon="plus" color="white" />
                            </btn>
                        </div>
                    </div>
                </div>
                <div class="mt-6 border-t border-gray-200 pt-8 sm:mt-5">
                    <div>
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                            Factions
                        </h3>
                        <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                            This campaign's factions. Below, you can link existing
                            factions or quickly create new ones.
                        </p>
                    </div>
                    <div class="mt-6 sm:mt-5">
                        <div class="grid gap-4 md:grid-cols-2">
                            <panel
                                v-for="faction in campaign.factions"
                                :key="faction.id"
                                class="w-full sm:shadow-md"
                            >
                                <div class="p-4 grid grid-cols-1 grid-rows-3 gap-4">
                                    <div class="row-span-2">
                                        <p class="text-lg tracking-wide">
                                            {{ faction.name }}
                                        </p>
                                    </div>
                                    <div class="w-full flex">
                                        <btn
                                            class="ml-auto"
                                            color="gray"
                                            @click.stop.prevent=""
                                        >
                                            View
                                        </btn>
                                        <btn
                                            class="ml-3"
                                            color="gray"
                                            @click.stop.prevent=""
                                        >
                                            Edit
                                        </btn>
                                    </div>
                                </div>
                            </panel>
                        </div>
                    </div>
                    <div class="mt-6 sm:mt-5">
                        <template v-for="field in factionFields">
                            <auto-complete-section
                                :key="field.index"
                                :field="field"
                                model="faction"
                                search-field="name"
                                @item-select="
                                    selectItem($event, field.index, 'factionFields')
                                "
                                @remove-section="removeItem($event, 'faction')"
                            />
                        </template>
                        <div
                            class="sm:border-t sm:border-gray-200 sm:pt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                        >
                            <btn
                                wide
                                class="sm:col-start-2 xl:col-start-3"
                                @click.stop.prevent="addField('factionFields')"
                            >
                                <p class="mr-4">Add a faction</p>
                                <icon icon="plus" color="white" />
                            </btn>
                        </div>
                    </div>
                </div>
                <div class="mt-6 border-t border-gray-200 pt-8 sm:mt-5">
                    <div>
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                            NPCs
                        </h3>
                        <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                            This campaign's NPCs. Below, you can link existing factions or
                            quickly create new ones.
                        </p>
                    </div>
                    <div class="mt-6 sm:mt-5">
                        <div class="grid gap-4 md:grid-cols-2">
                            <panel
                                v-for="npc in campaign.npcs"
                                :key="npc.id"
                                class="w-full sm:shadow-md"
                            >
                                <div class="p-4 grid grid-cols-1 grid-rows-3 gap-4">
                                    <div class="row-span-2">
                                        <p class="text-lg tracking-wide">
                                            {{ npc.name }}
                                        </p>
                                    </div>
                                    <div class="w-full flex">
                                        <btn
                                            class="ml-auto"
                                            color="gray"
                                            @click.stop.prevent=""
                                        >
                                            View
                                        </btn>
                                        <btn
                                            class="ml-3"
                                            color="gray"
                                            @click.stop.prevent=""
                                        >
                                            Edit
                                        </btn>
                                    </div>
                                </div>
                            </panel>
                        </div>
                    </div>
                    <div class="mt-6 sm:mt-5">
                        <template v-for="field in npcFields">
                            <auto-complete-section
                                :key="field.index"
                                :field="field"
                                model="npc"
                                search-field="name"
                                @item-select="
                                    selectItem($event, field.index, 'npcFields')
                                "
                                @remove-section="removeItem($event, 'npc')"
                            />
                        </template>
                        <div
                            class="sm:border-t sm:border-gray-200 sm:pt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                        >
                            <btn
                                wide
                                class="sm:col-start-2 xl:col-start-3"
                                @click.stop.prevent="addField('npcFields')"
                            >
                                <p class="mr-4">Add a npc</p>
                                <icon icon="plus" color="white" />
                            </btn>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-6 border-t border-gray-200 pt-5">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <btn wide type="button" color="gray" @click.stop.prevent="">
                        Cancel
                    </btn>
                    <btn wide type="submit" @click.stop.prevent="">
                        Save
                    </btn>
                </div>
            </div>
        </form>
        <portal to="right-panel" v-if="takeover">
            <quick-access>
                <p>
                    This slot content will be rendered wherever the "portal-target" with name
                    'right-panel' is located.
                </p>
            </quick-access>
        </portal>
    </section>
</template>

<script>
    import MainLayout from '_Layouts/MainLayout';
    import SectionHeader from '_Components/SectionHeader';
    import TextInput from '_Components/inputs/TextInput';
    import LoadingButton from '_Components/LoadingButton';
    import TrashedMessage from '_Components/TrashedMessage';
    import Wysiwyg from '_Components/inputs/Wysiwyg';
    import { sync } from 'vuex-pathify';
    import AutoComplete from '_Inputs/AutoComplete';
    import Icon from '_Components/Icon';
    import AutoCompleteSection from '_Pages/Campaign/AutoCompleteSection';
    import Panel from '_Components/cards/Panel';
    import Btn from '_Components/Btn';
    import QuickAccess from '_Components/QuickAccess';

    export default {
        name: 'Edit',
        components: {
            QuickAccess,
            Btn,
            Panel,
            AutoCompleteSection,
            Icon,
            AutoComplete,
            SectionHeader,
            TextInput,
            LoadingButton,
            TrashedMessage,
            Wysiwyg,
        },
        props: {
            campaign: {
                type: Object,
                default: () => {},
            },
        },
        data() {
            return {
                pageTitle: `Editing ${this.campaign.title}`,
                pageDescription: 'Updating a campaign.',
                sending: false,
                playerFields: [],
                factionFields: [],
                characterFields: [],
                npcFields: [],
                locationFields: [],
                taskFields: [],
                showInviteForm: false,
                form: {
                    title: this.campaign.title,
                    description: this.campaign.description,
                    players: [],
                    factions: [],
                },
            };
        },
        computed: {
            takeover() {
                return this.$page.takeover;
            },
            syncedPageTitle: sync('pageTitle'),
        },
        watch: {},
        created() {},
        mounted() {
            this.syncedPageTitle = this.pageTitle;
        },
        methods: {
            submit() {
                this.sending = true;
                this.form.players = _.map(this.playerFields, 'value');
                this.$inertia
                    .patch(this.route('campaigns.update', this.campaign.slug), this.form)
                    .then(() => (this.sending = false));
            },
            destroy() {
                if (confirm('Are you sure you want to delete this campaign?')) {
                    this.$inertia.delete(
                        this.route('campaigns.destroy', this.campaign.slug)
                    );
                }
            },
            restore() {
                if (confirm('Are you sure you want to restore this campaign?')) {
                    this.$inertia.put(
                        this.route('campaigns.restore', this.campaign.slug)
                    );
                }
            },
            addField(field) {
                let arr = this[field];
                let index = 1;

                let last = _.last(arr);
                if (last) {
                    index = last.index + 1;
                }

                arr.push({ index, value: null });
            },
            selectItem(selected, key, field) {
                let array = this[field];
                const id = selected.id;
                const index = key - 1;

                array[index].value = id;
            },
            removeItem(key, field) {
                if (confirm(`Are you sure you want to delete this ${field}?`)) {
                    let array = this[`${field}Fields`];
                    const index = key - 1;
                    array.splice(index, 1);
                }
            },
        },
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
