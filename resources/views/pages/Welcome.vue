<template>
    <main
        class="bg-grey-800 w-screen h-screen flex flex-col items-center justify-center"
        style="background: url('/img/star-bg.jpg'); background-size:cover;"
    >
        <div
            class="mx-auto flex flex-col items-center justify-center w-11/12 px-4 py-6 bg-white-80"
        >
            <div class="text-center mb-12">
                <h1 class="text-3xl mb-6">Welcome to Campaigner.app</h1>
                <p>
                    To begin, you'll need to either create a campaign or join an existing
                    one.
                </p>
            </div>
            <div
                class="flex flex-col md:flex-row items-center md:justify-between w-full container lg:max-w-md mb-6"
            >
                <btn class="mb-6 md:mb-0 w-11/12 md:w-11/24">
                    Create New
                </btn>
                <btn class="w-11/12 md:w-11/24">
                    Join Existing
                </btn>
            </div>
            <div>
                <inertia-link :href="route('login')">
                    Already a member? Log in here.
                </inertia-link>
            </div>
        </div>
    </main>
</template>

<script>
    import Panel from '_Components/cards/Panel';
    import Btn from '_Components/Btn';

    export default {
        metaInfo: { title: 'Welcome' },
        components: {
            Btn,
            Panel,
        },
    };
</script>
