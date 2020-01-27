<template>
    <panel>
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
    </panel>
</template>

<script>
    import Panel from '_Components/cards/Panel';

    export default {
        name: 'HorizontalCard',
        components: {
            Panel,
        },
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
        computed: {},
        watch: {},
        created() {},
        mounted() {},
        methods: {},
    };
</script>
