<template>
    <div class="bg-gray-900 font-sans leading-normal tracking-normal">
        <!--Nav-->
        <navbar />

        <div class="flex flex-col md:flex-row">
            <sidebar />

            <div class="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">
                <div class="flex flex-row flex-wrap flex-grow">
                    <slot />
                </div>
                <!--                <div class="flex flex-wrap">-->
                <!--                    <div class="w-full md:w-1/2 xl:w-1/3 p-3">-->
                <!--                        &lt;!&ndash;Metric Card&ndash;&gt;-->
                <!--                        <div-->
                <!--                            class="bg-green-100 border-b-4 border-green-600 rounded-lg shadow-lg p-5"-->
                <!--                        >-->
                <!--                            <div class="flex flex-row items-center">-->
                <!--                                <div class="flex-shrink pr-4">-->
                <!--                                    <div class="rounded-full p-5 bg-green-600">-->
                <!--                                        <i class="fa fa-wallet fa-2x fa-inverse"></i>-->
                <!--                                    </div>-->
                <!--                                </div>-->
                <!--                                <div class="flex-1 text-right md:text-center">-->
                <!--                                    <h5 class="font-bold uppercase text-gray-600">-->
                <!--                                        Models-->
                <!--                                    </h5>-->
                <!--                                    <h3 class="font-bold text-3xl">-->
                <!--                                        Value-->
                <!--                                        <span class="text-green-500"></span>-->
                <!--                                    </h3>-->
                <!--                                </div>-->
                <!--                            </div>-->
                <!--                        </div>-->
                <!--                        &lt;!&ndash;/Metric Card&ndash;&gt;-->
                <!--                    </div>-->
                <!--                </div>-->
            </div>
        </div>
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
