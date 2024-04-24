import plugin from "tailwindcss/plugin";
import getShadows from "./shadow";

export const components = plugin(({ addBase, theme, addComponents, matchUtilities }) => {
    addBase({
        ":root": {
            color: "var(--body-text-color)",
            "--overlay-backdrop-blur": theme("blur[none]"),
            "--card-padding": theme("spacing[6]"),
            "--accordion-padding": "1rem",
            "--feedback-padding": "var(--card-padding)",
            "--toast-padding": theme("spacing[4]"),

            "--display-text-color": "rgb(var(--colors-gray-950))",
            "--title-text-color": "rgb(var(--colors-gray-950))",
            "--caption-text-color": "rgb(var(--colors-gray-500))",
            "--body-text-color": "rgb(var(--colors-gray-600))",
            "--placeholder-text-color": "rgb(var(--colors-gray-400))",

            "--area-primary-stroke": "rgb(var(--colors-primary-600))",
            "--area-secondary-stroke": "rgb(var(--colors-secondary-600))",
            "--area-accent-stroke": "rgb(var(--colors-accent-600))",
            "--area-gray-stroke": "rgb(var(--colors-gray-600))",
            "--area-neutral-stroke": "rgb(var(--colors-gray-950))",

            "--card-shadow-opacity": theme("opacity[5]"),
            "--feedback-shadow-opacity": theme("opacity[5]"),
            "--menu-shadow-opacity": theme("opacity[5]"),
            "--accordion-shadow-opacity": theme("opacity[5]"),

            "@apply dark:[--body-text-color:rgb(var(--colors-gray-400))] dark:[--area-neutral-stroke:theme('colors.white')] dark:[--title-text-color:theme('colors.white')] dark:[--display-text-color:theme('colors.white')]":
                {},
        },
        body: {
            "@apply dark:bg-gray-950": {},
        },
    });
    addComponents({
        ".accordion-shadow": {
            boxShadow: getShadows("accordion").md,
        },
        ".card-shadow": {
            boxShadow: getShadows("card").md,
        },
        ".feedback-shadow": {
            boxShadow: getShadows("feedback").lg,
        },
        ".menu-shadow": {
            boxShadow: getShadows("menu").lg,
        },
    });
    matchUtilities({
        perspective: (value) => ({
            perspective: value,
        }),
    });
}, {});
