<template>
    <main>
        <div class="relative bg-white overflow-hidden">
            <div class="max-w-screen-xl mx-auto ">
                <div
                    class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32"
                >
                    <div
                        class="pt-10 mx-auto max-w-screen-xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28"
                    >
                        <div class="sm:text-center lg:text-left">
                            <h2
                                class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl"
                            >
                                Level up your
                                <br class="xl:hidden" />
                                <span class="text-indigo-600">tabletop campaign</span>
                            </h2>
                            <p
                                class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                            >
                                Campaigner.app leverages the data you've already prepared
                                to help create new content, organize your world, and guide
                                your play via input from your players.
                            </p>
                            <div
                                class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
                            >
                                <div class="rounded-md shadow">
                                    <inertia-link
                                        :href="route('register')"
                                        class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                                    >
                                        Get started
                                    </inertia-link>
                                </div>
                                <div class="mt-3 sm:mt-0 sm:ml-3">
                                    <inertia-link
                                        :href="route('login')"
                                        class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                                    >
                                        Sign In
                                    </inertia-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <svg
                        class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                    >
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>
                </div>
            </div>
            <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                    class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                    src="img/dice.jpg"
                    alt=""
                />
            </div>
        </div>
        <div class="py-16 bg-gray-50 overflow-hidden lg:py-24">
            <div
                class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-screen-xl"
            >
                <svg
                    class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
                    width="404"
                    height="784"
                    fill="none"
                    viewBox="0 0 404 784"
                >
                    <defs>
                        <pattern
                            id="svg-pattern-squares-1"
                            x="0"
                            y="0"
                            width="20"
                            height="20"
                            patternUnits="userSpaceOnUse"
                        >
                            <rect
                                x="0"
                                y="0"
                                width="4"
                                height="4"
                                class="text-gray-200"
                                fill="currentColor"
                            />
                        </pattern>
                    </defs>
                    <rect width="404" height="784" fill="url(#svg-pattern-squares-1)" />
                </svg>

                <div class="relative">
                    <h3
                        class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
                    >
                        A smarter way to organize
                    </h3>
                    <p
                        class="mt-4 max-w-3xl mx-auto text-center text-xl leading-7 text-gray-500"
                    >
                        Yada yada data-driven approach to presenting your world to your
                        players. Allowing input from players between sessions to drive
                        action at the table.
                    </p>
                </div>

                <div class="relative mt-12 sm:mt-16 lg:mt-24">
                    <div
                        class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center"
                    >
                        <div class="lg:col-start-1">
                            <h4
                                class="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9"
                            >
                                Always in the loop
                            </h4>
                            <p class="mt-3 text-lg leading-7 text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Impedit ex obcaecati natus eligendi delectus, cum deleniti
                                sunt in labore nihil quod quibusdam expedita nemo.
                            </p>

                            <ul class="mt-10">
                                <li>
                                    <div class="flex">
                                        <div class="flex-shrink-0">
                                            <div
                                                class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                                            >
                                                <svg
                                                    class="h-6 w-6"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="ml-4">
                                            <h5
                                                class="text-lg leading-6 font-medium text-gray-900"
                                            >
                                                Mobile notifications
                                            </h5>
                                            <p
                                                class="mt-2 text-base leading-6 text-gray-500"
                                            >
                                                Lorem ipsum, dolor sit amet consectetur
                                                adipisicing elit. Maiores impedit
                                                perferendis suscipit eaque, iste dolor
                                                cupiditate blanditiis ratione.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li class="mt-10">
                                    <div class="flex">
                                        <div class="flex-shrink-0">
                                            <div
                                                class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                                            >
                                                <svg
                                                    class="h-6 w-6"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="ml-4">
                                            <h5
                                                class="text-lg leading-6 font-medium text-gray-900"
                                            >
                                                Reminder emails
                                            </h5>
                                            <p
                                                class="mt-2 text-base leading-6 text-gray-500"
                                            >
                                                Lorem ipsum, dolor sit amet consectetur
                                                adipisicing elit. Maiores impedit
                                                perferendis suscipit eaque, iste dolor
                                                cupiditate blanditiis ratione.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <div class="mt-10 -mx-4 relative lg:mt-0 lg:col-start-2">
                            <svg
                                class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                                width="784"
                                height="404"
                                fill="none"
                                viewBox="0 0 784 404"
                            >
                                <defs>
                                    <pattern
                                        id="svg-pattern-squares-4"
                                        x="0"
                                        y="0"
                                        width="20"
                                        height="20"
                                        patternUnits="userSpaceOnUse"
                                    >
                                        <rect
                                            x="0"
                                            y="0"
                                            width="4"
                                            height="4"
                                            class="text-gray-200"
                                            fill="currentColor"
                                        />
                                    </pattern>
                                </defs>
                                <rect
                                    width="784"
                                    height="404"
                                    fill="url(#svg-pattern-squares-4)"
                                />
                            </svg>
                            <img
                                class="relative mx-auto"
                                width="490"
                                src="/img/feature-example-2.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <svg
                    class="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
                    width="404"
                    height="784"
                    fill="none"
                    viewBox="0 0 404 784"
                >
                    <defs>
                        <pattern
                            id="svg-pattern-squares-3"
                            x="0"
                            y="0"
                            width="20"
                            height="20"
                            patternUnits="userSpaceOnUse"
                        >
                            <rect
                                x="0"
                                y="0"
                                width="4"
                                height="4"
                                class="text-gray-200"
                                fill="currentColor"
                            />
                        </pattern>
                    </defs>
                    <rect width="404" height="784" fill="url(#svg-pattern-squares-3)" />
                </svg>

                <div
                    class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center"
                >
                    <div class="mt-10 -mx-4 relative lg:mt-0">
                        <svg
                            class="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
                            width="784"
                            height="404"
                            fill="none"
                            viewBox="0 0 784 404"
                        >
                            <defs>
                                <pattern
                                    id="svg-pattern-squares-2"
                                    x="0"
                                    y="0"
                                    width="20"
                                    height="20"
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect
                                        x="0"
                                        y="0"
                                        width="4"
                                        height="4"
                                        class="text-gray-200"
                                        fill="currentColor"
                                    />
                                </pattern>
                            </defs>
                            <rect
                                width="784"
                                height="404"
                                fill="url(#svg-pattern-squares-2)"
                            />
                        </svg>
                        <img
                            class="relative mx-auto"
                            width="490"
                            src="/img/feature-example-1.png"
                            alt=""
                        />
                    </div>
                    <div class="relative">
                        <h4
                            class="text-2xl leading-8 font-extrabold text-gray-900 tracking-tight sm:text-3xl sm:leading-9"
                        >
                            Getting started is hella simple
                        </h4>
                        <p class="mt-3 text-lg leading-7 text-gray-500">
                            Block of text saying that you don't need a bunch of detailed
                            notes to get going--just the desire to get started and a
                            campaign name.
                        </p>

                        <ul class="mt-10">
                            <li>
                                <div class="flex">
                                    <div class="flex-shrink-0">
                                        <div
                                            class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                                        >
                                            <svg
                                                class="h-6 w-6"
                                                stroke="currentColor"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="ml-4">
                                        <h5
                                            class="text-lg leading-6 font-medium text-gray-900"
                                        >
                                            Bullet Point
                                        </h5>
                                        <p class="mt-2 text-base leading-6 text-gray-500">
                                            Lorem ipsum, dolor sit amet consectetur
                                            adipisicing elit. Maiores impedit perferendis
                                            suscipit eaque, iste dolor cupiditate
                                            blanditiis ratione.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li class="mt-10">
                                <div class="flex">
                                    <div class="flex-shrink-0">
                                        <div
                                            class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                                        >
                                            <svg
                                                class="h-6 w-6"
                                                stroke="currentColor"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="ml-4">
                                        <h5
                                            class="text-lg leading-6 font-medium text-gray-900"
                                        >
                                            Bullet Point
                                        </h5>
                                        <p class="mt-2 text-base leading-6 text-gray-500">
                                            Lorem ipsum, dolor sit amet consectetur
                                            adipisicing elit. Maiores impedit perferendis
                                            suscipit eaque, iste dolor cupiditate
                                            blanditiis ratione.
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li class="mt-10">
                                <div class="flex">
                                    <div class="flex-shrink-0">
                                        <div
                                            class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"
                                        >
                                            <svg
                                                class="h-6 w-6"
                                                stroke="currentColor"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                    stroke-width="2"
                                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                    <div class="ml-4">
                                        <h5
                                            class="text-lg leading-6 font-medium text-gray-900"
                                        >
                                            Bullet Point
                                        </h5>
                                        <p class="mt-2 text-base leading-6 text-gray-500">
                                            Lorem ipsum, dolor sit amet consectetur
                                            adipisicing elit. Maiores impedit perferendis
                                            suscipit eaque, iste dolor cupiditate
                                            blanditiis ratione.
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import { sync } from 'vuex-pathify';
    import Logo from '_Components/Logo';
    import MarketingLayout from '_Layouts/MarketingLayout';

    export default {
        metaInfo: { title: 'Welcome' },
        components: { Logo },
        data: function() {
            return {
                open: false,
            };
        },
        computed: {
            headerLinks: sync('headerLinks'),
        },
        methods: {
            isRoute(name) {
                return name === this.$page.route.name;
            },
        },
        layout: MarketingLayout,
    };
</script>
