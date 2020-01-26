<template>
    <div class="bg-white border-transparent rounded-lg shadow-lg">
        <div
            v-if="title"
            class="bg-gray-400 border-b-2 border-gray-500 rounded-tl-lg rounded-tr-lg p-2"
        >
            <h5 class="font-bold uppercase text-gray-600">
                {{ title }}
            </h5>
        </div>
        <div class="p-5">
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Card',
        components: {},
        props: {
            title: {
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
