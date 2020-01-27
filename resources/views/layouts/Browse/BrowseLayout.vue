<template>
    <section class="h-full">
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
        <div class="px-4 py-2 flex items-center border-b bg-gray-200">
            <button class="flex items-center text-xs font-semibold text-gray-600">
                Sorted by Date
                <svg viewBox="0 0 24 24" class="ml-1 h-6 w-6 fill-current text-gray-500">
                    <path
                        d="M7.293 9.293a1 1 0 011.414 0L12 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    ></path>
                </svg>
            </button>
            <button>
                <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current text-gray-500">
                    <path
                        d="M16 3H3a1 1 0 000 2h13a1 1 0 100-2zm-4 4H3a1 1 0 000 2h9a1 1 0 100-2zm-9 4h6a1 1 0 110 2H3a1 1 0 110-2zm9.293.293l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L18 10.414V20a1 1 0 11-2 0v-9.586l-2.293 2.293a1 1 0 01-1.414-1.414z"
                    ></path>
                </svg>
            </button>
        </div>
        <div
            class="flex items-start justify-start w-full h-full border-b bg-gray-300 p-4"
        >
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
            title: {
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
