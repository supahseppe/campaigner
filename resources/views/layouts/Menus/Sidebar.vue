<template>
    <div
        class="z-30 fixed inset-y-0 left-0 w-64 sm:w-auto bg-gray-100 border-r overflow-y-auto sm:static sm:block sm:translate-x-0 sm:transition-none -translate-x-full ease-in transition-medium flex-none"
    >
        <div class="absolute top-0 left-0 pl-4 pt-3 sm:hidden">
            <button class="block text-gray-600 hover:text-gray-800">
                <svg viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6">
                    <path
                        d="M17.293 18.707a1 1 0 001.414-1.414L13.414 12l5.293-5.293a1 1 0 00-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 101.414 1.414L12 13.414l5.293 5.293z"
                    ></path>
                </svg>
            </button>
        </div>
        <div class="flex flex-col h-full">
            <div class="mt-12 sm:mt-4 px-6">
                <h2 class="text-lg font-bold">
                    <template v-if="$page.auth.user">
                        {{ $page.auth.user.campaign.title }}
                    </template>
                </h2>
                <hr class="border border-b mt-3 mb-3" />
            </div>
            <div class="px-6">
                <nav id="nav" class="relative">
                    <span
                        class="absolute h-10 w-full bg-gray-200 rounded-lg shadow ease-out transition-transform transition-medium border-b border-r border-gray-400"
                        :style="{
                            transform: `translateY(calc(100% * ${selected}))`,
                        }"
                    ></span>
                    <div class="relative">
                        <models-nav>
                            <template v-slot="{ pages }">
                                <ul>
                                    <li v-for="(page, i) in pages" :key="i">
                                        <inertia-link
                                            :aria-selected="selected === i"
                                            :href="route(page.route, page.routeParams)"
                                            class="h-10 py-2 px-3 w-full flex items-center focus:outline-none focus-visible:underline"
                                            @click="select(i)"
                                        >
                                            <icon
                                                :icon="page.icon"
                                                :color="
                                                    selected === i
                                                        ? 'indigo-600'
                                                        : 'gray-700'
                                                "
                                            />
                                            <p
                                                :class="
                                                    selected === i
                                                        ? 'text-indigo-600'
                                                        : 'text-gray-700'
                                                "
                                                class="ml-2 text-sm font-medium transition-all ease-out transition-medium"
                                            >
                                                {{ page.label }}
                                            </p>
                                        </inertia-link>
                                    </li>
                                </ul>
                            </template>
                        </models-nav>
                    </div>
                </nav>
            </div>
            <pages-nav>
                <template v-slot="{ pages }">
                    <nav class="px-4 sm:hidden">
                        <hr class="border border-b my-3" />
                        <inertia-link
                            v-for="(page, i) in pages"
                            :href="route(page.route)"
                            :key="i"
                            class="h-10 py-2 px-3 w-full flex items-center focus:outline-none focus-visible:underline"
                        >
                            <p class="text-sm font-medium">
                                {{ page.label }}
                            </p>
                        </inertia-link>
                    </nav>
                </template>
            </pages-nav>
            <div class="mt-auto p-6 border-t sm:hidden">
                <div class="flex items-center w-full">
                    <img
                        v-if="$page.auth.user.avatar"
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=144&amp;h=144&amp;q=80"
                        alt=""
                        class="h-8 w-8 rounded-full object-cover"
                    />
                    <avatar
                        v-else
                        :username="$page.auth.user.username || $page.auth.user.email"
                        :size="32"
                        class="flex-none w-8 h-8"
                    ></avatar>
                    <p class="text-gray-800 ml-4 mr-2 text-sm font-medium text-white">
                        {{ $page.auth.user.username || $page.auth.user.email }}
                    </p>
                </div>
                <div class="mt-4">
                    <a href="#" class="block text-sm font-medium text-gray-700">
                        Settings
                    </a>
                    <a href="#" class="mt-4 block text-sm font-medium text-gray-700">
                        Log out
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Avatar from 'vue-avatar';
    import ModelsNav from '_Layouts/Menus/ModelsNav';
    import PagesNav from '_Layouts/Menus/PagesNav';
    import Icon from '_Components/Icon';

    export default {
        name: 'Sidebar',
        components: {
            Avatar,
            Icon,
            PagesNav,
            ModelsNav,
        },
        data() {
            return {
                isOpen: false,
                selected: 0,
            };
        },
        methods: {
            select(i) {
                this.selected = i;
            },
        },
    };
</script>
