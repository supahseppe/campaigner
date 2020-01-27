<script>
    export default {
        name: 'PagesNav',
        components: {},
        props: {},
        data() {
            return {
                pages: [
                    {
                        label: 'Homepage',
                        route: 'page.welcome',
                    },
                    {
                        label: 'Dashboard',
                        route: 'page.welcome',
                    },
                    {
                        label: 'About',
                        route: 'page.about',
                    },
                    {
                        label: 'Contact',
                        route: 'page.contact',
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
