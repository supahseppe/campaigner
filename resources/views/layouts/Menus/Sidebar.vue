<template>
    <div class="hidden md:flex md:flex-shrink-0">
        <div class="flex flex-col w-64 bg-gray-800">
            <div class="h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div class="flex items-center flex-shrink-0 px-4">
                    <inertia-link :href="route('page.welcome')">
                        <logo text-color="white" icon-color="indigo-400" size="lg" />
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
                                        'cursor-not-allowed pointer-events-none opacity-75': !$page
                                            .auth.user.campaign,
                                    }"
                                >
                                    <icon :icon="link.icon" color="white" class="mr-4" />
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
            </div>
        </div>
    </div>
</template>

<script>
    import SidebarMenuProvider from '_Layouts/Menus/SidebarMenuProvider';
    import Icon from '_Components/Icon';
    import Logo from '_Components/Logo';

    export default {
        name: 'Sidebar',
        components: {
            Logo,
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
