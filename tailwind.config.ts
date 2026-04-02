/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export default {
    content: ["./app/**/*.{vue,js,ts}", "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    safelist: [
        // Backgrounds
        "bg-light-3",
        "bg-light-4",
        "bg-light-5",
        "bg-text",

        // Text colors
        "text-light-3",
        "text-light-4",
        "text-light-5",
        "text-text",

        // Border colors
        "border-light-3",
        "border-light-4",
        "border-light-5",
    ],
    theme: {
        extend: {
            colors: {
                "light-3": "var(--light-3)",
                "light-2": "var(--light-2)",
                "light-1": "var(--light-1)",
                background: "var(--background)",
                "main-text": colors.gray[500],
            },
        },
    },
    plugins: [],
};
