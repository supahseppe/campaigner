<template>
    <div class="w-screen h-screen overflow-hidden pointer-events-auto">
        <div @click="closeTakeover" class="w-full h-full bg-black opacity-50"></div>
        <div :class="containerClasses">
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'QuickAccess',
        components: {},
        props: {},
        data() {
            return {};
        },
        computed: {
            containerClasses() {
                let base = [
                    'bg-white shadow',
                    'p-6',
                    'absolute',
                    'right-0',
                    'inset-y-0',
                    'w-percent-80',
                    'md:w-percent-70',
                    'xxl:w-percent-60',
                ];

                return base;
            },
        },
        watch: {},
        created() {},
        mounted() {},
        methods: {
            closeTakeover() {
                console.log("Close damn you");
            }
        },
    };
</script>
