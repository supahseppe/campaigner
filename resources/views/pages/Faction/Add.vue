<template>
    <section class="h-screen container">
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
                <div class="w-full">
                    <wysiwyg label="Description" v-model="form.description" />
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

    export default {
        name: 'Create',
        components: {
            Wysiwyg,
            'text-input': TextInput,
            'loading-button': LoadingButton,
        },
        props: {},
        data() {
            return {
                pageTitle: 'Adding new faction',
                pageDescription: 'Adding a new faction',
                sending: false,
                form: {
                    name: null,
                    description: null,
                },
            };
        },
        computed: {},
        watch: {},
        created() {},
        mounted() {},
        methods: {
            submit() {
                const url = this.route('factions.store');
                this.sending = true;
                this.$inertia.post(url, this.form).then(() => (this.sending = false));
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
