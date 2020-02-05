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
                        icon: 'group',
                    },
                    {
                        label: 'NPCs',
                        route: 'npcs.index',
                        icon: 'drama-masks',
                    },
                    {
                        label: 'Locations',
                        route: 'locations.index',
                        icon: 'mountains',
                    },
                    {
                        label: 'Tasks',
                        route: 'locations.index',
                        icon: 'tools',
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
