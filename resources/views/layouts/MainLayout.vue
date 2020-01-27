<template>
    <div
        class="bg-gray-200 font-sans leading-normal tracking-normal h-screen flex flex-col"
    >
        <!--Nav-->
        <navbar />

        <div class="flex flex-1 overflow-hidden">
            <sidebar />

            <main class="flex-1 bg-gray-200">
                <slot />
            </main>
        </div>
    </div>
</template>

<script>
    import Navbar from '_Layouts/Menus/Navbar';
    import Sidebar from '_Layouts/Menus/Sidebar';
    import FlashMessages from '_Components/FlashMessages';

    export default {
        components: {
            Navbar,
            Sidebar,
            FlashMessages,
        },
    };
</script>
