<template>
    <div
        class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
    >
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <div class="flex justify-center">
                <logo color="indigo-800" size="xl" />
            </div>
            <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                Let's create a campaign!
            </h2>
            <p class="mt-2 text-center text-sm leading-5 text-gray-600 max-w">
                We'll start by just getting a title for your campaign.
            </p>
            <p class="mt-2 text-center text-sm leading-5 text-gray-600 max-w">
                Don't worry! You can add more details soon.
            </p>
        </div>

        <div class="mt-6 mx-auto w-percent-90 sm:w-full sm:max-w-md">
            <div class="bg-white py-6 px-4 shadow sm:rounded-lg sm:px-10">
                <form
                    class="w-full p-4 bg-white rounded md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto"
                    @submit.prevent="submit"
                >
                    <text-input
                        v-model="form.title"
                        label="Title"
                        type="text"
                        :errors="$page.errors.title"
                        class="w-full"
                        required
                        autofocus
                    />

                    <div class="mt-6">
                        <span class="block w-full rounded-md shadow-sm">
                            <button
                                type="submit"
                                class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                            >
                                Sign in
                            </button>
                        </span>
                    </div>
                </form>
                <div>
                    <p class="mt-2 text-center text-sm leading-5 text-gray-600 max-w">
                        Joining an existing campaign?
                    </p>
                    <p class="mt-2 text-center text-sm leading-5 text-gray-600 max-w">
                        <inertia-link
                            :href="route('campaigns.index', { own: false })"
                            class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                        >
                            Search for it here!
                        </inertia-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TextInput from '_Components/inputs/TextInput';
    import LoadingButton from '_Components/LoadingButton';
    import Wysiwyg from '_Components/inputs/Wysiwyg';
    import Logo from '_Components/Logo';

    export default {
        name: 'InitialCampaign',
        components: {
            Logo,
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
                        initial: true,
                        ...this.form,
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
