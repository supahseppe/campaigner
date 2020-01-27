import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);

const tailwindVue = {
    install: function(Vue) {
        Vue.prototype.$tailwind = fullConfig;
    },
};

export default tailwindVue;
