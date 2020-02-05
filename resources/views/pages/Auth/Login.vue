<template>
    <div class="container mx-auto h-screen">
        <div class="flex items-center justify-center h-full">
            <div class="w-full max-w-sm">
                <div
                    class="flex flex-col break-words bg-white border border-2 rounded shadow-md"
                >
                    <div
                        class="px-6 py-3 mb-0 font-bold font-lg text-white bg-indigo-500"
                    >
                        Login
                    </div>

                    <form class="w-full p-6" @submit.prevent="submit">
                        <div class="flex flex-wrap mb-6">
                            <text-input
                                label="Email Address"
                                type="email"
                                :errors="$page.errors.email"
                                v-model="form.email"
                                class="w-full"
                                required
                                autofocus
                            />
                        </div>

                        <div class="flex flex-wrap mb-6">
                            <label
                                for="password"
                                class="block mb-2 text-sm font-bold text-gray-700"
                            >
                                Password
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

                        <div class="flex mb-6">
                            <input
                                id="remember"
                                v-model="form.remember"
                                type="checkbox"
                                name="remember"
                            />

                            <label class="ml-3 text-sm text-gray-700" for="remember">
                                Remember Me
                            </label>
                        </div>

                        <div class="flex flex-wrap items-center">
                            <loading-button
                                :loading="sending"
                                type="submit"
                                class="px-4 py-2 font-bold text-gray-100 bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                            >
                                Login
                            </loading-button>

                            <inertia-link
                                v-if="
                                    !$page.auth.user && $page.auth_routes.password_request
                                "
                                class="ml-auto text-sm text-blue-500 no-underline whitespace-no-wrap hover:text-blue-700"
                                href="/password/reset"
                            >
                                Forgot Your Password?
                            </inertia-link>

                            <p
                                v-if="!$page.auth.user && $page.auth_routes.register"
                                class="w-full mt-8 -mb-4 text-xs text-center text-gray-700"
                            >
                                Don't have an account?
                                <inertia-link
                                    class="text-blue-500 no-underline hover:text-blue-700"
                                    href="/register"
                                >
                                    Register
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
    import TextInput from '_Inputs/TextInput';

    export default {
        metaInfo: { title: 'Login' },
        layout: Layout,
        components: {
            'text-input': TextInput,
            LoadingButton,
        },
        data() {
            return {
                sending: false,
                form: {
                    email: null,
                    password: null,
                    remember: null,
                },
            };
        },
        methods: {
            submit() {
                this.sending = true;
                this.$inertia
                    .post('/login', {
                        email: this.form.email,
                        password: this.form.password,
                        remember: this.form.remember,
                    })
                    .then(() => (this.sending = false));
            },
        },
    };
</script>
