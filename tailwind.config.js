/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        colors: {
            black: '#000',
            dark: '#311E10',
            light: '#E4CCC4',
            primary: '#596F62',
        },

        boxShadow: {
            vignette: 'inset 0 0 100px rgba(0, 0, 0, 0.5)',
        },
    },
};
