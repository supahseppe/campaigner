<template>
    <div>
        <form class="w-full p-6" @submit.prevent="submit">
            <div class="flex flex-wrap mb-6">
                <text-input
                    label="Title"
                    :type="title"
                    :errors="$page.errors.title"
                    v-model="form.title"
                    class="w-full"
                    required
                    autofocus
                />
            </div>

            <div class="flex flex-wrap items-center">
                <loading-button
                    :loading="sending"
                    type="submit"
                    class="px-4 py-2 font-bold text-gray-100 bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                >
                    Login
                </loading-button>
            </div>
        </form>
    </div>
</template>

<script>
    import MainLayout from '_Layouts/MainLayout';
    import TextInput from '_Components/inputs/TextInput';
    import LoadingButton from '_Components/LoadingButton';

    export default {
        name: 'Create Dummy',
        components: {
            'text-input': TextInput,
            'loading-button': LoadingButton,
        },
        props: {},
        data() {
            return {
                sending: false,
                form: {
                    title: null,
                },
            };
        },
        computed: {},
        watch: {},
        created() {},
        mounted() {},
        methods: {
            submit() {
                const url = route('dummies.store');
                this.sending = true;
                this.$inertia
                    .post(url, {
                        email: this.form.email,
                        password: this.form.password,
                        remember: this.form.remember,
                    })
                    .then(() => (this.sending = false));
            },
        },
        layout: MainLayout,
        metaInfo() {
            return {
                title: this.title,
                meta: [
                    {
                        name: 'description',
                        content: this.description,
                    },
                ],
            };
        },
    };
</script>
