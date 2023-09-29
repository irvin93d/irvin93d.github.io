module.exports = {
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:svelte/recommended",
    "prettier",
  ],
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    extraFileExtensions: [".svelte"],
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
    "simple-import-sort",
    "sort-keys-fix",
    "typescript-sort-keys",
    "sort-destructure-keys",
  ],
  root: true,
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      {
        fixStyle: "inline-type-imports",
        prefer: "type-imports",
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    semi: ["warn", "never"],
    "simple-import-sort/exports": "warn",
    "simple-import-sort/imports": "warn",
    "sort-destructure-keys/sort-destructure-keys": "warn",
    "sort-keys-fix/sort-keys-fix": "warn",

    "svelte/sort-attributes": "warn",
    "typescript-sort-keys/interface": "warn",
    "typescript-sort-keys/string-enum": "warn",
  },
}
