<template>
    <div>
        <label v-if="label" class="form-label" :for="id">{{ label }}:</label>
        <v-autocomplete
            :url="`/api/autocomplete/${model}`"
            anchor="name"
            :label="label"
            :min="3"
            :on-select="getData"
        />
        <div v-if="errors.length" class="form-error">
            <p>{{ errors[0] }}</p>
        </div>
    </div>
</template>

<script>
    import Autocomplete from 'vue2-autocomplete-js';

    export default {
        name: 'AutoComplete',
        components: {
            'v-autocomplete': Autocomplete,
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
            label: {
                type: String,
                default: '',
            },
            errors: {
                type: Array,
                default: () => [],
            },
            items: {
                type: Array,
                default: null,
            },
            model: {
                type: String,
                default: null,
            },
        },
        data() {
            return {
                value: '',
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
            this.$on('input', function(input) {
                this.value = input;
            });
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
            getData(obj) {
                this.$emit('input', obj.id);
            }
        },
    };
</script>

<style lang="css" scoped>
    .transition,
    .autocomplete,
    .showAll-transition,
    .autocomplete ul,
    .autocomplete ul li a {
        transition: all 0.3s ease-out;
        -moz-transition: all 0.3s ease-out;
        -webkit-transition: all 0.3s ease-out;
        -o-transition: all 0.3s ease-out;
    }

    .autocomplete ul {
        font-family: sans-serif;
        position: absolute;
        list-style: none;
        background: #f8f8f8;
        padding: 10px 0;
        margin: 0;
        display: inline-block;
        min-width: 15%;
        margin-top: 10px;
    }

    .autocomplete ul:before {
        content: '';
        display: block;
        position: absolute;
        height: 0;
        width: 0;
        border: 10px solid transparent;
        border-bottom: 10px solid #f8f8f8;
        left: 46%;
        top: -20px;
    }

    .autocomplete ul li a {
        text-decoration: none;
        display: block;
        background: #f8f8f8;
        color: #2b2b2b;
        padding: 5px;
        padding-left: 10px;
    }

    .autocomplete ul li a:hover,
    .autocomplete ul li.focus-list a {
        color: white;
        background: #2f9af7;
    }

    .autocomplete ul li a span, /*backwards compat*/
    .autocomplete ul li a .autocomplete-anchor-label {
        display: block;
        margin-top: 3px;
        color: grey;
        font-size: 13px;
    }

    .autocomplete ul li a:hover .autocomplete-anchor-label,
    .autocomplete ul li.focus-list a span, /*backwards compat*/
    .autocomplete ul li a:hover .autocomplete-anchor-label,
    .autocomplete ul li.focus-list a span {
        color: white;
    }
</style>
