<template>
    <div class="container mx-auto">
        <div class="flex flex-wrap justify-center">
            <div class="w-full max-w-sm">
                <div
                    v-if="$page.auth_sessions.resent"
                    class="px-3 py-4 mb-4 text-sm text-green-700 bg-green-100 border border-t-8 border-green-600 rounded"
                    role="alert"
                >
                    A fresh verification link has been sent to your email address.
                </div>

                <div
                    class="flex flex-col break-words bg-white border border-2 rounded shadow-md"
                >
                    <div class="px-6 py-3 mb-0 font-semibold text-gray-700 bg-gray-200">
                        Verify Your Email Address
                    </div>

                    <div class="flex flex-wrap w-full p-6">
                        <p class="leading-normal">
                            Before proceeding, please check your email for a verification
                            link.
                        </p>

                        <p class="mt-6 leading-normal">
                            If you did not receive the email,
                            <inertia-link
                                class="text-blue-500 no-underline hover:text-blue-700"
                                href="/email/resend"
                                method="post"
                            >
                                click here to resend another
                            </inertia-link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    /**
     * - GET: "/email/verify" (verification.notice)
     * = GET: "/email/verify/{id}/{hash}" (verification.verify)
     * = POST: "/email/resend" (verification.resend)
     */

    import Layout from '_Layouts/MainLayout';

    export default {
        metaInfo: { title: 'Verify Your Email Address' },
        layout: Layout,
        data() {
            return {
                sending: false,
            };
        },
    };
</script>
