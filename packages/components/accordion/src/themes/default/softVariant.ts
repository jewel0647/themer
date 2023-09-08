import config from "./../../accordion.config";
import * as baseAccordion from "./base";

const item = {
    base: `${baseAccordion.item} px-6 rounded-[--accordion-border-radius]`,
    appearances: {
        light: "bg-gray-100 hover:bg-gray-200",
        dark: "bg-gray-900 hover:bg-gray-800",
        both: "bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800",
    },
};

const softVariant = {
    root: "space-y-4",
    item: item.base + " " + item.appearances[config.appearance],
    trigger: {
        parent:
            baseAccordion.trigger.parent.base +
            " " +
            baseAccordion.trigger.parent.appearances[config.appearance],
        content: baseAccordion.trigger.content,
        icon: baseAccordion.trigger.icon.base + " " + baseAccordion.trigger.icon.motion,
    },
    content:
        baseAccordion.content.base +
        " " +
        baseAccordion.content.motion +
        " " +
        baseAccordion.content.appearances[config.appearance],
};

export default softVariant;
export { softVariant };
