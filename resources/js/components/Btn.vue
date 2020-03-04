<template>
    <span v-if="href" class="inline-flex rounded-md shadow-sm">
        <inertia-link :href="href" :class="classes" v-on="$listeners">
            <slot />
        </inertia-link>
    </span>
    <span v-else class="inline-flex rounded-md shadow-sm">
        <button type="button" :class="classes" v-on="$listeners">
            <slot />
        </button>
    </span>
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
            color: {
                type: String,
                default: 'indigo',
            },
        },
        data() {
            return {};
        },
        computed: {
            classes() {
                return [
                    'inline-flex',
                    'items-center',
                    'px-4',
                    'py-2',
                    'border',
                    'border-transparent',
                    'text-base',
                    'leading-6',
                    'font-medium',
                    'rounded-md',
                    'text-white',
                    `bg-${this.color}-600`,
                    `hover:bg-${this.color}-500`,
                    'focus:outline-none',
                    `focus:border-${this.color}-700`,
                    `focus:shadow-outline-${this.color}`,
                    `active:bg-${this.color}-700`,
                    'transition',
                    'ease-in-out',
                    'duration-150',
                ];
            },
        },
        watch: {},
        created() {},
        mounted() {},
        methods: {},
    };
</script>
