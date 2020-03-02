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
            <div v-if="suggestion.name">{{ suggestion.name }}</div>
            <div v-else>{{ suggestion.title }}</div>
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
                    placeholder: 'Search for a location',
                    class: 'form-control',
                    name: 'hello',
                },
                suggestions: [],
                sectionConfigs: {
                    default: {
                        limit: 6,
                        label: 'Locations',
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
                const url = `${this.baseUrl}/${this.model}?q=${this.query}`;
                axios.get(url).then(response => {
                    if (response.data.length) {
                        this.suggestions = [response];
                    }
                });
            }, 250),
            getSuggestionValue(suggestion) {
                return suggestion.id;
            },
        },
    };
</script>
