<template>
    <div
        class="bg-grey-800 p-2 shadow text-xl text-white flex items-center justify-between w-full"
    >
        <span class="font-bold pl-2">
            <slot />
        </span>
        <slot name="aside" />
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
