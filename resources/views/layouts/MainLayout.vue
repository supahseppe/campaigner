<template>
    <div
        class="h-screen flex overflow-hidden bg-gray-100"
        @keydown.escape="sidebarOpen = false"
    >
        <!-- Off-canvas menu for mobile -->
        <div class="md:hidden">
            <div
                class="fixed inset-0 z-30 bg-gray-600 opacity-0 pointer-events-none transition-opacity ease-linear duration-300"
                :class="{
                    'opacity-75 pointer-events-auto': sidebarOpen,
                    'opacity-0 pointer-events-none': !sidebarOpen,
                }"
                @click="sidebarOpen = false"
            ></div>
            <div
                class="fixed inset-y-0 left-0 flex flex-col z-40 max-w-xs w-full bg-gray-800 transform ease-in-out duration-300"
                :class="sidebarTransform"
            >
                <div class="absolute top-0 right-0 -mr-14 p-1">
                    <button
                        v-show="sidebarOpen"
                        class="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
                        @click="sidebarOpen = false"
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
                <div class="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                    <div class="flex-shrink-0 flex items-center px-4">
                        <img
                            class="h-8 w-auto"
                            src="/img/workflow-logo-on-dark.svg"
                            alt="Workflow"
                        />
                    </div>
                    <nav class="mt-5 px-2">
                        <sidebar-menu-provider>
                            <template #default="{ links }">
                                <nav class="mt-5 flex-1 px-2 bg-gray-800">
                                    <div v-for="(link, i) in links" :key="i">
                                        <inertia-link
                                            :href="link.url"
                                            class="mt-1 first:mt-0 group flex items-center px-2 py-2 text-base leading-6 font-medium rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150"
                                            :class="{
                                                'text-white bg-gray-900': isRoute(
                                                    link.route
                                                ),
                                                'cursor-not-allowed pointer-events-none opacity-75': !$page
                                                    .auth.user.campaign,
                                            }"
                                        >
                                            <icon
                                                :icon="link.icon"
                                                color="white"
                                                class="mr-4"
                                            />
                                            {{ link.label }}
                                        </inertia-link>
                                        <div
                                            v-if="i === 0 && $page.auth.user.campaign"
                                            class="my-3 px-2"
                                        >
                                            <p class="text-xs text-gray-400">
                                                Selected Campaign:
                                            </p>
                                            <p class="text-sm text-gray-300">
                                                {{ $page.auth.user.campaign.title }}
                                            </p>
                                        </div>
                                    </div>
                                </nav>
                            </template>
                        </sidebar-menu-provider>
                    </nav>
                </div>
            </div>
        </div>
        <sidebar />
        <div class="flex flex-col w-0 flex-1 overflow-hidden">
            <main
                class="flex-1 relative z-0 overflow-y-auto focus:outline-none"
                tabindex="0"
            >
                <div class="bg-gray-800">
                    <div class="mx-auto pr-4 sm:pr-6 lg:pr-8">
                        <div class="flex items-center justify-between h-16">
                            <div class="flex items-center">
                                <div class="hidden md:block">
                                    <div class="flex items-baseline">
                                        <template v-for="(link, i) in headerLinks">
                                            <inertia-link
                                                v-if="link.route !== 'home'"
                                                :key="i"
                                                :href="route(link.route)"
                                                class="ml-4 first:ml-0 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
                                                :class="{
                                                    'bg-gray-900 text-white': isRoute(
                                                        link.route
                                                    ),
                                                }"
                                            >
                                                {{ link.label }}
                                            </inertia-link>
                                        </template>
                                    </div>
                                </div>
                            </div>
                            <div class="hidden md:block">
                                <div class="ml-4 flex items-center md:ml-6">
                                    <button
                                        class="p-1 border-2 border-transparent text-gray-400 rounded-full hover:text-white focus:outline-none focus:text-white focus:bg-gray-700"
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
                                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                            />
                                        </svg>
                                    </button>
                                    <div
                                        v-clickout="dropdownClickout"
                                        class="ml-3 relative"
                                    >
                                        <div>
                                            <button
                                                class="max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid"
                                                @click="dropdownOpen = !dropdownOpen"
                                            >
                                                <img
                                                    class="h-8 w-8 rounded-full"
                                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                            </button>
                                        </div>
                                        <transition
                                            enter-active-class="transition ease-out duration-100"
                                            enter-class="transform opacity-0 scale-95"
                                            enter-to-class="transform opacity-100 scale-100"
                                            leave-active-class="transition ease-in duration-75"
                                            leave-class="transform opacity-100 scale-100"
                                            leave-to-class="transform opacity-0 scale-95"
                                        >
                                            <div
                                                v-show="dropdownOpen"
                                                class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
                                            >
                                                <div
                                                    class="py-1 rounded-md bg-white shadow-xs"
                                                >
                                                    <a
                                                        href="#"
                                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                    >
                                                        Your Profile
                                                    </a>
                                                    <a
                                                        href="#"
                                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                    >
                                                        Settings
                                                    </a>
                                                    <inertia-link
                                                        :href="route('logout')"
                                                        method="post"
                                                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                    >
                                                        Sign out
                                                    </inertia-link>
                                                </div>
                                            </div>
                                        </transition>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <flash-messages />
                    <slot />
                </div>
            </main>
        </div>
        <portal-target name="right-panel" class="absolute right-0 inset-y-0 w-full pointer-events-none" />
    </div>
</template>

<script>
    import { sync } from 'vuex-pathify';

    import FlashMessages from '_Components/FlashMessages';
    import Sidebar from '_Layouts/Menus/Sidebar';
    import SidebarMenuProvider from '_Layouts/Menus/SidebarMenuProvider';
    import Icon from '_Components/Icon';

    export default {
        components: {
            SidebarMenuProvider,
            Sidebar,
            FlashMessages,
            Icon,
        },
        data: function() {
            return {
                sidebarOpen: false,
                dropdownOpen: false,
            };
        },
        computed: {
            sidebarTransform() {
                if (this.sidebarOpen) {
                    return 'translate-x-0';
                }

                return '-translate-x-full';
            },
            headerLinks: sync('headerLinks'),
            pageTitle: sync('pageTitle'),
        },
        methods: {
            isRoute(name) {
                return name === this.$page.route.name;
            },
            dropdownClickout() {
                this.dropdownOpen = false;
            },
        },
    };
</script>
