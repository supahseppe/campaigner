<template>
    <div>
        <section class="flex items-start justify-between">
            <div>
                <h1 class="text-3xl mb-4">{{ character.name }}</h1>
                <p v-if="character.alias" class="text-xl italic opacity-75 mb-6">
                    {{ character.alias }}
                </p>
            </div>
            <inertia-link
                :href="route('characters.edit', character.slug)"
                class="text-blue-200 font-bold py-2 px-4 bg-indigo-900 rounded"
            >
                Edit
            </inertia-link>
        </section>
    </div>
</template>

<script>
    import MainLayout from '_Layouts/MainLayout';

    export default {
        name: 'Character',
        components: {},
        props: {
            character: {
                type: Object,
                default: () => {},
            },
        },
        data() {
            return {
                pageTitle: `Character: ${this.character.title}`,
                pageDescription: `Viewing the ${this.character.title} character.`,
            };
        },
        computed: {},
        watch: {},
        created() {},
        mounted() {},
        methods: {},
        layout: MainLayout,
        metaInfo() {
            return {
                title: this.pageTitle,
                meta: [
                    {
                        name: 'description',
                        content: this.pageDescription,
                    },
                ],
            };
        },
    };
</script>
