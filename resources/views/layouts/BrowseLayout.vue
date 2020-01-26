<template>
    <section class="h-screen container">
        <section-header>
            <h1>Your {{ capitalize(models) }}</h1>
            <template #aside>
                <btn :href="route(`${models}.create`)">
                    Create new {{ capitalize(model) }}
                </btn>
            </template>
        </section-header>
        <div class="p-4">
            <slot />
        </div>
    </section>
</template>

<script>
    import SectionHeader from '_Components/SectionHeader';
    import Btn from '_Components/Btn';

    export default {
        name: 'BrowseLayout',
        components: {
            SectionHeader,
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
