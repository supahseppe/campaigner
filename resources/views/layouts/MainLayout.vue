<template>
    <div>
        <navbar />

        <main>
            <div class="w-full max-w-6xl p-4 mx-auto">
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
