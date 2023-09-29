/** @type {import('prettier').Config} */
module.exports = {
  plugins: [require("prettier-plugin-svelte"), require("prettier-plugin-tailwindcss")],
  arrowParens: "avoid",
  printWidth: 100,
  singleQuote: false,
  semi: false,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
  pluginSearchDirs: ["."],
  overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
}
