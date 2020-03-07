<template>
    <div class="sm:border-t sm:border-gray-200 sm:py-3 last:border-b">
        <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start">
            <label
                :for="`username-${field.index}`"
                class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
            >
                Username
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2 flex items-center">
                <div class="rounded-md shadow-sm flex-grow">
                    <auto-complete
                        :id="`username-${field.index}`"
                        :default-data="field.label"
                        :model="model"
                        :placeholder="`Search for a ${model}`"
                        :field="searchField"
                        @autocomplete-select="itemSelect"
                    />
                </div>
                <button class="ml-2 w-5" @click.stop.prevent="removeItem(field.index)">
                    <icon v-if="field.label || display" icon="x-circle" color="red-500" />
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import AutoComplete from '_Inputs/AutoComplete';
    import Icon from '_Components/Icon';
    import Btn from '_Components/Btn';
    export default {
        name: 'AutoCompleteSection',
        components: { Btn, Icon, AutoComplete },
        props: {
            field: {
                type: Object,
                default: null,
                required: true,
            },
            model: {
                type: String,
                default: null,
                required: true,
            },
            searchField: {
                type: String,
                default: 'name',
            },
        },
        data() {
            return {
                display: null,
            };
        },
        computed: {},
        watch: {},
        created() {},
        mounted() {},
        methods: {
            removeItem(index) {
                this.$emit('remove-section', index);
            },
            itemSelect(selected) {
                this.display = selected[this.searchField];
                this.$emit('item-select', selected);
            },
        },
    };
</script>
