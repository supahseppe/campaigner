<template>
    <component :is="icon" />
</template>

<script>
    import 'vue-material-design-icons/styles.css';
    import Minus from '_Icons/Minus';
    import FormatBold from '_Icons/FormatBold';
    import FormatItalic from '_Icons/FormatItalic';
    import FormatListBulleted from '_Icons/FormatListBulleted';
    import FormatListNumbered from '_Icons/FormatListNumbered';
    import FormatHeader1 from '_Icons/FormatHeader1';
    import FormatHeader2 from '_Icons/FormatHeader2';
    import FormatHeader3 from '_Icons/FormatHeader3';
    import FormatHeader4 from '_Icons/FormatHeader4';
    import Link from '_Icons/Link';
    import Undo from '_Icons/Undo';
    import Redo from '_Icons/Redo';
    import Delete from '_Icons/Delete';

    export default {
        name: 'Icon',
        components: {
            minus: Minus,
            bold: FormatBold,
            italic: FormatItalic,
            bullets: FormatListBulleted,
            numbered: FormatListNumbered,
            heading1: FormatHeader1,
            heading2: FormatHeader2,
            heading3: FormatHeader3,
            heading4: FormatHeader4,
            Link,
            Undo,
            Redo,
            Delete,
        },
        props: ['title', 'decorative', 'fillColor', 'size', 'icon'],
        data() {
            return {};
        },
        computed: {},
        watch: {},
        created() {},
        mounted() {},
        methods: {},
    };
</script>
