# express 脚手架

## 1.增加 bable-node

```javascript
npm install babel-cli -D
npm install babel-preset-env -D
npm i @babel/core -D
touch .babelrc
vim .babelrc
// .babelrc
{
  "presets": [
    ["env", {
      "targets": {
        "node": "6.3"
      }
    }]
  ],
  "compact": false
}
```

## 2.加入 husky

> 1.安装依赖包

```javascript
  npm i eslint prettier lint-staged eslint-plugin-prettier @tencent/eslint-config-tencent -D
```

> 2.配置.eslintrc.js 和 .prettierrc.js

```javascript
touch .eslintrc.js;
vim .eslintrc.js;
module.exports = {
  globals: { logger: true },
  extends: ['@tencent/eslint-config-tencent', '@tencent/eslint-config-tencent/prettier'],
  ignorePatterns: ['!.*', 'dist', 'node_modules'],
  rules: {
    'no-underscore-dangle': 0,
    quotes: [
      'warn',
      'single',
      {
        allowTemplateLiterals: false,
      },
    ],
  },
};
touch .prettierrc.js;
vim .prettierrc.js;
module.exports = {
  printWidth: 120, // 换行字符串阈值
  tabWidth: 2, // 设置工具每一个水平缩进的空格数
  useTabs: false,
  semi: true, // 句末是否加分号
  vueIndentScriptAndStyle: true,
  singleQuote: true, // 用单引号
  trailingComma: 'all', // 最后一个对象元素加逗号
  bracketSpacing: true, // 对象，数组加空格
  jsxBracketSameLine: true, // jsx > 是否另起一行
  arrowParens: 'always', // (x) => {} 是否要有小括号
  requirePragma: false, // 不需要写文件开头的 @prettier
  insertPragma: false, // 不需要自动在文件开头插入 @prettier
  .prettierrc.js
};
touch .eslintignore
vim .eslintignore
  dist
  package.json
  .eslintrc.js
  .prettierrc.js
```

> 3.加入 husky

```javascript
  npx husky-init && npm install
  // 修改生成的.husky目录里pre-commit文件
  npm run test ===> npm run lint-staged
  // package.json增加
  "lint-staged": {
    "**/*.{js,jsx,ts,tsx}": "npm run lint-staged:js",
    "**/*.{js,jsx,tsx,ts,less,md,json}": [
      "prettier --write"
    ]
  },
  "scripts": {
    ******
    "lint-staged": "lint-staged --allow-empty",
    "lint-staged:js": "eslint --ext .js,.jsx,.ts,.tsx ",
    // 脚本进行格式化
    "check": "prettier --check .",
    "lint": "eslint . --fix",
    "format": "prettier --write .",
    ****
  }
```

## 3.打包

> 1. 安装依赖
>    npm i cross-env rimraf npm-run-all -D 2.配置打包脚本

```javascript
vim package.json
  ******
  "scripts": {
    "build": "npm-run-all clean build:server",
    "release": "npm-run-all clean build release:deps release:package",
    "build:server": "cross-env BABEL_ENV=production babel ./ -d ./dist --copy-files --ignore './node_modules'",
    "clean": "rimraf ./dist release",
    "release:deps": "cross-env-shell \"cd dist && npm install --production\"",
    "release:package": "cross-env-shell \"cd dist && zip -q -r $npm_package_name.zip * $npm_package_name\""
  }
  ******
```

## 4.运行

### 1.本地启动

> npm i
> npm run dev

### 2.本地构建

> npm run build

### 3.本地打包

> npm run release
