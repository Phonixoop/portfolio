// import type { Config } from "tailwindcss";
// const {
//   default: flattenColorPalette,
// } = require("tailwindcss/lib/util/flattenColorPalette");
// const colors = require("tailwindcss/colors");
// function withOpacity(variableName: string) {
//   return ({ opacityValue }: { opacityValue: any }) => {
//     if (opacityValue !== undefined) {
//       return `rgba(var(${variableName}), ${opacityValue})`;
//     }
//     return `rgb(var(${variableName}))`;
//   };
// }

// const myColors = {
//   primary: withOpacity("--primary"),
//   secondary: withOpacity("--secondary"),
//   third: withOpacity("--third"),
//   primbuttn: withOpacity("--primbuttn"),
//   secbuttn: withOpacity("--secbuttn"),
//   accent: withOpacity("--accent"),

//   secbuttnShade: {
//     50: "rgb(231, 254, 252)",
//     100: "rgb(206, 253, 250)",
//     200: "rgb(158, 250, 244)",
//     300: "rgb(109, 248, 239)",
//     400: "rgb(60, 246, 233)",
//     500: "rgb(11, 244, 228)",
//     600: "rgb(9, 195, 182)",
//     700: "rgb(7, 146, 137)",
//     800: "rgb(5, 97, 91)",
//     900: "rgb(2, 49, 46)",
//     950: "rgb(1, 24, 23)",
//   },
//   dikado: {
//     red: {
//       default: "rgb(232, 65, 55)",
//       50: "rgb(252, 233, 232)",
//       100: "rgb(250, 211, 209)",
//       200: "rgb(244, 168, 164)",
//       300: "rgb(239, 124, 118)",
//       400: "rgb(234, 80, 72)",
//       500: "rgb(228, 37, 27)",
//       600: "rgb(183, 29, 21)",
//       700: "rgb(137, 22, 16)",
//       800: "rgb(91, 15, 11)",
//       900: "rgb(46, 7, 5)",
//       950: "rgb(23, 4, 3)",
//     },
//     yellow: {
//       default: "rgb(248, 166, 53)",
//       50: "rgb(25, 15, 1)",
//       100: "rgb(49, 29, 2)",
//       200: "rgb(98, 59, 4)",
//       300: "rgb(148, 88, 5)",
//       400: "rgb(197, 118, 7)",
//       500: "rgb(246, 147, 9)",
//       600: "rgb(248, 169, 58)",
//       700: "rgb(250, 190, 107)",
//       800: "rgb(251, 212, 157)",
//       900: "rgb(253, 233, 206)",
//       950: "rgb(254, 244, 230)",
//     },
//     magenta: {
//       default: "rgb(237, 33, 124)",
//       50: "rgb(24, 2, 12)",
//       100: "rgb(47, 4, 23)",
//       200: "rgb(94, 8, 47)",
//       300: "rgb(142, 11, 70)",
//       400: "rgb(189, 15, 93)",
//       500: "rgb(236, 19, 117)",
//       600: "rgb(240, 66, 144)",
//       700: "rgb(244, 113, 172)",
//       800: "rgb(247, 161, 200)",
//       900: "rgb(251, 208, 227)",
//       950: "rgb(253, 231, 241)",
//     },
//     blue: {
//       default: "rgb(0, 174, 239)",
//       50: "rgb(0, 19, 26)",
//       100: "rgb(0, 37, 51)",
//       200: "rgb(0, 75, 102)",
//       300: "rgb(0, 112, 153)",
//       400: "rgb(0, 150, 204)",
//       500: "rgb(0, 187, 255)",
//       600: "rgb(51, 201, 255)",
//       700: "rgb(102, 214, 255)",
//       800: "rgb(153, 228, 255)",
//       900: "rgb(204, 241, 255)",
//       950: "rgb(229, 248, 255)",
//     },
//     green: {
//       default: "rgb(57, 181, 74)",
//       50: "rgb(6, 19, 8)",
//       100: "rgb(12, 39, 16)",
//       200: "rgb(24, 78, 32)",
//       300: "rgb(37, 116, 47)",
//       400: "rgb(49, 155, 63)",
//       500: "rgb(61, 194, 79)",
//       600: "rgb(100, 206, 114)",
//       700: "rgb(139, 218, 149)",
//       800: "rgb(177, 231, 185)",
//       900: "rgb(216, 243, 220)",
//       950: "rgb(236, 249, 237)",
//     },
//   },
// };
// const config = {
//   darkMode: "class",
//   content: [
//     "./pages/**/*.{ts,tsx}",
//     "./components/**/*.{ts,tsx}",
//     "./app/**/*.{ts,tsx}",
//     "./src/**/*.{ts,tsx}",
//     "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}", // Tremor module
//   ],
//   prefix: "",
//   theme: {
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px",
//       },
//     },
//     extend: {
//       fontFamily: {
//         iransans: ["var(--font-iransans)"],
//       },
//       textColor: {
//         ...myColors,
//         ...colors,
//       },
//       backgroundColor: {
//         ...myColors,
//         ...colors,
//       },
//       borderColor: {
//         ...myColors,
//         ...colors,
//       },
//       boxShadowColor: {
//         ...myColors,
//         ...colors,
//       },
//       fill: {
//         ...myColors,
//         ...colors,
//       },
//       stroke: {
//         ...myColors,
//         ...colors,
//       },
//       ringColor: {
//         ...myColors,
//         ...colors,
//       },
//       ringOffsetColor: {
//         ...myColors,
//         ...colors,
//       },
//       accentColor: {
//         ...myColors,
//         ...colors,
//       },
//       gradientColorStops: {
//         ...myColors,
//         ...colors,
//       },
//       patterns: {
//         ...myColors,
//         ...colors,
//       },
//       keyframes: {
//         rainbow: {
//           "0%": { "background-position": "0%" },
//           "100%": { "background-position": "200%" },
//         },
//         "reverse-spin": {
//           from: {
//             transform: "rotate(360deg)",
//           },
//         },
//         "caret-blink": {
//           "0%,70%,100%": { opacity: "1" },
//           "20%,50%": { opacity: "0" },
//         },
//         "accordion-down": {
//           from: { height: "0" },
//           to: { height: "var(--radix-accordion-content-height)" },
//         },
//         "accordion-up": {
//           from: { height: "var(--radix-accordion-content-height)" },

//           to: { height: "0" },
//         },
//         move: {
//           to: {
//             strokeDashoffset: "1000",
//           },
//         },

//         aurora: {
//           from: {
//             backgroundPosition: "50% 50%, 50% 50%",
//           },
//           to: {
//             backgroundPosition: "350% 50%, 350% 50%",
//           },
//         },
//         moveHorizontal: {
//           "0%": {
//             transform: "translateX(-50%) translateY(-10%)",
//           },
//           "50%": {
//             transform: "translateX(50%) translateY(10%)",
//           },
//           "100%": {
//             transform: "translateX(-50%) translateY(-10%)",
//           },
//         },
//         moveInCircle: {
//           "0%": {
//             transform: "rotate(0deg)",
//           },
//           "50%": {
//             transform: "rotate(180deg)",
//           },
//           "100%": {
//             transform: "rotate(360deg)",
//           },
//         },
//         moveVertical: {
//           "0%": {
//             transform: "translateY(-50%)",
//           },
//           "50%": {
//             transform: "translateY(50%)",
//           },
//           "100%": {
//             transform: "translateY(-50%)",
//           },
//         },
//       },
//       animation: {
//         rainbow: "rainbow var(--speed, 2s) infinite linear",
//         "reverse-spin": "reverse-spin 1s linear infinite",
//         "caret-blink": "caret-blink 1.25s ease-out infinite",

//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//         aurora: "aurora 60s linear infinite",

//         first: "moveVertical 30s ease infinite",
//         second: "moveInCircle 20s reverse infinite",
//         third: "moveInCircle 40s linear infinite",
//         fourth: "moveHorizontal 40s ease infinite",
//         fifth: "moveInCircle 20s ease infinite",
//       },
//       screens: {
//         mobileMax: { max: "500px" },
//         // => @media (min-width: 640px) { ... }

//         laptopMax: { max: "1279px" },
//         // => @media (min-width: 1024px) { ... }

//         desktopMax: { max: "1280px" },
//         // => @media (min-width: 1280px) { ... }

//         // --------------------Min--------------------------

//         mobileMin: { min: "500px" },
//         // => @media (min-width: 640px) { ... }

//         laptopMin: { min: "1279px" },
//         // => @media (min-width: 1024px) { ... }

//         desktopMin: { min: "1280px" },
//         // => @media (min-width: 1280px) { ... }

//         max2xl: { max: "1536px" },
//       },
//       colors: {
//         // light mode
//         tremor: {
//           brand: {
//             faint: "#eff6ff", // blue-50
//             muted: "#bfdbfe", // blue-200
//             subtle: "#60a5fa", // blue-400
//             DEFAULT: "#3b82f6", // blue-500
//             emphasis: "#1d4ed8", // blue-700
//             inverted: "#ffffff", // white
//           },
//           background: {
//             //@ts-ignore
//             muted: withOpacity("--secondary"), // custom
//             //@ts-ignore
//             subtle: withOpacity("--secbuttn"), // gray-800
//             //@ts-ignore
//             DEFAULT: withOpacity("--secondary"), // gray-900
//             emphasis: "#d1d5db", // gray-300
//           },
//           border: {
//             DEFAULT: "#e5e7eb", // gray-200
//           },
//           ring: {
//             DEFAULT: "#e5e7eb", // gray-200
//           },
//           content: {
//             //@ts-ignore
//             subtle: withOpacity("--accent"), // gray-600 // icons
//             //@ts-ignore
//             DEFAULT: withOpacity("--primary"), // gray-500 // bg
//             //@ts-ignore
//             emphasis: withOpacity("--primary"), // gray-200 // text
//             strong: "#f9fafb", // gray-50
//             //@ts-ignore
//             inverted: withOpacity("--secondary"), // black
//           },
//         },
//         // dark mode
//         "dark-tremor": {
//           brand: {
//             faint: "#0B1229", // custom
//             muted: "#172554", // blue-950
//             subtle: "#1e40af", // blue-800
//             DEFAULT: "#3b82f6", // blue-500
//             emphasis: "#60a5fa", // blue-400
//             inverted: "#030712", // gray-950
//           },
//           background: {
//             //@ts-ignore
//             muted: withOpacity("--secondary"), // custom
//             //@ts-ignore
//             subtle: withOpacity("--secbuttn"), // gray-800
//             //@ts-ignore
//             DEFAULT: withOpacity("--secondary"), // gray-900
//             emphasis: "#d1d5db", // gray-300
//           },
//           border: {
//             DEFAULT: "#1f2937", // gray-800
//           },
//           ring: {
//             DEFAULT: "#1f2937", // gray-800
//           },
//           content: {
//             //@ts-ignore
//             subtle: withOpacity("--accent"), // gray-600 // icons
//             //@ts-ignore
//             DEFAULT: withOpacity("--primary"), // gray-500 // bg
//             //@ts-ignore
//             emphasis: withOpacity("--primary"), // gray-200 // text
//             strong: "#f9fafb", // gray-50
//             //@ts-ignore
//             inverted: withOpacity("--secondary"), // black
//           },
//         },
//       },
//       boxShadow: {
//         // light
//         "tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
//         "tremor-card":
//           "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
//         "tremor-dropdown":
//           "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
//         // dark
//         "dark-tremor-input": "0 1px 2px 0 rgb(0 0 0 / 0.05)",
//         "dark-tremor-card":
//           "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
//         "dark-tremor-dropdown":
//           "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
//       },
//       borderRadius: {
//         "tremor-small": "0.375rem",
//         "tremor-default": "0.5rem",
//         "tremor-full": "9999px",
//       },
//       fontSize: {
//         // "tremor-label": ["0.75rem"],
//         "tremor-default": ["0.875rem", { lineHeight: "1.25rem" }],
//         "tremor-title": ["1.125rem", { lineHeight: "1.75rem" }],
//         "tremor-metric": ["1.875rem", { lineHeight: "2.25rem" }],
//       },
//     },
//   },

//   plugins: [
//     require("tailwind-scrollbar")({ nocompatible: true }),
//     require("@headlessui/tailwindcss"),
//     require("tailwindcss-bg-patterns"),
//     require("tailwindcss-animate"),

//     addVariablesForColors,
//     function ({
//       matchUtilities,
//       addUtilities,
//       addComponents,
//       theme,
//     }: {
//       matchUtilities: any;
//       addUtilities: any;
//       addComponents: any;
//       theme: any;
//     }) {
//       matchUtilities({
//         "ss-text": (value: any) => {
//           const rows: any = [];
//           const rowItems = value.split("/");
//           rowItems.forEach((item: any) => {
//             const length = Number(item.trim());
//             // Unicode escape sequences joined by full-width spaces
//             rows.push(
//               Array.from({ length })
//                 .map((_) => `\\3000`)
//                 .join(""),
//             );
//           });
//           // Unicode escape sequences joined by newlines
//           const content = rows.join(`\\A`);
//           return {
//             "&:empty:before": {
//               "--tw-content": `"${content}"`,
//             },
//           };
//         },
//       });
//       addUtilities({
//         ".popover-content-width-same-as-its-trigger": {
//           width: "var(--radix-popover-trigger-width)",
//           "max-height": "var(--radix-popover-content-available-height)",
//         },
//         '[class*="ss-text-"]': {
//           "&:empty:before": {
//             content: "var(--tw-content)",
//             "background-color": "rgba(var(--primary),0.5)",
//             "white-space": "break-spaces",
//             "word-break": "break-all",
//             "border-radius": "10px",
//             "box-decoration-break": "clone",
//             "-webkit-box-decoration-break": "clone",
//           },
//           "&.truncate:empty:before": {
//             "white-space": "normal",
//           },
//         },
//         ".ss-object:empty": {
//           "background-color": "rgba(var(--primary),0.5)",
//         },

//         ".mask-contain": {
//           "-webkit-mask-size": "contain",
//           "mask-size": "contain",
//         },
//         ".mask-no-repeat": {
//           "-webkit-mask-repeat": "no-repeat",
//           "mask-repeat": "no-repeat",
//         },
//         ".mask-center": {
//           "-webkit-mask-position": "center",
//           "mask-position": "center",
//         },
//       });
//       addComponents({
//         ".text-contrast": {
//           background: "inherit",
//           backgroundClip: "text",
//           color: "transparent",
//           filter: "invert(1) grayscale(1) contrast(9)",
//         },
//       });
//     },
//   ],
// } satisfies Config;

// export default config;
// function addVariablesForColors({ addBase, theme }: any) {
//   let allColors = flattenColorPalette(theme("colors"));
//   let newVars = Object.fromEntries(
//     Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
//   );

//   addBase({
//     ":root": newVars,
//   });
// }
