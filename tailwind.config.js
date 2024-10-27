/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            colors: {
                "very-dark-gray": "hsl(0, 0%, 17%)",
                "dark-gray": "hsl(0, 0%, 59%)",
            },
            backgroundImage: {
                "desktop-background": "url('./images/pattern-bg-desktop.png')",
            },
        },
    },
    plugins: [],
}
