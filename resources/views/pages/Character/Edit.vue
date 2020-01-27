<template>
    <section class="h-screen container">
        <section-header>
            Editing Character
        </section-header>
        <trashed-message v-if="character.deleted_at" class="mb-6" @restore="restore">
            This character has been deleted.
        </trashed-message>
        <form
            class="w-full p-4 bg-white rounded md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto"
            @submit.prevent="submit"
        >
            <div class="flex flex-wrap mb-6">
                <text-input
                    label="Name"
                    type="text"
                    :errors="$page.errors.name"
                    v-model="form.name"
                    class="w-full mb-6"
                    required
                    autofocus
                />
                <text-input
                    label="Alias"
                    type="text"
                    :errors="$page.errors.alias"
                    v-model="form.alias"
                    class="w-full mb-6"
                    required
                    autofocus
                />
                <text-input
                    label="High Concept"
                    type="text"
                    :errors="$page.errors.high_concept"
                    v-model="form.high_concept"
                    class="w-full mb-6"
                    required
                    autofocus
                />
                <div class="w-full mb-6">
                    <wysiwyg label="Description" v-model="form.bio" />
                </div>
                <label for="active-field" class="w-full mb-6">
                    Active: {{ !!form.active }}
                    <input type="checkbox" id="active-field" v-model="form.active" />
                </label>
                <btn @click.stop.prevent="form.npc = !form.npc">
                    <p v-if="form.npc">Convert to Character</p>
                    <p v-else>Convert to Npc</p>
                </btn>
            </div>

            <div class="flex flex-wrap items-center justify-between">
                <button
                    v-if="!character.deleted_at"
                    class="text-red-600 hover:underline"
                    tabindex="-1"
                    type="button"
                    @click="destroy"
                >
                    Delete Character
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
    import SectionHeader from '_Components/SectionHeader';
    import TextInput from '_Components/inputs/TextInput';
    import LoadingButton from '_Components/LoadingButton';
    import TrashedMessage from '_Components/TrashedMessage';
    import Wysiwyg from '_Components/inputs/Wysiwyg';
    import Btn from '_Components/Btn';

    export default {
        name: 'Edit',
        components: {
            SectionHeader,
            TextInput,
            LoadingButton,
            TrashedMessage,
            Wysiwyg,
            Btn,
        },
        props: {
            character: {
                type: Object,
                default: () => {},
            },
        },
        data() {
            return {
                pageTitle: `Editing ${this.character.title}`,
                pageDescription: 'Updating a character.',
                sending: false,
                form: {
                    name: this.character.name,
                    alias: this.character.alias,
                    high_concept: this.character.high_concept,
                    bio: this.character.bio,
                    active: this.character.active,
                    npc: !!this.character.npc,
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
                    .patch(
                        this.route('characters.update', this.character.slug),
                        this.form
                    )
                    .then(() => (this.sending = false));
            },
            destroy() {
                if (confirm('Are you sure you want to delete this character?')) {
                    this.$inertia.delete(
                        this.route('characters.destroy', this.character.slug)
                    );
                }
            },
            restore() {
                if (confirm('Are you sure you want to restore this character?')) {
                    this.$inertia.put(
                        this.route('characters.restore', this.character.slug)
                    );
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
