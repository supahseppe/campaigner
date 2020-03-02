<template>
    <div>
        <section-header>
            <h1 v-if="title">{{ title }}</h1>
            <h1 v-else>Your {{ capitalize(models) }}</h1>
            <template #aside>
                <slot name="header-buttons">
                    <btn :href="route(`${models}.create`)">
                        Create new {{ capitalize(model) }}
                    </btn>
                </slot>
                <slot name="extra-header-buttons" />
            </template>
        </section-header>
        <container>
            <slot />
        </container>
        <div class="flex flex-col justify-center h-20">
            <pagination v-if="pagination.length > 3" :links="pagination" />
        </div>
    </div>
</template>

<script>
    import SectionHeader from '_Components/SectionHeader';
    import Pagination from '_Components/Pagination';
    import Btn from '_Components/Btn';
    import Container from '_Layouts/Container';

    export default {
        name: 'BrowseLayout',
        components: {
            Container,
            SectionHeader,
            Pagination,
            Btn,
        },
        props: {
            model: {
                type: String,
                default: 'Model',
            },
            plural: {
                type: String,
                default: null,
            },
            title: {
                type: String,
                default: null,
            },
            pagination: {
                type: Array,
                default: () => [],
            },
        },
        computed: {
            models() {
                if (this.plural) {
                    return this.plural;
                }
                return this.model + 's';
            },
        },
        methods: {
            capitalize(string) {
                let firstLetter = string[0] || string.charAt(0);
                return firstLetter ? firstLetter.toUpperCase() + string.slice(1) : '';
            },
        },
    };
</script>

<style scoped></style>
