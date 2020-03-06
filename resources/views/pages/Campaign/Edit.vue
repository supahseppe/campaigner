<template>
    <section class="h-screen container">
        <section-header>Editing {{ campaign.title }}</section-header>
        <form
            class="w-full p-4 bg-white rounded md:max-w-lg lg:max-w-xl xl:max-w-3xl mx-auto"
            @submit.prevent="submit"
        >
            <div>
                <div>
                    <div>
                        <div
                            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5"
                        >
                            <label
                                for="title"
                                class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                            >
                                Campaign Title
                            </label>
                            <div class="mt-1 sm:mt-0 sm:col-span-2">
                                <text-input id="title" v-model="form.title" />
                            </div>
                        </div>

                        <div
                            class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5 pointer-events-none opacity-50"
                        >
                            <label
                                for="cover_photo"
                                class="block text-sm leading-5 font-medium text-gray-700 sm:mt-px sm:pt-2"
                            >
                                Cover photo
                            </label>
                            <div class="mt-2 sm:mt-0 sm:col-span-2">
                                <div
                                    class="max-w-lg flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                                >
                                    <div class="text-center">
                                        <svg
                                            class="mx-auto h-12 w-12 text-gray-400"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="0 0 48 48"
                                        >
                                            <path
                                                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </svg>
                                        <p class="mt-1 text-sm text-gray-600">
                                            <button
                                                type="button"
                                                class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition duration-150 ease-in-out"
                                            >
                                                Upload a file
                                            </button>
                                            or drag and drop
                                        </p>
                                        <p class="mt-1 text-xs text-gray-500">
                                            PNG, JPG, GIF up to 10MB
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                        >
                            <label
                                for="description"
                                class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                            >
                                Description
                            </label>
                            <div class="mt-1 sm:mt-0 sm:col-span-2">
                                <div class="max-w-lg flex rounded-md shadow-sm">
                                    <wysiwyg id="description" v-model="form.description" />
                                </div>
                                <p class="mt-2 text-sm text-gray-500">
                                    Write a bit about your campaign.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-8 border-t border-gray-200 pt-8 sm:mt-5 sm:pt-10">
                    <div>
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                            Players
                        </h3>
                        <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                            Below, you can invite players to join your campaign.
                        </p>
                    </div>
                    <div class="mt-6 sm:mt-5">
                        <div
                            class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5"
                        >
                            <label
                                for="player_username"
                                class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
                            >
                                Username
                            </label>
                            <div class="mt-1 sm:mt-0 sm:col-span-2">
                                <div class="max-w-xs rounded-md shadow-sm">
                                    <auto-complete model="campaign" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-8 border-t border-gray-200 pt-8 sm:mt-5 sm:pt-10">
                    <div>
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                            Notifications
                        </h3>
                        <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
                            We'll always let you know about important changes, but you
                            pick what else you want to hear about.
                        </p>
                    </div>
                    <div class="mt-6 sm:mt-5">
                        <div class="sm:border-t sm:border-gray-200 sm:pt-5">
                            <fieldset>
                                <div
                                    class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline"
                                >
                                    <div>
                                        <legend
                                            class="text-base leading-6 font-medium text-gray-900 sm:text-sm sm:leading-5 sm:text-gray-700"
                                        >
                                            By Email
                                        </legend>
                                    </div>
                                    <div class="mt-4 sm:mt-0 sm:col-span-2">
                                        <div class="max-w-lg">
                                            <div class="relative flex items-start">
                                                <div
                                                    class="absolute flex items-center h-5"
                                                >
                                                    <input
                                                        id="comments"
                                                        type="checkbox"
                                                        class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                                    />
                                                </div>
                                                <div class="pl-7 text-sm leading-5">
                                                    <label
                                                        for="comments"
                                                        class="font-medium text-gray-700"
                                                    >
                                                        Comments
                                                    </label>
                                                    <p class="text-gray-500">
                                                        Get notified when someones posts a
                                                        comment on a posting.
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="mt-4">
                                                <div class="relative flex items-start">
                                                    <div
                                                        class="absolute flex items-center h-5"
                                                    >
                                                        <input
                                                            id="candidates"
                                                            type="checkbox"
                                                            class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                                        />
                                                    </div>
                                                    <div class="pl-7 text-sm leading-5">
                                                        <label
                                                            for="candidates"
                                                            class="font-medium text-gray-700"
                                                        >
                                                            Candidates
                                                        </label>
                                                        <p class="text-gray-500">
                                                            Get notified when a candidate
                                                            applies for a job.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mt-4">
                                                <div class="relative flex items-start">
                                                    <div
                                                        class="absolute flex items-center h-5"
                                                    >
                                                        <input
                                                            id="offers"
                                                            type="checkbox"
                                                            class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                                        />
                                                    </div>
                                                    <div class="pl-7 text-sm leading-5">
                                                        <label
                                                            for="offers"
                                                            class="font-medium text-gray-700"
                                                        >
                                                            Offers
                                                        </label>
                                                        <p class="text-gray-500">
                                                            Get notified when a candidate
                                                            accepts or rejects an offer.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div class="mt-6 sm:mt-5 sm:border-t sm:border-gray-200 sm:pt-5">
                            <fieldset>
                                <div
                                    class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline"
                                >
                                    <div>
                                        <legend
                                            class="text-base leading-6 font-medium text-gray-900 sm:text-sm sm:leading-5 sm:text-gray-700"
                                        >
                                            Push Notifications
                                        </legend>
                                    </div>
                                    <div class="sm:col-span-2">
                                        <div class="max-w-lg">
                                            <p class="text-sm leading-5 text-gray-500">
                                                These are delivered via SMS to your mobile
                                                phone.
                                            </p>
                                            <div class="mt-4">
                                                <div class="flex items-center">
                                                    <input
                                                        id="push_everything"
                                                        name="form-input push_notifications"
                                                        type="radio"
                                                        class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                                    />
                                                    <label
                                                        for="push_everything"
                                                        class="ml-3"
                                                    >
                                                        <span
                                                            class="block text-sm leading-5 font-medium text-gray-700"
                                                        >
                                                            Everything
                                                        </span>
                                                    </label>
                                                </div>
                                                <div class="mt-4 flex items-center">
                                                    <input
                                                        id="push_email"
                                                        name="form-input push_notifications"
                                                        type="radio"
                                                        class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                                    />
                                                    <label for="push_email" class="ml-3">
                                                        <span
                                                            class="block text-sm leading-5 font-medium text-gray-700"
                                                        >
                                                            Same as email
                                                        </span>
                                                    </label>
                                                </div>
                                                <div class="mt-4 flex items-center">
                                                    <input
                                                        id="push_nothing"
                                                        name="form-input push_notifications"
                                                        type="radio"
                                                        class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                                    />
                                                    <label
                                                        for="push_nothing"
                                                        class="ml-3"
                                                    >
                                                        <span
                                                            class="block text-sm leading-5 font-medium text-gray-700"
                                                        >
                                                            No push notifications
                                                        </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-8 border-t border-gray-200 pt-5">
                <div class="flex justify-end">
                    <span class="inline-flex rounded-md shadow-sm">
                        <button
                            type="button"
                            class="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
                        >
                            Cancel
                        </button>
                    </span>
                    <span class="ml-3 inline-flex rounded-md shadow-sm">
                        <button
                            type="submit"
                            class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                        >
                            Save
                        </button>
                    </span>
                </div>
            </div>
        </form>
    </section>
</template>

<script>
    import MainLayout from '_Layouts/MainLayout';
    import SectionHeader from '_Components/SectionHeader';
    import TextInput from '_Components/inputs/TextInput';
    import LoadingButton from '_Components/LoadingButton';
    import TrashedMessage from '_Components/TrashedMessage';
    import Wysiwyg from '_Components/inputs/Wysiwyg';
    import { sync } from 'vuex-pathify';
    import AutoComplete from '_Inputs/AutoComplete';

    export default {
        name: 'Edit',
        components: {
            AutoComplete,
            SectionHeader,
            TextInput,
            LoadingButton,
            TrashedMessage,
            Wysiwyg,
        },
        props: {
            campaign: {
                type: Object,
                default: () => {},
            },
        },
        data() {
            return {
                pageTitle: `Editing ${this.campaign.title}`,
                pageDescription: 'Updating a campaign.',
                sending: false,
                form: {
                    title: this.campaign.title,
                    description: this.campaign.description,
                },
            };
        },
        computed: {
            syncedPageTitle: sync('pageTitle'),
        },
        watch: {},
        created() {},
        mounted() {
            this.syncedPageTitle = this.pageTitle;
        },
        methods: {
            submit() {
                this.sending = true;
                this.$inertia
                    .patch(this.route('campaigns.update', this.campaign.slug), this.form)
                    .then(() => (this.sending = false));
            },
            destroy() {
                if (confirm('Are you sure you want to delete this campaign?')) {
                    this.$inertia.delete(
                        this.route('campaigns.destroy', this.campaign.slug)
                    );
                }
            },
            restore() {
                if (confirm('Are you sure you want to restore this campaign?')) {
                    this.$inertia.put(
                        this.route('campaigns.restore', this.campaign.slug)
                    );
                }
            },
        },
        layout: MainLayout,
        metaInfo() {
            return {
                title: this.pageTitle,
                meta: [
                    {
                        name: 'description',
                        content: this.pageDescription,
                    },
                ],
            };
        },
    };
</script>
