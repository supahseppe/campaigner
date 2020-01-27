<script>
    export default {
        name: 'ModelsNav',
        components: {},
        props: {},
        data() {
            return {
                pages: [
                    {
                        label: 'Campaigns',
                        route: 'campaigns.index',
                        icon: 'globe-model',
                    },
                    {
                        label: 'Characters',
                        route: 'characters.index',
                        icon: 'account-multiple-outline',
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
