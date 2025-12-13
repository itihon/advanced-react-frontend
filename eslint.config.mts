// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import reactHooks from 'eslint-plugin-react-hooks';
import css from "@eslint/css";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { ignores: ["dist", "node_modules"] },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  reactHooks.configs.flat.recommended,
  storybook.configs['flat/recommended'],
  { settings: { react: { version: 'detect' } } },
  {
    files: ["config/jest/**/*.{js,cjs}", "**/__mocks__/**/*.{js,cjs}"],
    languageOptions: {
      sourceType: "commonjs", // allow require/module.exports
      globals: {
        require: "readonly",
        module: "writable",
      },
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "no-undef": "off",
    },
  },
  { files: ["**/*.css"], plugins: { css }, language: "css/css", extends: ["css/recommended"] },
  { rules: { "react/react-in-jsx-scope": "off", "react/prop-types": "off" } },
]);
