<div align="center">

[<img src="https://localazy.com/directus9/assets/9fc36b9c-81b7-4dbf-bd82-b64cd984090f" width="285" height="50" alt="Localazy" >](https://localazy.com)

### 📦 `@localazy/prettier-config`

_A standardized Prettier configuration for Localazy projects_

</div>

## 🚀 Quick Start

Install the package using your preferred package manager:

```shell
# Using npm
npm install prettier @localazy/prettier-config --save-dev

# Using yarn
yarn add prettier @localazy/prettier-config --dev

# Using pnpm
pnpm add prettier @localazy/prettier-config --save-dev
```

## 🔧 Usage

Add `prettier` directly inside your `package.json` file:

```json
{
  "prettier": "@localazy/prettier-config"
}
```

### 📄 Extending the Configuration

To customize your Prettier configuration, create or update your `.prettierrc.js` file. You can extend the default
settings provided by `@localazy/prettier-config` while overriding specific options as needed.

```javascript
import localazyConfig from '@localazy/prettier-config';

/** @type {import('prettier').Config} */
const config = {
  ...localazyConfig,
};

export default config;
```

## 📚 Documentation

For more details on Prettier configuration, visit the [Prettier documentation](https://prettier.io/docs/).

## 📜 License

This project is licensed under the MIT License.

See [LICENSE](LICENSE) for details.
