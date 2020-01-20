// require('./bootstrap');

import VueMeta from 'vue-meta';
import { InertiaApp } from '@inertiajs/inertia-vue';
import Vue from 'vue';

//Vue.config.productionTip = false
//Vue.mixin({ methods: { route: window.route } })
Vue.use(InertiaApp);
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
