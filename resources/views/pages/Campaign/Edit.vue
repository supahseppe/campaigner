<template>
    <section class="h-screen container">
        <section-header>
            Editing Campaign
        </section-header>
        <form
            class="w-full p-4 bg-white rounded md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto"
            @submit.prevent="submit"
        >
            <div class="flex flex-wrap mb-6">
                <text-input
                    label="Title"
                    type="text"
                    :errors="$page.errors.title"
                    v-model="form.title"
                    class="w-full mb-6"
                    required
                    autofocus
                />
                <div class="w-full mb-6">
                    <wysiwyg label="Description" v-model="form.description" />
                </div>
            </div>

            <div class="flex flex-wrap items-center justify-between">
                <button
                    v-if="!campaign.deleted_at"
                    class="text-red-600 hover:underline"
                    tabindex="-1"
                    type="button"
                    @click="destroy"
                >
                    Delete Campaign
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

    export default {
        name: 'Edit',
        components: {
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
                form: {
                    title: this.campaign.title,
                    description: this.campaign.description,
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
