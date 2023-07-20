/** @type {import('tailwindcss').Config} */
module.exports = {
    important: true,
    content: ["./src/**/*.{js,jsx,ts,tsx}"],

    theme: {
        extend: {
            colors: {
                bgColor: `var(--bgColor)`,
                textColor: `var(--textColor)`,
                //info, warning, success, error
            },
        },
    },
    plugins: [],
};
