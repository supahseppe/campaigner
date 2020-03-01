import route from 'ziggy';
import { Ziggy } from '@/assets/js/ziggy';

const tailwindVue = {
    install: function(Vue) {
        Vue.mixin({
            methods: {
                route: (name, params, absolute) => route(name, params, absolute, Ziggy),
            },
        });
    },
};

export default tailwindVue;
