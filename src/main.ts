import type { Config } from 'prettier';
import * as prettierPluginAstro from 'prettier-plugin-astro';
import prettierPluginOrganizeImports from 'prettier-plugin-organize-imports';
import prettierPluginPackageJson from 'prettier-plugin-packagejson';
import * as prettierPluginSh from 'prettier-plugin-sh';

const config: Config = {
  printWidth: 120,
  singleQuote: true,
  jsxSingleQuote: true,
  htmlWhitespaceSensitivity: 'ignore',
  plugins: [
    // Sort fields in package.json
    prettierPluginPackageJson,
    // Format shell scripts
    prettierPluginSh,
    // Sort and remove unused imports
    prettierPluginOrganizeImports,
    // Format Astro files
    prettierPluginAstro,
  ],
};

export default config;
