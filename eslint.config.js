// import { FlatCompat } from "@eslint/eslintrc";
// import tseslint from "typescript-eslint";

// const compat = new FlatCompat({
//   baseDirectory: import.meta.dirname,
// });

// export default tseslint.config(
//   {
//     ignores: [".next"],
//   },
//   ...compat.extends("next/core-web-vitals"),
//   {
//     files: ["**/*.ts", "**/*.tsx"],
//     extends: [
//       ...tseslint.configs.recommended,
//       ...tseslint.configs.recommendedTypeChecked,
//       ...tseslint.configs.stylisticTypeChecked,
//     ],
//     rules: {
//       "@typescript-eslint/array-type": "off",
//       "@typescript-eslint/consistent-type-definitions": "off",
//       "@typescript-eslint/consistent-type-imports": [
//         "warn",
//         { prefer: "type-imports", fixStyle: "inline-type-imports" },
//       ],
//       "@typescript-eslint/no-unused-vars": [
//         "warn",
//         { argsIgnorePattern: "^_" },
//       ],
//       "@typescript-eslint/require-await": "off",
//       "@typescript-eslint/no-misused-promises": [
//         "error",
//         { checksVoidReturn: { attributes: false } },
//       ],
//     },
//   },
//   {
//     linterOptions: {
//       reportUnusedDisableDirectives: true,
//     },
//     languageOptions: {
//       parserOptions: {
//         projectService: true,
//       },
//     },
//   },
// );

// /** @type {import("eslint").Linter.Config} */
// const config = {
//   parser: "@typescript-eslint/parser",
//   parserOptions: {
//     project: true,
//   },
//   plugins: ["@typescript-eslint"],
//   extends: [
//     "next/core-web-vitals",
//     "plugin:@typescript-eslint/recommended-type-checked",
//     "plugin:@typescript-eslint/stylistic-type-checked",
//   ],
//   rules: {
//     // These opinionated rules are enabled in stylistic-type-checked above.
//     // Feel free to reconfigure them to your own preference.
//     "@typescript-eslint/array-type": "off",
//     "@typescript-eslint/consistent-type-definitions": "off",

//     "@typescript-eslint/consistent-type-imports": [
//       "warn",
//       {
//         prefer: "type-imports",
//         fixStyle: "inline-type-imports",
//       },
//     ],
//     "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
//   },
// };

// module.exports = config;

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

/** @type {import("eslint").Linter.Config} */
const config = {
  // overrides: [
  //   {
  //     extends: [
  //       "plugin:@typescript-eslint/recommended-requiring-type-checking",
  //     ],
  //     files: ["*.ts", "*.tsx"],
  //     parserOptions: {
  //       project: path.join(__dirname, "tsconfig.json"),
  //     },
  //   },
  // ],
  // parser: "@typescript-eslint/parser",
  // parserOptions: {
  //   project: path.join(__dirname, "tsconfig.json"),
  // },
  // rules: {
  //   "@typescript-eslint/consistent-type-imports": [
  //     "warn",
  //     {
  //       prefer: "type-imports",
  //       fixStyle: "inline-type-imports",
  //     },
  //   ],
  //   "@typescript-eslint/no-unused-vars": "off", //["warn", { argsIgnorePattern: "^_" }],
  //   "@typescript-eslint/no-empty-function": "off",
  //   "@typescript-eslint/no-unsafe-member-access": "off",
  //   "@typescript-eslint/no-unsafe-assignment": "off",
  //   "@typescript-eslint/no-unsafe-return": "off",
  // },
};
//"plugin:@typescript-eslint/recommended"
module.exports = config;
