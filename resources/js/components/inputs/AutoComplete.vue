<template>
    <vue-autosuggest
        ref="autocomplete"
        v-model="query"
        :suggestions="suggestions"
        :input-props="inputProps"
        :section-configs="sectionConfigs"
        :get-suggestion-value="getSuggestionValue"
        @input="fetchResults"
    >
        <template #default="{ suggestion }">
            <p>{{ suggestion.item[field] }}</p>
        </template>
    </vue-autosuggest>
</template>

<script>
    import { VueAutosuggest } from 'vue-autosuggest';
    const axios = window.axios;

    export default {
        name: 'AutoComplete',
        components: {
            VueAutosuggest,
        },
        props: {
            model: {
                type: String,
                default: null,
                required: true,
            },
            field: {
                type: String,
                default: 'name',
            },
            placeholder: {
                type: String,
                default: 'Search for something!',
            },
            defaultData: {
                type: String,
                default: '',
            },
        },
        data() {
            return {
                query: '',
                results: [],
                timeout: null,
                selected: null,
                baseUrl: '/api/autocomplete',
                inputProps: {
                    id: `autosuggest__input-${this._uid}`,
                    placeholder: this.placeholder,
                    class: 'form-input block w-full sm:text-sm sm:leading-5',
                    name: 'auto-suggest',
                },
                suggestions: [],
                sectionConfigs: {
                    default: {
                        limit: 6,
                        label: '',
                        onSelected: selected => {
                            this.selected = selected.item;
                            this.$emit('autocomplete-select', this.selected);
                        },
                    },
                },
            };
        },
        mounted() {
            this.query = this.defaultData;
        },
        methods: {
            fetchResults: _.debounce(function() {
                this.suggestions = [];
                this.selected = null;
                const url = `${this.baseUrl}/${this.model}?field=${this.field}&q=${this.query}`;
                axios.get(url).then(response => {
                    if (response.data.length) {
                        this.suggestions = [response];
                    }
                });
            }, 250),
            getSuggestionValue(suggestion) {
                return suggestion.item[this.field];
            },
        },
    };
</script>
