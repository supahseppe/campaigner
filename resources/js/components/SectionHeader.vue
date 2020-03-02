<template>
    <div class="py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between">
        <div class="flex-1 min-w-0">
            <h2
                class="text-2xl font-bold leading-7 text-white sm:text-3xl sm:leading-9 sm:truncate"
            >
                <slot />
            </h2>
        </div>
        <div class="mt-4 flex md:mt-0 md:ml-4">
            <slot name="aside" />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PageHeader',
        components: {},
        props: {},
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
