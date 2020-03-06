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
            <p v-if="suggestion.item.name">{{ suggestion.item.name }}</p>
            <p v-else-if="suggestion.item.username">
                {{ suggestion.item.username }}
            </p>
            <p v-else>{{ suggestion.item.title }}</p>
        </template>
    </vue-autosuggest>
</template>

<script>
    import { VueAutosuggest } from 'vue-autosuggest';

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
                default: 'title',
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
                    id: 'autosuggest__input',
                    placeholder: 'Search for something!',
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
                        },
                    },
                },
            };
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

<style>
    .autosuggest__results-container {
        @apply .rounded-md .bg-white .shadow-xs;
    }

    .autosuggest__results-container ul {
        @apply .py-1;
    }

    .autosuggest__results-container li {
        @apply .block .px-4 .py-2 .text-sm .leading-5 .text-gray-700;
    }

    .autosuggest__results-container li:hover {
        @apply .bg-gray-100 .text-gray-900;
    }

    .autosuggest__results-container li:focus {
        @apply .outline-none .bg-gray-100 .text-gray-900;
    }
</style>
