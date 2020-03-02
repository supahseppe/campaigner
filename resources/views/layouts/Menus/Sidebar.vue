<template>
    <div class="hidden md:flex md:flex-shrink-0">
        <div class="flex flex-col w-64 bg-gray-800">
            <div class="h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div class="flex items-center flex-shrink-0 px-4">
                    <inertia-link :href="route('page.welcome')">
                        <img
                            class="h-8 w-auto"
                            src="/img/workflow-logo-on-dark.svg"
                            alt="Workflow"
                        />
                    </inertia-link>
                </div>
                <sidebar-menu-provider>
                    <template #default="{ links }">
                        <nav class="mt-5 flex-1 px-2 bg-gray-800">
                            <div v-for="(link, i) in links" :key="i">
                                <inertia-link
                                    :href="link.url"
                                    class="group flex items-center px-2 py-2 text-sm leading-5 font-medium text-white rounded-md focus:outline-none focus:bg-gray-700 transition ease-in-out duration-150"
                                    :class="{
                                        'bg-gray-900': isRoute(link.route),
                                    }"
                                >
                                    <icon :icon="link.icon" color="white" class="mr-4" />
                                    {{ link.label }}
                                </inertia-link>
                                <div v-if="i === 0" class="my-3 px-2">
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
            </div>
            <div class="flex-shrink-0 flex bg-gray-700 p-4">
                <a href="#" class="flex-shrink-0 group block focus:outline-none">
                    <div class="flex items-center">
                        <div>
                            <span
                                class="inline-block h-9 w-9 rounded-full overflow-hidden bg-gray-100"
                            >
                                <svg
                                    class="h-full w-full text-gray-300"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                                    />
                                </svg>
                            </span>
                        </div>
                        <div class="ml-3">
                            <p class="text-sm leading-5 font-medium text-white">
                                <template v-if="$page.auth.user.username">
                                    {{ $page.auth.user.username }}
                                </template>
                                <template v-else>{{ $page.auth.user.email }}</template>
                            </p>
                            <inertia-link
                                href="/"
                                class="text-xs leading-4 font-medium text-gray-400 group-hover:text-gray-300 group-focus:underline transition ease-in-out duration-150"
                            >
                                View profile
                            </inertia-link>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    import SidebarMenuProvider from '_Layouts/Menus/SidebarMenuProvider';
    import Icon from '_Components/Icon';

    export default {
        name: 'Sidebar',
        components: {
            SidebarMenuProvider,
            Icon,
        },
        data() {
            return {
                isOpen: false,
                selected: 0,
            };
        },
        methods: {
            isRoute(name) {
                return name === this.$page.route.name;
            },
        },
    };
</script>
