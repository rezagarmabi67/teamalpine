/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        screens:{
            'mo': '480px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
        },
        extend: {
            colors: {
                bg1: '#bfcc94',
                bg2: '#b4cded',
                bg3: '#344966',
                bg4: '#0d1821',
                bg41: '#0d1821bb',
            },
            
        },
    },
    plugins: [],
};
