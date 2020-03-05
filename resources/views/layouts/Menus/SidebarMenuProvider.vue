<script>
    export default {
        name: 'SidebarMenuProvider',
        data: function() {
            return {
                items: [
                    {
                        label: 'Dashboard',
                        url: null,
                        route: 'home',
                        route_params: {
                            campaign: this.$page.auth.user.campaign.slug,
                        },
                        icon: 'home',
                    },
                    {
                        label: 'Party',
                        url: null,
                        route: 'characters.in_campaign',
                        route_params: {
                            campaign: this.$page.auth.user.campaign.slug,
                        },
                        icon: 'people',
                    },
                    {
                        label: 'NPCs',
                        url: null,
                        route: 'npcs.in_campaign',
                        route_params: {
                            campaign: this.$page.auth.user.campaign.slug,
                        },
                        icon: 'masks',
                    },
                    {
                        label: 'Factions',
                        url: null,
                        route: 'factions.index',
                        route_params: {},
                        icon: 'group',
                    },
                    {
                        label: 'Locations',
                        url: null,
                        route: 'locations.index',
                        route_params: {},
                        icon: 'globe',
                    },
                    {
                        label: 'Tasks',
                        url: null,
                        route: 'tasks.index',
                        route_params: {},
                        icon: 'tools',
                    },
                ],
                links: [],
            };
        },
        mounted() {
            this.process();
        },
        methods: {
            process() {
                const vm = this;
                _.each(vm.items, link => {
                    if (!link.url) {
                        link.url = vm.route(link.route, link.route_params);
                    }
                });

                this.links = this.items;
            },
        },
        render() {
            return this.$scopedSlots.default({
                links: this.links,
            });
        },
    };
</script>
