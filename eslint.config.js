// eslint.config.js (ESLint 9+)
import js from "@eslint/js";
import next from "eslint-config-next";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import importPlugin from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import prettierConfig from "eslint-config-prettier"; // flat-compatible

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  js.configs.recommended,
  ...next(), // Next.js flat config

  // TypeScript
  ...tseslint.configs.recommended,

  // React
  react.configs.recommended,

  // React Hooks (no official flat config; wire in plugin + rules)
  {
    plugins: { "react-hooks": reactHooks },
    rules: {
      ...reactHooks.configs?.recommended?.rules, // fallback if available
      // If the line above is undefined in your plugin version, keep at least:
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn"
    }
  },

  // a11y
  jsxA11y.configs.recommended,

  // import (recommended + TS)
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,

  // Your customizations
  {
    settings: { react: { version: "detect" } },
    plugins: {
      "unused-imports": unusedImports,
      "simple-import-sort": simpleImportSort
    },
    rules: {
      "unused-imports/no-unused-imports": "warn",
      "unused-imports/no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",
      "import/order": "off",
      "import/no-unresolved": "off",
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off"
    }
  },

  // Prettier last to disable conflicting stylistic rules
  prettierConfig
];
