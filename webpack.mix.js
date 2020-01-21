const mix = require('laravel-mix');
const path = require('path');

require('laravel-mix-purgecss');

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
        require('postcss-nesting'),
    ])
    .purgeCss()
    .webpackConfig({
        output: {
            chunkFilename: 'js/parts/[name].js?id=[chunkhash]',
        },
        resolve: {
            alias: {
                vue$: 'vue/dist/vue.runtime.esm.js',
                '@': path.resolve('resources/'),
                _Components: path.resolve('resources/js/components'),
                _Layouts: path.resolve('resources/views/layouts'),
                _Pages: path.resolve('resources/views/pages'),
                _Inputs: path.resolve('resources/js/components/inputs'),
            },
        },
    })
    .babelConfig({
        plugins: ['@babel/plugin-syntax-dynamic-import'],
    })
    .autoload({
        lodash: ['_', 'window._'],
    })
    .browserSync({
        ui: false,
        open: false,
        proxy: 'https://campaigner.test',
    });

if (mix.inProduction()) {
    mix.sourceMaps().version();
}
