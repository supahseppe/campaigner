<template>
    <div>
        <label v-if="label" :for="id" class="block text-sm font-medium leading-5 text-gray-700">{{ label }}</label>
        <div class="mt-1 relative rounded-md shadow-sm">
            <input
                id="email"
                class="form-input block w-full sm:text-sm sm:leading-5"
                placeholder="you@example.com"
            />
        </div>
        <input
            :id="id"
            ref="input"
            v-bind="$attrs"
            class="form-input"
            :class="{ error: errors.length }"
            :type="type"
            :value="value"
            @input="$emit('input', $event.target.value)"
        />
        <div v-if="errors.length" class="form-error">
            <p>{{ errors[0] }}</p>
        </div>
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
        computed: {
            styles() {
                return {
                    root: '',
                    fieldset: '',
                    label: 'text-xs text-grey',
                    text: '',
                    input:
                        'bg-transparent border-b m-auto block border-grey w-full mb-6 text-grey pb-1',
                    description: '',
                };
            },
        },
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
