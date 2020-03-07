<template>
    <component
        :is="icon"
        :title="title"
        :fill-color="hex"
        :size="size"
        :decorative="decorative"
    />
</template>

<script>
    import Plus from '_Icons/Plus';
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
    import CloseCircle from '_Icons/CloseCircle';
    import GlobeModel from '_Icons/GlobeModel';
    import DramaMasks from '_Icons/DramaMasks';
    import GuyFawkesMask from '_Icons/GuyFawkesMask';
    import AccountMultipleOutline from '_Icons/AccountMultipleOutline';
    import ImageFilterHdr from '_Icons/ImageFilterHdr';
    import Home from '_Icons/Home';
    import HomeGroup from '_Icons/HomeGroup';
    import AccountGroup from '_Icons/AccountGroup';
    import Tools from '_Icons/Tools';
    import Google from '_Icons/Google';
    import Facebook from '_Icons/Facebook';
    import Twitter from '_Icons/Twitter';
    import Email from '_Icons/Email';

    export default {
        name: 'Icon',
        components: {
            Plus,
            Minus,
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
            globe: GlobeModel,
            masks: DramaMasks,
            fawkes: GuyFawkesMask,
            people: AccountMultipleOutline,
            mountains: ImageFilterHdr,
            Home,
            houses: HomeGroup,
            group: AccountGroup,
            Tools,
            Google,
            Facebook,
            Twitter,
            Email,
            'x-circle': CloseCircle,
        },
        props: {
            icon: {
                type: String,
                default: null,
            },
            title: {
                type: String,
                default: null,
            },
            color: {
                type: String,
                default: null,
            },
            size: {
                type: Number,
                default: 24,
            },
            decorative: {
                type: Boolean,
                default: true,
            },
        },
        data() {
            return {};
        },
        computed: {
            hex() {
                if (this.color) {
                    const color = this.color.split('-');
                    return this.$tailwind.theme.colors[color[0]][color[1]];
                }

                return null;
            },
        },
        watch: {},
        created() {},
        mounted() {},
        methods: {},
    };
</script>
