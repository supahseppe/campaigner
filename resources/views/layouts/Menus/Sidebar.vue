<template>
    <div
        class="z-30 fixed inset-y-0 left-0 w-64 bg-gray-100 border-r overflow-y-auto sm:static sm:block sm:translate-x-0 sm:transition-none -translate-x-full ease-in transition-medium"
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
        <nav class="mt-16 sm:mt-0">
            <div class="px-6 sm:hidden">
                <a href="#" class="block py-1  text-sm font-medium text-gray-900">
                    Mailbox
                </a>
                <a href="#" class="mt-2 block py-1  text-sm font-medium text-gray-900">
                    Customers
                </a>
                <a href="#" class="mt-2 block py-1  text-sm font-medium text-gray-900">
                    Reporting
                </a>
                <a href="#" class="mt-2 block py-1  text-sm font-medium text-gray-900">
                    Manage
                </a>
            </div>
            <div class="mt-4 px-6">
                <nav id="nav" class="relative">
                    <span
                        class="absolute h-10 w-full bg-gray-200 rounded-lg shadow ease-out transition-transform transition-medium border-b border-r border-gray-400"
                        :style="{
                            transform: `translateY(calc(100% * ${selected}))`,
                        }"
                    ></span>
                    <ul class="relative">
                        <models-nav>
                            <template v-slot="{ pages }">
                                <div>
                                    <li v-for="(page, i) in pages" :key="i">
                                        <inertia-link
                                            :aria-selected="selected === i"
                                            :href="route(page.route)"
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
                                </div>
                            </template>
                        </models-nav>
                    </ul>
                </nav>
                <h2
                    class="mt-8 text-xs font-semibold text-gray-600 uppercase tracking-wide"
                >
                    Folders
                </h2>
                <div class="mt-4">
                    <a href="#" class="block text-sm font-medium text-gray-700">
                        Refunds
                    </a>
                    <a href="#" class="mt-4 block text-sm font-medium text-gray-700">
                        Discounts
                    </a>
                    <a href="#" class="mt-4 block text-sm font-medium text-gray-700">
                        Bugs
                    </a>
                </div>
            </div>
            <div class="mt-8 p-6 border-t sm:hidden">
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
        </nav>
    </div>
</template>

<script>
    import Avatar from 'vue-avatar';
    import ModelsNav from '_Layouts/Menus/ModelsNav';
    import Icon from '_Components/Icon';

    export default {
        name: 'Sidebar',
        components: {
            Avatar,
            Icon,
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
