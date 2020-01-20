module.exports = {
    extends: [
        'stylelint-config-standard',
        'stylelint-config-recommended-scss',
        'stylelint-prettier/recommended',
    ],
    defaultSeverity: 'warning',
    rules: {
        'block-no-empty': null,
        'no-empty-source': null,
        'color-no-invalid-hex': true,
        'comment-empty-line-before': [
            'always',
            {
                ignore: ['stylelint-commands', 'after-comment'],
            },
        ],
        'declaration-colon-space-after': 'always',
        indentation: [4],
        'max-empty-lines': 2,
        'rule-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
                ignore: ['after-comment'],
            },
        ],
    },
};
