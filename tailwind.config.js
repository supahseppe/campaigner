const defaultTheme = require('tailwindcss/defaultTheme');

const baseColors = {
    red: {
        '100': '#FFCDD2',
        '200': '#EF9A9A',
        '300': '#E57373',
        '400': '#EF5350',
        '500': '#F44336',
        '600': '#E53935',
        '700': '#D32F2F',
        '800': '#C62828',
        '900': '#B71C1C',
    },
    yellow: {
        '100': '#FFECB3',
        '200': '#FFE082',
        '300': '#FFD54F',
        '400': '#FFCA28',
        '500': '#FFC107',
        '600': '#FFB300',
        '700': '#FFA000',
        '800': '#FF8F00',
        '900': '#FF6F00',
    },
    purple: {
        '100': '#D1C4E9',
        '200': '#B39DDB',
        '300': '#9575CD',
        '400': '#7E57C2',
        '500': '#673AB7',
        '600': '#5E35B1',
        '700': '#512DA8',
        '800': '#4527A0',
        '900': '#311B92',
    },
    grey: {
        '100': '#F7FAFC',
        '200': '#EDF2F7',
        '300': '#E2E8F0',
        '400': '#CBD5E0',
        '500': '#A0AEC0',
        '600': '#718096',
        '700': '#4A5568',
        '800': '#2D3748',
        '900': '#1A202C',
    },
    indigo: {
        '100': '#e6e8ff',
        '200': '#C3DAFE',
        '300': '#b2b7ff',
        '400': '#7886d7',
        '500': '#6574cd',
        '600': '#5661b3',
        '700': '#4C51BF',
        '800': '#2f365f',
        '900': '#191e38',
    },
};

module.exports = {
    theme: {
        extend: {
            fontFamily: {
                serif: ['Spectral', ...defaultTheme.fontFamily.serif],
                sans: ['Karla', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                ...baseColors,
            },
            boxShadow: theme => ({
                outline: '0 0 0 2px ' + theme('colors.indigo.500'),
            }),
            fill: theme => theme('colors'),
        },
    },
    variants: {
        fill: ['responsive', 'hover', 'focus', 'group-hover'],
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
        zIndex: ['responsive', 'focus'],
    },
    plugins: [],
};
