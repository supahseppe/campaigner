<template>
    <inertia-link
        v-if="href"
        :href="href"
        class="text-sm font-normal font-sans bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
    >
        <slot />
    </inertia-link>
    <button
        v-else
        class="text-sm font-normal font-sans bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
    >
        <slot />
    </button>
</template>

<script>
    export default {
        name: 'Btn',
        components: {},
        props: {
            href: {
                type: String,
                default: '',
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
