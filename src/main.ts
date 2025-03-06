import type { Config } from 'prettier';
import prettierPluginOrganizeImports from 'prettier-plugin-organize-imports';
import prettierPluginPackageJson from 'prettier-plugin-packagejson';
import prettierPluginSh from 'prettier-plugin-sh';

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
  ],
};

export default config;
