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
                    },
                    {
                        label: 'Characters',
                        route: 'characters.index',
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
