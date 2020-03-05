<template>
    <div>
        <label
            v-if="label"
            :for="id"
            class="block text-sm font-medium leading-5 text-gray-700"
        >
            {{ label }}
        </label>
        <div class="mt-1 relative rounded-md shadow-sm">
            <input
                :id="id"
                ref="input"
                v-bind="$attrs"
                class="form-input block w-full sm:text-sm sm:leading-5"
                :class="{
                    'pr-10 border-red-300 text-red-900 focus:border-red-300 focus:shadow-outline-red':
                        errors.length,
                }"
                :type="type"
                :value="value"
                @input="$emit('input', $event.target.value)"
            />
            <div
                v-if="errors.length"
                class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
            >
                <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clip-rule="evenodd"
                    />
                </svg>
            </div>
        </div>
        <p v-if="errors.length" class="mt-2 text-sm text-red-600">{{ errors[0] }}</p>
    </div>
</template>

<script>
    export default {
        name: 'TextInput',
        components: {},
        inheritAttrs: false,
        props: {
            id: {
                type: String,
                default() {
                    return `text-input-${this._uid}`;
                },
            },
            type: {
                type: String,
                default: 'text',
            },
            value: String,
            label: String,
            errors: {
                type: Array,
                default: () => [],
            },
        },
        data() {
            return {};
        },
        computed: {},
        watch: {},
        created() {},
        mounted() {},
        methods: {
            focus() {
                this.$refs.input.focus();
            },
            select() {
                this.$refs.input.select();
            },
            setSelectionRange(start, end) {
                this.$refs.input.setSelectionRange(start, end);
            },
        },
    };
</script>
