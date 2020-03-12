<template>
    <div class="w-full">
        <p v-if="label" class="form-label">{{ label }}</p>
        <editor-menu-bar v-slot="{ commands, isActive }" :editor="editor">
            <div class="text-black flex items-center justify-start">
                <div class="mr-1 md:mr-2">
                    <button
                        :class="{ 'is-active': isActive.bold() }"
                        @click="commands.bold"
                    >
                        <icon icon="bold" />
                    </button>
                    <button
                        :class="{ 'is-active': isActive.italic() }"
                        @click="commands.italic"
                    >
                        <icon icon="italic" />
                    </button>
                </div>
                <div class="mr-1 md:mr-2">
                    <button
                        type="button"
                        :class="{ 'is-active': isActive.bullet_list() }"
                        @click="commands.bullet_list"
                    >
                        <icon icon="bullets" />
                    </button>
                    <button
                        type="button"
                        :class="{ 'is-active': isActive.ordered_list() }"
                        @click="commands.ordered_list"
                    >
                        <icon icon="numbered" />
                    </button>
                </div>
                <div class="mr-1 md:mr-2">
                    <button
                        type="button"
                        :class="{ 'is-active': isActive.heading({ level: 1 }) }"
                        @click="commands.heading({ level: 1 })"
                    >
                        <icon icon="heading1" />
                    </button>
                    <button
                        type="button"
                        :class="{ 'is-active': isActive.heading({ level: 2 }) }"
                        @click="commands.heading({ level: 2 })"
                    >
                        <icon icon="heading2" />
                    </button>
                    <button
                        type="button"
                        :class="{ 'is-active': isActive.heading({ level: 3 }) }"
                        @click="commands.heading({ level: 3 })"
                    >
                        <icon icon="heading3" />
                    </button>
                    <button
                        type="button"
                        :class="{ 'is-active': isActive.heading({ level: 4 }) }"
                        @click="commands.heading({ level: 4 })"
                    >
                        <icon icon="heading4" />
                    </button>
                </div>
                <div class="mr-1 md:mr-2">
                    <button
                        :class="{ 'is-active': isActive.link() }"
                        @click="commands.link"
                    >
                        <icon icon="link" />
                    </button>
                    <button class="menubar__button" @click="commands.horizontal_rule">
                        <icon icon="minus" />
                    </button>
                </div>
                <div class="ml-auto">
                    <button type="button" @click="commands.undo">
                        <icon icon="undo" />
                    </button>
                    <button type="button" @click="commands.redo">
                        <icon icon="redo" />
                    </button>
                </div>
            </div>
        </editor-menu-bar>
        <vue-tribute :options="tributeOptions">
            <editor-content :editor="editor" />
        </vue-tribute>
    </div>
</template>

<script>
    import { Editor, EditorContent, EditorMenuBar } from 'tiptap';
    import {
        Bold,
        BulletList,
        Heading,
        History,
        HorizontalRule,
        Italic,
        Link,
        ListItem,
        OrderedList,
    } from 'tiptap-extensions';
    import Icon from '../Icon';
    import VueTribute from 'vue-tribute';

    export default {
        name: 'Wysiwyg',
        components: {
            EditorContent,
            EditorMenuBar,
            Icon,
            VueTribute,
        },
        props: ['value', 'label', 'rows'],
        data() {
            return {
                tributeOptions: {
                    // symbol or string that starts the lookup
                    trigger: '@',

                    // element to target for @mentions
                    iframe: null,

                    // class added in the flyout menu for active item
                    selectClass: 'highlight',

                    // class added to the menu container
                    containerClass: 'tribute-container',

                    // class added to each list item
                    itemClass: '',

                    // function called on select that returns the content to insert
                    selectTemplate: function(item) {
                        return '@' + item.original.value;
                    },

                    // template for displaying item in menu
                    menuItemTemplate: function(item) {
                        return item.string;
                    },

                    // template for when no match is found (optional),
                    // If no template is provided, menu is hidden.
                    noMatchTemplate: null,

                    // specify an alternative parent container for the menu
                    // container must be a positioned element for the menu to appear correctly ie. `position: relative;`
                    // default container is the body
                    menuContainer: document.body,

                    // column to search against in the object (accepts function or string)
                    lookup: 'key',

                    // column that contains the content to insert by default
                    fillAttr: 'value',

                    // REQUIRED: array of objects to match
                    values: function(text, cb) {
                        getSuggestions(text, suggestions => cb(suggestions));
                    },

                    // specify whether a space is required before the trigger string
                    requireLeadingSpace: true,

                    // specify whether a space is allowed in the middle of mentions
                    allowSpaces: false,

                    // optionally specify a custom suffix for the replace text
                    // (defaults to empty space if undefined)
                    replaceTextSuffix: '\n',

                    // specify whether the menu should be positioned.  Set to false and use in conjuction with menuContainer to create an inline menu
                    // (defaults to true)
                    positionMenu: true,

                    // when the spacebar is hit, select the current match
                    spaceSelectsMatch: false,

                    // turn tribute into an autocomplete
                    autocompleteMode: false,

                    // Customize the elements used to wrap matched strings within the results list
                    // defaults to <span></span> if undefined
                    searchOpts: {
                        pre: '<span>',
                        post: '</span>',
                        skip: false, // true will skip local search, useful if doing server-side search
                    },

                    // specify the minimum number of characters that must be typed before menu appears
                    menuShowMinLength: 0,
                },
                editor: new Editor({
                    content: this.value,
                    extensions: [
                        new Bold(),
                        new Italic(),
                        new Link(),
                        new Heading({
                            levels: [1, 2, 3, 4],
                        }),
                        new History(),
                        new HorizontalRule(),
                        new ListItem(),
                        new BulletList(),
                        new OrderedList(),
                    ],
                    onUpdate: ({ getJSON, getHTML }) => {
                        this.json = getJSON();
                        this.html = getHTML();
                        this.updateData();
                    },
                }),
                json: '',
                html: '',
            };
        },
        computed: {},
        watch: {},
        created() {},
        mounted() {},
        beforeDestroy() {
            this.editor.destroy();
        },
        methods: {
            updateData() {
                this.$emit('input', this.html);
            },
            getSuggestions(text, cb) {
                axios.post('')
            }
        },
    };
</script>
