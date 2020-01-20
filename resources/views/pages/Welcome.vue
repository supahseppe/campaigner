<template>
    <layout>
        <h1 class="mb-3 text-2xl font-semibold">Welcome</h1>
        <p>Welcome to my first Inertia.js app!</p>
    </layout>
</template>

<script>
    import Layout from '_Layouts/MainLayout';

    export default {
        metaInfo: { title: 'Welcome' },
        components: {
            Layout,
        },
    };
</script>
