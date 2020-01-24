<template>
    <div class="main-layout min-h-screen text-white bg-indigo-800">
        <navbar />
        <sidebar />
        <main class="main-content relative">
            <div class="w-full container px-4 py-6 mx-auto">
                <article class="overflow-y-auto" scroll-region>
                    <flash-messages />
                    <slot />
                </article>
            </div>
        </main>
    </div>
</template>

<script>
    import Navbar from '_Layouts/Navbar';
    import Sidebar from '_Layouts/Sidebar';
    import FlashMessages from '_Components/FlashMessages';

    export default {
        components: {
            Navbar,
            Sidebar,
            FlashMessages,
        },
    };
</script>

<style lang="css" scoped>
    .main-layout {
        display: grid;
        grid-template-columns: 240px 1fr;
        grid-template-rows: 64px 1fr;
        grid-template-areas:
            'navbar navbar'
            'sidebar content';
    }

    .navbar {
        grid-area: navbar;
    }

    .sidebar {
        grid-area: sidebar;
    }

    .main-content {
        grid-area: content;
    }
</style>
