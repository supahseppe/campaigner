import Vue from 'vue';
import Vuex from 'vuex';
import pathify from 'vuex-pathify';
import { make } from 'vuex-pathify';

Vue.use(Vuex);

const state = {
    pageTitle: 'Default',
    headerLinks: [
        {
            label: 'Homepage',
            route: 'page.welcome',
        },
        {
            label: 'Dashboard',
            route: 'home',
        },
        {
            label: 'About Us',
            route: 'page.about',
        },
        {
            label: 'Contact Us',
            route: 'page.contact',
        },
    ],
};

const mutations = {
    ...make.mutations(state),
};

const getters = {
    ...make.getters(state),
};

const actions = {
    ...make.actions(state),
};

const store = {
    modules: {},
    state,
    mutations,
    getters,
    actions,
};

export default new Vuex.Store({
    plugins: [pathify.plugin], // activate plugin
    ...store,
});
