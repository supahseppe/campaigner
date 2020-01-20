<template>
    <div class="container mx-auto">
        <div class="flex flex-wrap justify-center">
            <div class="w-full max-w-sm">
                <div
                    class="flex flex-col break-words bg-white border border-2 rounded shadow-md"
                >
                    <div class="px-6 py-3 mb-0 font-semibold text-gray-700 bg-gray-200">
                        Reset Password
                    </div>

                    <form class="w-full p-6" @submit.prevent="submit">
                        <input v-model="form.token" type="hidden" name="token" />

                        <div class="flex flex-wrap mb-6">
                            <label
                                for="email"
                                class="block mb-2 text-sm font-bold text-gray-700"
                            >
                                E-Mail Address:
                            </label>

                            <input
                                id="email"
                                v-model="form.email"
                                type="email"
                                class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                :class="{ 'border-red-500': $page.errors.email }"
                                name="email"
                                required
                                autofocus
                            />

                            <p
                                v-if="$page.errors.email"
                                class="mt-4 text-xs italic text-red-500"
                            >
                                {{ $page.errors.email[0] }}
                            </p>
                        </div>

                        <div class="flex flex-wrap mb-6">
                            <label
                                for="password"
                                class="block mb-2 text-sm font-bold text-gray-700"
                            >
                                Password:
                            </label>

                            <input
                                id="password"
                                v-model="form.password"
                                type="password"
                                class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                :class="{ 'border-red-500': $page.errors.password }"
                                name="password"
                                required
                            />

                            <p
                                v-if="$page.errors.password"
                                class="mt-4 text-xs italic text-red-500"
                            >
                                {{ $page.errors.password[0] }}
                            </p>
                        </div>

                        <div class="flex flex-wrap mb-6">
                            <label
                                for="password-confirm"
                                class="block mb-2 text-sm font-bold text-gray-700"
                            >
                                Confirm Password:
                            </label>

                            <input
                                id="password-confirm"
                                v-model="form.password_confirmation"
                                type="password"
                                class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                name="password_confirmation"
                                required
                            />
                        </div>

                        <div class="flex flex-wrap">
                            <loading-button
                                :loading="sending"
                                type="submit"
                                class="px-4 py-2 font-bold text-gray-100 bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                            >
                                Reset Password
                            </loading-button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Layout from '_Layouts/MainLayout';
    import LoadingButton from '_Components/LoadingButton';

    export default {
        metaInfo: { title: 'Reset Password' },
        layout: Layout,
        components: {
            LoadingButton,
        },
        props: {
            token: String,
            email: String,
        },
        data() {
            return {
                sending: false,
                form: {
                    token: this.token,
                    email: this.email,
                    password: null,
                    password_confirmation: null,
                },
            };
        },
        methods: {
            submit() {
                this.sending = true;
                this.$inertia
                    .post('/password/reset', this.form)
                    .then(() => (this.sending = false));
            },
        },
    };
</script>
