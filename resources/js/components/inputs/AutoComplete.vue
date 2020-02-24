<template>
    <div>
        <label v-if="label" class="form-label" :for="id">{{ label }}:</label>
        <vue-tribute :options="tributeOptions">
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
        </vue-tribute>
        <div v-if="errors.length" class="form-error">
            <p>{{ errors[0] }}</p>
        </div>
    </div>
</template>

<script>
    import VueTribute from 'vue-tribute';

    export default {
        name: 'AutoComplete',
        components: {
            VueTribute,
        },
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
            value: {
                type: String,
                default: '',
            },
            label: {
                type: String,
                default: '',
            },
            errors: {
                type: Array,
                default: null,
            },
            items: {
                type: Array,
                default: null,
            },
        },
        data() {
            return {
                tributeOptions: {
                    values: [],
                },
            };
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
        mounted() {
            this.tributeOptions.values = this.items;
        },
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
