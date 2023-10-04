import plugin from "tailwindcss/plugin";
import getShadows from "./shadow";
import type { Config } from "./types";
import defaultConfig, { preconfigs as defaultPreconfigs } from "./default.config";

const setPreconfigs = (options: Config) => {
    const optionsPreconfigs = {
        appearance: options.appearance,
        background: options.background,
        border: options.border,
        padding: options.padding,
        radius: options.radius,
        shadow: options.shadow,
    };
    const newPreconfigs = { ...defaultPreconfigs, ...optionsPreconfigs };
    return newPreconfigs;
};

export const themer = plugin.withOptions(function (options: Config = {}) {
    const preconfigs = setPreconfigs(options);
    return function ({ addComponents, addBase, matchUtilities, theme }) {
        const config = {
            components: {
                ...defaultConfig(preconfigs),
                ...options.components,
            },
        };
        addBase({
            ":root": {
                //Accordion
                "--accordion-border-radius": theme(
                    `borderRadius.${config.components.accordion.rounded}`
                ),
                "--accordion-ghost-light-bg": theme(
                    `colors.gray.${config.components.accordion.ghostBg}`
                ),
                "--accordion-soft-light-bg": theme(
                    `colors.gray.${config.components.accordion.softBg}`
                ),
                "--accordion-ghost-dark-bg": theme(
                    `colors.gray.${config.components.accordion.dark.ghostBg}`
                ),
                "--accordion-soft-dark-bg": theme(
                    `colors.gray.${config.components.accordion.dark.softBg}`
                ),
                "--accordion-dark-bg": theme(
                    `colors.gray.${config.components.accordion.dark.elevatedBg}`
                ),
                "--accordion-shadow":
                    getShadows("accordion")[config.components.accordion.shadow.size],
                "--accordion-shadow-opacity": `${config.components.accordion.shadow.opacity}%`,

                //Alert
                "--alert-border-radius": theme(`borderRadius.${config.components.alert.rounded}`),
                "--alert-shadow": getShadows("alert")[config.components.alert.shadow.size],
                "--alert-shadow-opacity": `${config.components.alert.shadow.opacity}%`,

                //Annonce
                "--annonce-border-radius": theme(
                    `borderRadius.${config.components.annonce.rounded}`
                ),

                // Avatar
                "--avatar-border-radius": theme(`borderRadius.${config.components.avatar.rounded}`),
                "--avatar-status-position": theme(
                    `spacing.${config.components.avatar.statusInset}`
                ),

                // Badge
                "--badge-border-radius": theme(`borderRadius.${config.components.badge.rounded}px`),

                // Button
                "--btn-border-radius": theme(`borderRadius.${config.components.button.rounded}`),
                "--btn-border-width": `${config.components.button.borderWith}px`,

                // Card
                "--card-border-radius": theme(`borderRadius.${config.components.card.rounded}`),
                "--card-shadow": getShadows("card")[config.components.card.shadow.size],
                "--card-shadow-opacity": `${config.components.card.shadow.opacity}%`,
                "--card-padding": theme(`spacing.${config.components.card.padding}`),
                "--card-light-bg": theme(`colors.gray.${config.components.card.bg}`),
                "--card-dark-bg": theme(`colors.gray.${config.components.card.dark.bg}`),

                // Menu
                "--menu-border-radius": theme(`borderRadius.${config.components.menu.rounded}`),
                "--menu-light-bg-opacity": `${config.components.menu.bgOpacity}%`,
                "--menu-dark-bg-opacity": `${config.components.menu.dark.bgOpacity}%`,
                "--menu-dark-bg": theme(
                    `colors.gray.${config.components.menu.dark.bg} / var(--menu-dark-bg-opacity)`
                ),
                "--menu-shadow": getShadows("menu")[config.components.menu.shadow.size],
                "--menu-shadow-opacity": `${config.components.menu.shadow.opacity}%`,
                "--menu-light-backdrop-blur": `${config.components.menu.backdropBlur}rem`,
                "--menu-dark-backdrop-blur": `${config.components.menu.backdropBlur}rem`,
                "--menu-light-border-color": theme(
                    `colors.gray.${config.components.menu.borderColor}`
                ),
                "--menu-dark-border-color": theme(
                    `colors.gray.${config.components.menu.dark.borderColor}`
                ),

                // Feedback
                "--feedback-shadow": getShadows("feedback")[config.components.feedback.shadow.size],
                "--feedback-shadow-opacity": `${config.components.feedback.shadow.opacity}%`,
                "--feedback-dark-bg": theme(`colors.gray.${config.components.feedback.dark.bg}`),
                "--feedback-light-border-color": theme(
                    `colors.gray.${config.components.feedback.borderColor}`
                ),
                "--feedback-dark-border-color": theme(
                    `colors.gray.${config.components.feedback.dark.borderColor}`
                ),

                // Flag
                "--flag-border-radius": theme(`borderRadius.${config.components.flag.rounded}`),
                "--flag-padding": theme(`spacing.${config.components.flag.padding}`),

                // Field
                "--field-border-radius": theme(`borderRadius.${config.components.field.rounded}`),
                "--field-light-bg": theme(`colors.gray.${config.components.field.softBg}`),
                "--field-light-focus-bg": theme(
                    `colors.gray.${config.components.field.softBgFocus}`
                ),
                "--field-dark-bg": theme(`colors.gray.${config.components.field.dark.softBg}`),
                "--field-dark-focus-bg": theme(
                    `colors.gray.${config.components.field.dark.softBgFocus}`
                ),
                "--field-light-border-color": theme(
                    `colors.gray.${config.components.field.borderColor}`
                ),
                "--field-dark-border-color": theme(
                    `colors.gray.${config.components.field.dark.borderColor}`
                ),

                // Popover
                "--popover-border-radius": theme(
                    `borderRadius.${config.components.popover.rounded}`
                ),
                "--popover-padding": theme(`spacing.${config.components.popover.padding}`),

                // Switch
                "--switch-border-radius": theme(`borderRadius.${config.components.switch.rounded}`),
                /*
                    // Tabs
                    "--tabs-border-radius": theme(
                        `borderRadius.${radius[options.radius].tabs.default}`
                    ),
                    "--tabs-light-bg": theme(`colors.gray.${background[options.background].tabs}`),
                    "--tabs-dark-bg": theme(
                        `colors.gray.${background[options.background].dark.tabs.list}`
                    ),
                    "--tabs-indicator-dark-bg": theme(
                        `colors.gray.${background[options.background].dark.tabs.indicator}`
                    ),
                    "--tabs-bottom-indicator-trigger-dark-bg": theme(
                        `colors.gray.${background[options.background].dark.tabs.trigger}`
                    ),
                    "--tabs-bottom-indicator-light-bg": theme("colors.primary.600"),
                    "--tabs-bottom-indicator-dark-bg": theme("colors.primary.400"),
                    "--tabs-light-border-color": theme(
                        `colors.gray.${borderColors[config.border].tabs}`
                    ),
                    "--tabs-dark-border-color": theme(
                        `colors.gray.${borderColors[config.border].dark.tabs}`
                    ),
                    "--tabs-soft-border-radius": theme(
                        `borderRadius.${radius[options.radius].tabs.soft}`
                    ),
                    "--tabs-bottom-indicator-border-radius": theme(
                        `borderRadius.${radius[options.radius].tabs.bottomIndicator}`
                    ),

                    // Tooltip
                    "--tooltip-border-radius": theme(
                        `borderRadius.${radius[options.radius].tooltip}`
                    ),

                    // Toast
                    "--toast-border-radius": theme(`borderRadius.${radius[options.radius].toast}`),
                */
                // Separator
                "--separator-light-color": theme(`colors.gray.${config.components.ui.borderColor}`),
                "--separator-dark-color": theme(
                    `colors.gray.${config.components.ui.dark.borderColor}`
                ),

                // UI
                "--ui-light-border-color": theme(`colors.gray.${config.components.ui.borderColor}`),
                "--ui-dark-border-color": theme(
                    `colors.gray.${config.components.ui.dark.borderColor}`
                ),
                "--ui-light-border-hover-color": theme(
                    `colors.gray.${config.components.ui.hoverBorderColor}`
                ),
                "--ui-dark-border-hover-color": theme(
                    `colors.gray.${config.components.ui.dark.hoverBorderColor}`
                ),

                // Select
                "--select-dark-bg": theme("colors.gray.950"),
            },
        });
        addComponents({
            ".accordion-shadow": {
                boxShadow: `var(--accordion-shadow)`,
            },
            ".alert-shadow": {
                boxShadow: `var(--alert-shadow)`,
            },
            ".card-shadow": {
                boxShadow: `var(--card-shadow)`,
            },
            ".feedback-shadow": {
                boxShadow: `var(--feedback-shadow)`,
            },
            ".menu-shadow": {
                boxShadow: `var(--menu-shadow)`,
            },
        });
        matchUtilities({
            perspective: (value) => ({
                perspective: value,
            }),
        });
    };
});
