const mix = require('laravel-mix');
const path = require('path');

require('laravel-mix-purgecss');

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
        require('postcss-nesting'),
    ])
    .copyDirectory('resources/img', 'public/img')
    .purgeCss()
    .webpackConfig({
        output: {
            chunkFilename: 'js/parts/[name].js?id=[chunkhash]',
        },
        resolve: {
            alias: {
                vue$: 'vue/dist/vue.runtime.esm.js',
                ziggy: path.resolve('vendor/tightenco/ziggy/dist/js/route.js'),
                '@': path.resolve(__dirname, 'resources/'),
                _Components: path.resolve(__dirname, 'resources/js/components'),
                _Layouts: path.resolve(__dirname, 'resources/views/layouts'),
                _Pages: path.resolve(__dirname, 'resources/views/pages'),
                _Inputs: path.resolve(__dirname, 'resources/js/components/inputs'),
                _Icons: path.resolve(__dirname, 'node_modules/vue-material-design-icons'),
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
    mix.version();
}
