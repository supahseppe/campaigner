// require('./bootstrap');

import Vue from 'vue';
Vue.config.productionTip = false;
Vue.config.devtools = true;

import { InertiaApp } from '@inertiajs/inertia-vue';
Vue.use(InertiaApp);

Vue.mixin({ methods: { route: window.route } });

import VueMeta from 'vue-meta';
Vue.use(VueMeta);

const app = document.getElementById('app');

new Vue({
    metaInfo: {
        title: 'Loading…',
        titleTemplate: '%s | Laravel',
    },
    render: h =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: name =>
                    import(`_Pages/${name}`).then(module => module.default),
            },
        }),
}).$mount(app);
