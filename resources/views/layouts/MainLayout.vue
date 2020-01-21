<template>
    <div class="min-h-screen text-white bg-indigo-800">
        <navbar />

        <main>
            <div class="w-full max-w-6xl p-4 py-6 mx-auto">
                <article>
                    <slot />
                </article>
            </div>
        </main>
    </div>
</template>

<script>
    import Navbar from '_Components/Navbar';

    export default {
        components: {
            Navbar,
        },
    };
</script>
