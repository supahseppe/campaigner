<template>
    <div class="container mx-auto h-screen">
        <div class="flex items-center justify-center h-full">
            <div class="w-full max-w-sm lg:max-w-md">
                <div
                    class="flex flex-col break-words bg-white border border-2 rounded shadow-md"
                >
                    <div
                        class="px-6 py-3 mb-0 font-bold font-lg text-white bg-indigo-500"
                    >
                        Please create a campaign
                    </div>

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
                    <div class="px-6 py-3 mb-0 text-sm bg-indigo-200">
                        <inertia-link :href="route('campaigns.index')">
                            Already a part of a campaign? Search for it here.
                        </inertia-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TextInput from '_Components/inputs/TextInput';
    import LoadingButton from '_Components/LoadingButton';
    import Wysiwyg from '_Components/inputs/Wysiwyg';

    export default {
        name: 'InitialCampaign',
        components: {
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
                    default: true,
                },
            };
        },
        computed: {},
        watch: {},
        created() {},
        mounted() {},
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
