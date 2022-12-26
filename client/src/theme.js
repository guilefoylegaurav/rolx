import {
    extendTheme,
    theme as base,
    withDefaultColorScheme,
    withDefaultVariant
} from "@chakra-ui/react";

import { mode } from "@chakra-ui/theme-tools";

const replaceExisting = {
    variants: {
        filled: {
            field: {
                _focus: {
                    borderColor: "purple.500",
                },
            },
        },
    },
    sizes: {
        md: {
            field: {
                borderRadius: "20px",
            },
        },
    },
};

const customTheme = extendTheme(
    {
        initialColorMode: 'light',
        useSystemColorMode: false,
        fonts: {
            heading: `Poppins, ${base.fonts.heading} `,
            body: `Poppins, ${base.fonts.heading} `
        },
        components: {
            Button: {
                variants: {
                    primary: (props) => ({
                        rounded: "none",
                        _focus: {
                            ring: 2,
                            ringColor: "purple.500",
                        },
                        backgroundColor: mode("purple.600", "purple.300")(props),
                        color: mode("purple.900", "purple.700")(props),
                        _hover: {
                            backgroundColor: mode("purple.400", "purple.400")(props),
                            color: mode("purple.900", "purple.700")(props),
                        },
                    }),
                },
            },
            Textarea: {
                variants: {
                    filled: {
                        _focus: {
                            borderColor: "purple.500",
                        },
                    },
                },
                sizes: {
                    md: {
                        borderRadius: "none",
                    },
                },
            },
            Input: { ...replaceExisting },
            Select: { ...replaceExisting },
            Checkbox: {
                baseStyle: {
                    control: {
                        _focus: {
                            ring: 2,
                            ringColor: "purple.500",
                        },
                    },
                },
            },
        },
    },
    withDefaultColorScheme({
        colorScheme: "purple",
    }),
    withDefaultVariant({
        variant: "filled",
        components: ["Input", "Select", "Textarea"],
    })
);

export default customTheme;