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
            wide: {
                type: Boolean,
                default: false,
            }
        },
        data() {
            return {};
        },
        computed: {
            classes() {
                let base = [
                    'inline-flex',
                    'items-center',
                    'justify-center',
                    'px-4',
                    'py-2',
                    'border',
                    'border-transparent',
                    'text-sm',
                    'leading-5',
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

                if (this.wide) {
                    base.push('w-full');
                }

                return base;
            },
        },
        watch: {},
        created() {},
        mounted() {},
        methods: {},
    };
</script>
