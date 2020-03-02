<template>
    <section class="h-screen container">
        <trashed-message v-if="faction.deleted_at" class="mb-6" @restore="restore">
            This faction has been deleted.
        </trashed-message>
        <form
            class="w-full p-4 bg-white rounded md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto"
            @submit.prevent="submit"
        >
            <div class="flex flex-wrap mb-6">
                <text-input
                    v-model="form.name"
                    label="Name"
                    type="text"
                    :errors="$page.errors.name"
                    class="w-full mb-6"
                    required
                    autofocus
                />
                <div class="w-full mb-6">
                    <wysiwyg v-model="form.description" label="Description" />
                </div>
                <auto-complete
                    v-model="form.location"
                    label="Location"
                    model="location"
                />
            </div>

            <div class="flex flex-wrap items-center justify-between">
                <button
                    v-if="!faction.deleted_at"
                    class="text-red-600 hover:underline"
                    tabindex="-1"
                    type="button"
                    @click="destroy"
                >
                    Delete Factions
                </button>
                <loading-button
                    :loading="sending"
                    type="submit"
                    class="px-4 py-2 font-bold text-gray-100 bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                >
                    Submit
                </loading-button>
            </div>
        </form>
    </section>
</template>

<script>
    import MainLayout from '_Layouts/MainLayout';
    import TextInput from '_Components/inputs/TextInput';
    import LoadingButton from '_Components/LoadingButton';
    import TrashedMessage from '_Components/TrashedMessage';
    import Wysiwyg from '_Components/inputs/Wysiwyg';
    import AutoComplete from '_Inputs/AutoComplete';

    export default {
        name: 'Edit',
        components: {
            AutoComplete,
            TextInput,
            LoadingButton,
            TrashedMessage,
            Wysiwyg,
        },
        props: {
            faction: {
                type: Object,
                default: () => {},
            },
        },
        data() {
            return {
                pageTitle: `Editing ${this.faction.name}`,
                pageDescription: 'Updating a faction.',
                sending: false,
                form: {
                    name: this.faction.name,
                    description: this.faction.description,
                    location: this.faction.location,
                },
            };
        },
        computed: {},
        watch: {},
        created() {},
        mounted() {},
        methods: {
            submit() {
                this.sending = true;
                this.$inertia
                    .patch(this.route('factions.update', this.faction.slug), this.form)
                    .then(() => (this.sending = false));
            },
            destroy() {
                if (confirm('Are you sure you want to delete this factions?')) {
                    this.$inertia.delete(
                        this.route('factions.destroy', this.faction.slug)
                    );
                }
            },
            restore() {
                if (confirm('Are you sure you want to restore this factions?')) {
                    this.$inertia.put(this.route('factions.restore', this.faction.slug));
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
