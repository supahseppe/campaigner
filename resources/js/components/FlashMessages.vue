<template>
    <div v-if="$page.flash.success || $page.flash.error">
        <div
            v-if="$page.flash.success && show"
            class="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8"
        >
            <div class="p-2 rounded-lg bg-green-600 shadow-lg sm:p-3">
                <div class="flex items-center justify-between flex-wrap">
                    <div class="w-0 flex-1 flex items-center">
                        <span class="flex p-2 rounded-lg bg-green-800">
                            <svg
                                class="ml-4 mr-2 flex-shrink-0 w-4 h-4 fill-white"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <polygon points="0 11 2 9 7 14 18 3 20 5 7 18" />
                            </svg>
                        </span>
                        <p class="ml-3 font-medium text-white truncate">
                            {{ $page.flash.success }}
                        </p>
                    </div>
                    <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
                        <button
                            type="button"
                            class="-mr-1 flex p-2 rounded-md hover:bg-green-500 focus:outline-none focus:bg-green-500 transition ease-in-out duration-150"
                        >
                            <svg
                                class="h-6 w-6 text-white"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div
            v-if="($page.flash.error || Object.keys($page.errors).length > 0) && show"
            class="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8"
        >
            <div class="p-2 rounded-lg bg-red-600 shadow-lg sm:p-3">
                <div class="flex items-center justify-between flex-wrap">
                    <div class="w-0 flex-1 flex items-center">
                        <span class="flex p-2 rounded-lg bg-red-800">
                            <svg
                                class="ml-4 mr-2 flex-shrink-0 w-4 h-4 fill-white"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z"
                                />
                            </svg>
                        </span>
                        <template v-if="$page.flash.error">
                            <p class="ml-3 font-medium text-white truncate">
                                {{ $page.flash.error }}
                            </p>
                        </template>
                        <template v-else>
                            <p
                                v-if="Object.keys($page.errors).length === 1"
                                class="ml-3 font-medium text-white truncate"
                            >
                                There is one form error.
                            </p>
                            <p v-else class="ml-3 font-medium text-white truncate">
                                There are {{ Object.keys($page.errors).length }} form
                                errors.
                            </p>
                        </template>
                    </div>
                    <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
                        <button
                            type="button"
                            class="-mr-1 flex p-2 rounded-md hover:bg-red-500 focus:outline-none focus:bg-red-500 transition ease-in-out duration-150"
                        >
                            <svg
                                class="h-6 w-6 text-white"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FlashMessage',
        components: {},
        props: {},
        data() {
            return {
                show: true,
            };
        },
        computed: {},
        watch: {
            '$page.flash': {
                handler() {
                    this.show = true;
                },
                deep: true,
            },
        },
        created() {},
        mounted() {},
        methods: {},
    };
</script>
