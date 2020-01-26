<template>
    <div class="max-w-sm w-full lg:max-w-full lg:flex">
        <div
            v-if="img"
            class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            :style="`background-image: url('${img}')`"
            :title="alt"
        ></div>
        <div :class="borders">
            <div class="mb-8">
                <div class="text-gray-900 font-bold text-xl mb-2">
                    <slot name="title" />
                </div>
                <div class="text-gray-700 text-base">
                    <slot />
                </div>
            </div>
            <template v-if="user">
                <div class="flex items-center">
                    <img
                        class="w-10 h-10 rounded-full mr-4"
                        :src="user.avatar"
                        :alt="`Avatar of ${user.username}`"
                    />
                    <div class="text-sm">
                        <p class="text-gray-900 leading-none">{{ user.username }}</p>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HorizontalCard',
        components: {},
        props: {
            img: {
                type: String,
                default: null,
            },
            alt: {
                type: String,
                default: null,
            },
            user: {
                type: Object,
                default: null,
            },
        },
        data() {
            return {};
        },
        computed: {
            borders() {
                let classes = [
                    'border-r',
                    'border-b',
                    'border-l',
                    'border-gray-400',
                    'lg:border-t',
                    'lg:border-gray-400',
                    'bg-white',
                    'rounded-b',
                    'lg:rounded-b-none',
                    'lg:rounded-r',
                    'p-4',
                    'flex',
                    'flex-col',
                    'justify-between',
                    'leading-normal',
                ];
                if (this.user) {
                    classes.push('lg:border-l-0');
                }
                return classes;
            },
        },
        watch: {},
        created() {},
        mounted() {},
        methods: {},
    };
</script>
