<template>
    <section class="h-screen container">
        <section-header>
            Creating Character
        </section-header>
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
                <text-input
                    v-model="form.alias"
                    label="Alias"
                    type="text"
                    :errors="$page.errors.alias"
                    class="w-full mb-6"
                    required
                    autofocus
                />
                <text-input
                    v-model="form.high_concept"
                    label="High Concept"
                    type="text"
                    :errors="$page.errors.high_concept"
                    class="w-full mb-6"
                    required
                    autofocus
                />
                <div class="w-full mb-6">
                    <wysiwyg v-model="form.bio" label="Bio" />
                </div>
            </div>

            <div class="flex flex-wrap items-center">
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
    import Wysiwyg from '_Components/inputs/Wysiwyg';
    import SectionHeader from '_Components/SectionHeader';
    import { sync } from 'vuex-pathify';

    export default {
        name: 'Create',
        components: {
            SectionHeader,
            Wysiwyg,
            'text-input': TextInput,
            'loading-button': LoadingButton,
        },
        props: {
            npc: {
                type: Boolean,
                default: false,
            },
        },
        data() {
            return {
                pageTitle: 'Adding new character',
                pageDescription: 'Adding a new character',
                sending: false,
                form: {
                    name: null,
                    alias: null,
                    high_concept: null,
                    bio: null,
                    active: true,
                    npc: this.npc,
                },
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
        methods: {
            submit() {
                this.sending = true;
                this.$inertia
                    .post(this.route('characters.store'), this.form)
                    .then(() => (this.sending = false));
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
