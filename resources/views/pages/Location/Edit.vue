<template>
    <section class="h-screen container">
        <trashed-message v-if="location.deleted_at" class="mb-6" @restore="restore">
            This location has been deleted.
        </trashed-message>
        <form
            class="w-full p-4 bg-white rounded md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto"
            @submit.prevent="submit"
        >
            <div class="flex flex-wrap mb-6">
                <text-input
                    label="Title"
                    type="text"
                    :errors="$page.errors.name"
                    v-model="form.name"
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
                    v-if="!location.deleted_at"
                    class="text-red-600 hover:underline"
                    tabindex="-1"
                    type="button"
                    @click="destroy"
                >
                    Delete Location
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

    export default {
        name: 'Edit',
        components: {
            TextInput,
            LoadingButton,
            TrashedMessage,
            Wysiwyg,
        },
        props: {
            location: {
                type: Object,
                default: () => {},
            },
        },
        data() {
            return {
                pageTitle: `Editing ${this.location.name}`,
                pageDescription: 'Updating a location.',
                sending: false,
                form: {
                    title: this.location.name,
                    description: this.location.description,
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
                    .patch(this.route('locations.update', this.location.slug), this.form)
                    .then(() => (this.sending = false));
            },
            destroy() {
                if (confirm('Are you sure you want to delete this location?')) {
                    this.$inertia.delete(
                        this.route('locations.destroy', this.location.slug)
                    );
                }
            },
            restore() {
                if (confirm('Are you sure you want to restore this location?')) {
                    this.$inertia.put(
                        this.route('locations.restore', this.location.slug)
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
