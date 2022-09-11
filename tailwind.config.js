/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        colors: {
            black: '#000',
            dark: '#311E10',
            primary: '#596F62',
            light: '#E4CCC4',
            white: '#FFF',
        },

        fontFamily: {
            sans: ['Open Sans', 'sans-serif'],
            handwritten: ['Pacifico', 'cursive'],
        },

        boxShadow: {
            vignette: 'inset 0 0 100px rgba(0, 0, 0, 0.5)',
        },
    },
};
