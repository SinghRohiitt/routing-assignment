import js from "@eslint/js";
import react from "eslint-plugin-react";

export default [
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        module: "readonly",
      },
    },
    plugins: { react },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.flat.recommended.rules,
      ...react.configs.flat["jsx-runtime"].rules,
      "react/prop-types": "off",
    },
  },
];
