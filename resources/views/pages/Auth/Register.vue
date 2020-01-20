<template>
    <div class="container mx-auto">
        <div class="flex flex-wrap justify-center">
            <div class="w-full max-w-sm">
                <div
                    class="flex flex-col break-words bg-white border border-2 rounded shadow-md"
                >
                    <div class="px-6 py-3 mb-0 font-semibold text-gray-700 bg-gray-200">
                        Register
                    </div>

                    <form class="w-full p-6" @submit.prevent="submit">
                        <div class="flex flex-wrap mb-6">
                            <label
                                for="name"
                                class="block mb-2 text-sm font-bold text-gray-700"
                            >
                                Name:
                            </label>

                            <input
                                id="name"
                                v-model="form.name"
                                type="text"
                                class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                :class="{ 'border-red-500': $page.errors.name }"
                                name="name"
                                required
                                autofocus
                            />

                            <p
                                v-if="$page.errors.name"
                                class="mt-4 text-xs italic text-red-500"
                            >
                                {{ $page.errors.name[0] }}
                            </p>
                        </div>

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
                                class="inline-block px-4 py-2 text-base font-bold leading-normal text-center text-gray-100 no-underline whitespace-no-wrap align-middle bg-blue-500 border rounded select-none hover:bg-blue-700"
                            >
                                Register
                            </loading-button>

                            <p
                                class="w-full mt-8 -mb-4 text-xs text-center text-gray-700"
                            >
                                Already have an account?
                                <inertia-link
                                    class="text-blue-500 no-underline hover:text-blue-700"
                                    href="/login"
                                >
                                    Login
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
        metaInfo: { title: 'Register' },
        layout: Layout,
        components: {
            LoadingButton,
        },
        data() {
            return {
                sending: false,
                form: {
                    name: null,
                    email: null,
                    password: null,
                    password_confirmation: null,
                },
            };
        },
        methods: {
            submit() {
                this.sending = true;
                this.$inertia
                    .post('/register', this.form)
                    .then(() => (this.sending = false));
            },
        },
    };
</script>
