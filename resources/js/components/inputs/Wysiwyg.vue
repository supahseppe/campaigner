<template>
    <div>
        <p v-if="label" class="form-label">{{ label }}</p>
        <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
            <div class="text-black flex items-center justify-start">
                <div class="mr-4">
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
                <div class="mr-4">
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
                <div class="mr-4">
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
                <div class="mr-4">
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
        <editor-content :editor="editor" />
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

    export default {
        name: 'Wysiwyg',
        components: {
            EditorContent,
            EditorMenuBar,
            Icon,
        },
        props: ['value', 'label'],
        data() {
            return {
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
        },
    };
</script>

<style>
    .ProseMirror {
        padding: 1rem;
        @apply .p-2 .leading-normal .block .w-full .border .text-gray-700 .bg-white .font-sans .rounded .text-left .appearance-none .relative;
    }

    .ProseMirror [contenteditable='false'] {
        white-space: normal;
    }

    .ProseMirror [contenteditable='true'] {
        white-space: pre-wrap;
    }
</style>
