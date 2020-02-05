<script>
    export default {
        name: 'ModelsNav',
        components: {},
        props: {},
        data() {
            return {
                pages: [
                    {
                        label: 'Factions',
                        route: 'factions.index',
                        icon: 'drama-masks',
                    },
                    {
                        label: 'Locations',
                        route: 'locations.index',
                        icon: 'drama-masks',
                    },
                    {
                        label: 'NPCs',
                        route: 'npcs.index',
                        icon: 'drama-masks',
                    },
                ],
            };
        },
        computed: {},
        watch: {},
        created() {},
        mounted() {},
        methods: {},
        render() {
            return this.$scopedSlots.default({
                pages: this.pages,
            });
        },
    };
</script>
