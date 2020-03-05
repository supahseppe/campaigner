require('./bootstrap');

import Vue from 'vue';
Vue.config.productionTip = false;
Vue.config.devtools = true;

import Vuex from 'vuex';
Vue.use(Vuex);

import { InertiaApp } from '@inertiajs/inertia-vue';
Vue.use(InertiaApp);

import ZiggyVue from './helpers/Ziggy';
Vue.use(ZiggyVue);

import VueTailwind from './helpers/Tailwind';
Vue.use(VueTailwind);

import VueMeta from 'vue-meta';
Vue.use(VueMeta);

import { clickout } from 'vuetensils';
Vue.directive('clickout', clickout);

import pathify from '@/js/helpers/pathify';
import store from '@/js/store/main';

const app = document.getElementById('app');
new Vue({
    store,
    plugins: [pathify.plugin],
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
