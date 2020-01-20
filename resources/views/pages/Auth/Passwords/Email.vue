<template>
    <div class="container mx-auto">
        <div class="flex flex-wrap justify-center">
            <div class="w-full max-w-sm">
                <div
                    v-if="$page.auth_sessions.status"
                    class="px-3 py-4 mb-4 text-sm text-green-700 bg-green-100 border border-t-8 border-green-600 rounded"
                    role="alert"
                >
                    {{ $page.auth_sessions.status }}
                </div>

                <div
                    class="flex flex-col break-words bg-white border border-2 rounded shadow-md"
                >
                    <div class="px-6 py-3 mb-0 font-semibold text-gray-700 bg-gray-200">
                        Reset Password
                    </div>

                    <form class="w-full p-6" @submit.prevent="submit">
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
                                class="w-full px-3 py-2 leading-tight border rounded shadow appearance-none text-grey-darker focus:outline-none focus:shadow-outline"
                                :class="{ 'border-red-500': $page.errors.email }"
                                name="email"
                                required
                            />

                            <p
                                v-if="$page.errors.email"
                                class="mt-4 text-xs italic text-red-500"
                            >
                                {{ $page.errors.email[0] }}
                            </p>
                        </div>

                        <div class="flex flex-wrap">
                            <loading-button
                                :loading="sending"
                                type="submit"
                                class="px-4 py-2 font-bold text-gray-100 bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                            >
                                Send Password Reset Link
                            </loading-button>

                            <p
                                class="w-full mt-8 -mb-4 text-xs text-center text-grey-dark"
                            >
                                <inertia-link
                                    class="text-blue-500 no-underline hover:text-blue-700"
                                    href="/login"
                                >
                                    Back to login
                                </inertia-link>
                            </p>
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
        metaInfo: { title: 'Forgot Password' },
        layout: Layout,
        components: {
            LoadingButton,
        },
        data() {
            return {
                sending: false,
                form: {
                    email: null,
                },
            };
        },
        methods: {
            submit() {
                this.sending = true;
                this.$inertia
                    .post('/password/email', this.form)
                    .then(() => (this.sending = false));
            },
        },
    };
</script>
