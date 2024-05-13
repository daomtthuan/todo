/** @typedef {Partial<import('prettier').Config & import('prettier-plugin-jsdoc').JsdocOptions>} Config */

/** @type {Config} */
export default {
  plugins: ['prettier-plugin-jsdoc'],

  experimentalTernaries: true,
  printWidth: 160,
  singleQuote: true,

  jsdocSeparateTagGroups: true,
  tsdoc: true,
};
