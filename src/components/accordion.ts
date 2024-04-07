import { type VariantProps, tv } from "tailwind-variants";

export const fancyBorder =
    "border dark:border-gray-950/75 outline outline-1 -outline-offset-[2px] outline-white/5 dark:outline-[--ui-border-color]";

export const accordion = tv({
    slots: {
        root: "min-w-xs w-96",
        item: "relative overflow-hidden transition-[transform,outline] duration-300 data-[state=open]:z-10 outline-2 outline-offset-2 outline-primary-600 has-[:focus-visible]:outline has-[:focus-visible]:z-10",
        header: "flex",
        trigger:
            "group outline-none flex w-full items-center justify-between py-3 text-gray-950 dark:text-white",
        triggerIcon:
            "size-4 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180 text-gray-600 dark:text-gray-400",
        triggerContent: "flex items-center gap-3",
        content:
            "overflow-hidden *:pb-3 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown text-gray-700 dark:text-gray-300",
    },
    variants: {
        variant: {
            default: {
                item: "first:before:hidden before:absolute before:inset-x-0 before:bottom-t before:h-0.5 before:border-b before:bg-white dark:before:bg-gray-950",
            },
            elevated: {
                item: "group/item px-4 data-[state=open]:bg-[--accordion-bg] data-[state=open]:rounded-[--accordion-radius] data-[state=open]:accordion-shadow first:before:hidden before:absolute before:inset-x-4 before:bottom-t before:h-0.5 before:border-b before:bg-white dark:before:bg-gray-950 data-[state=open]:before:hidden",
            },
            ghost: {
                item: "group/item px-4 data-[state=open]:rounded-[--accordion-radius] data-[state=open]:bg-[--accordion-bg] first:before:hidden before:absolute before:inset-x-4 before:top-0 before:h-0.5 before:border-b before:bg-white dark:before:bg-gray-950 data-[state=open]:before:hidden",
            },
            soft: {
                root: "space-y-2",
                item: "px-4 rounded-[--accordion-radius] bg-[--accordion-bg]",
            },
            mixed: {
                root: "space-y-2",
                item: `${fancyBorder} transition-transform has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-primary-600 px-4 rounded-[--accordion-radius] border data-[state=open]:accordion-shadow bg-white dark:bg-[--accordion-bg]`,
            },
            outlined: {
                root: "space-y-2",
                item: "border px-4 rounded-[--accordion-radius]",
            },
        },
    },
});

export type Accordion = VariantProps<typeof accordion>["variant"];
