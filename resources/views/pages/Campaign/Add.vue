<template>
    <section class="h-screen container">
        <section-header>
            Creating Campaign
        </section-header>
        <form
            class="w-full p-4 bg-white rounded md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto"
            @submit.prevent="submit"
        >
            <div class="flex flex-wrap mb-6">
                <text-input
                    v-model="form.title"
                    label="Title"
                    type="text"
                    :errors="$page.errors.title"
                    class="w-full mb-6"
                    required
                    autofocus
                />
                <div class="w-full">
                    <wysiwyg v-model="form.description" label="Description" />
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
    import SectionHeader from '_Components/SectionHeader';
    import TextInput from '_Components/inputs/TextInput';
    import LoadingButton from '_Components/LoadingButton';
    import Wysiwyg from '_Components/inputs/Wysiwyg';
    import { sync } from 'vuex-pathify';

    export default {
        name: 'Create',
        components: {
            SectionHeader,
            Wysiwyg,
            'text-input': TextInput,
            'loading-button': LoadingButton,
        },
        props: {},
        data() {
            return {
                pageTitle: 'Adding new campaign',
                pageDescription: 'Adding a new campaign',
                sending: false,
                form: {
                    title: null,
                    description: null,
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
                const url = this.route('campaigns.store');
                this.sending = true;
                this.$inertia
                    .post(url, {
                        title: this.form.title,
                        description: this.form.description,
                    })
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
