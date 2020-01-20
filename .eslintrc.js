module.exports = {
    root: true,
    env: {
        browser: true,
    },
    extends: [
        'plugin:vue/recommended',
        'eslint:recommended',
        'prettier/vue',
        'plugin:prettier/recommended',
    ],
    rules: {
        'vue/no-v-html': 'off',
        'vue/component-name-in-template-casing': ['error', 'kebab-case'],
        'vue/script-indent': [
            'error',
            4,
            {
                baseIndent: 1,
                switchCase: 1,
            },
        ],
        'no-undef': 'warn',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};
