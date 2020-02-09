<template>
    <div
        class="bg-gray-200 font-sans leading-normal tracking-normal min-h-screen max-h-screen overflow-hidden grid grid-cols-1 grid-rows-1 gap-0"
    >
        <div>
            <!--Nav-->
            <navbar />

            <div class="grid grid-cols-4 grid-rows-1 gap-0 h-full">
                <sidebar />

                <main class="col-span-3 bg-gray-200">
                    <slot />
                </main>
            </div>
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
