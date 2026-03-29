/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export default {
    content: ["./app/**/*.{vue,js,ts}", "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    safelist: [
        // Backgrounds
        "bg-primary",
        "bg-primary-hover",
        "bg-secondary",
        "bg-secondary-hover",
        "bg-dark-1",
        "bg-medium-2",
        "bg-light-3",
        "bg-light-4",
        "bg-light-5",
        "bg-text",

        // Text colors
        "text-primary",
        "text-primary-hover",
        "text-secondary",
        "text-secondary-hover",
        "text-dark-1",
        "text-medium-2",
        "text-light-3",
        "text-light-4",
        "text-light-5",
        "text-text",

        // Border colors (optional, for testing)
        "border-primary",
        "border-secondary",
        "border-dark-1",
        "border-medium-2",
        "border-light-3",
        "border-light-4",
        "border-light-5",
    ],
    theme: {
        extend: {
            colors: {
                primary: "var(--primary)",
                "primary-hover": "var(--primary-hover)",
                secondary: "var(--secondary)",
                "secondary-hover": "var(--secondary-hover)",
                dark: "var(--dark)",
                medium: "var(--medium)",
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
