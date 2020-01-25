<template>
    <section class="h-screen">
        <div class="w-full flex items-center justify-between mb-6">
            <h1 class="text-3xl">Your Characters</h1>
            <inertia-link :href="route('characters.create')">
                Create new Character
            </inertia-link>
        </div>
        <div v-for="character in characters" :key="character.id">
            <card>
                <template v-slot:title>
                    <inertia-link :href="route('characters.show', character.slug)">
                        {{ character.name }}
                    </inertia-link>
                </template>
                <div v-html="character.bio" />
            </card>
        </div>
    </section>
</template>

<script>
    import MainLayout from '_Layouts/MainLayout';
    import CardHorizontal from '_Components/cards/CardHorizontal';

    export default {
        name: 'Browse',
        components: {
            card: CardHorizontal,
        },
        props: {
            pager: {
                type: Object,
                default: () => {},
            },
        },
        data: () => ({
            pageTitle: 'Browsing Characters',
            description: 'Viewing all characters associated with the current user',
        }),
        computed: {
            characters() {
                return this.pager.data;
            },
        },
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
