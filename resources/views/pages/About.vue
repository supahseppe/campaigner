<template>
    <layout>
        <h1 class="mb-3 text-2xl font-semibold">About</h1>
        <p>About my first Inertia.js app!</p>
    </layout>
</template>

<script>
    import Layout from '_Layouts/MainLayout';

    export default {
        metaInfo: { title: 'About' },
        components: {
            Layout,
        },
    };
</script>
