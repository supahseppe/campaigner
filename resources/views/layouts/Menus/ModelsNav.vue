<script>
    export default {
        name: 'ModelsNav',
        components: {},
        props: {},
        data() {
            return {
                pages: [
                    {
                        label: 'Characters',
                        route: 'characters.in_campaign',
                        routeParams: {
                            campaign: this.$page.auth.user.campaign.slug,
                        },
                        icon: 'group',
                    },
                    {
                        label: 'Factions',
                        route: 'factions.index',
                        routeParams: {},
                        icon: 'group',
                    },
                    {
                        label: 'NPCs',
                        route: 'npcs.in_campaign',
                        routeParams: {
                            campaign: this.$page.auth.user.campaign.slug,
                        },
                        icon: 'drama-masks',
                    },
                    {
                        label: 'Locations',
                        route: 'locations.index',
                        routeParams: {},
                        icon: 'mountains',
                    },
                    {
                        label: 'Tasks',
                        route: 'locations.index',
                        routeParams: {},
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
