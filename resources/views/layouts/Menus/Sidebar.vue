<template>
    <div class="hidden md:flex md:flex-shrink-0">
        <div class="flex flex-col w-64 bg-gray-800">
            <div class="h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                <div class="flex items-center flex-shrink-0 px-4">
                    <img
                        class="h-8 w-auto"
                        src="/img/workflow-logo-on-dark.svg"
                        alt="Workflow"
                    />
                </div>
                <sidebar-menu-provider>
                    <template #default="{ links }">
                        <nav class="mt-5 flex-1 px-2 bg-gray-800">
                            <div class="mb-4 px-2">
                                <p class="text-xs text-gray-400">Selected Campaign:</p>
                                <p class="text-sm text-gray-300">
                                    {{ $page.auth.user.campaign.title }}
                                </p>
                            </div>
                            <inertia-link
                                v-for="(link, i) in links"
                                :key="i"
                                :href="link.url"
                                class="group flex items-center px-2 py-2 text-sm leading-5 font-medium text-white rounded-md focus:outline-none focus:bg-gray-700 transition ease-in-out duration-150"
                                :class="{
                                    'bg-gray-900': isRoute(link.route),
                                }"
                            >
                                <icon :icon="link.icon" color="white" class="mr-4" />
                                {{ link.label }}
                            </inertia-link>
                        </nav>
                    </template>
                </sidebar-menu-provider>
            </div>
            <div class="flex-shrink-0 flex bg-gray-700 p-4">
                <a href="#" class="flex-shrink-0 group block focus:outline-none">
                    <div class="flex items-center">
                        <div>
                            <img
                                class="inline-block h-9 w-9 rounded-full"
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                            />
                        </div>
                        <div class="ml-3">
                            <p class="text-sm leading-5 font-medium text-white">
                                Tom Cook
                            </p>
                            <p
                                class="text-xs leading-4 font-medium text-gray-400 group-hover:text-gray-300 group-focus:underline transition ease-in-out duration-150"
                            >
                                View profile
                            </p>
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
