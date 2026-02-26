/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    orange: '#F5A023',
                    'orange-dark': '#E8921A',
                    green: '#2D6A27',
                    'green-dark': '#1E4D1A',
                    'green-bg': '#233824',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Space Grotesk', 'Outfit', 'system-ui', 'sans-serif'],
                logo: ['Outfit', 'Nunito', 'sans-serif'],
            },
            keyframes: {
                floatY: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-8px)' },
                },
                fadeSlideUp: {
                    '0%': { opacity: '0', transform: 'translateY(24px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                'float': 'floatY 3s ease-in-out infinite',
                'fade-slide-up': 'fadeSlideUp 0.7s ease both',
            },
        },
    },
    plugins: [],
}
