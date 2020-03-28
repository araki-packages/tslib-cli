import camelCase from 'camelcase';
import * as path from 'path';
import { PROJECT_PATH, packageJSON } from "../utils/device";
import { readLineString } from '../utils/input';
const sortPackageJson = require('sort-package-json');

export const packageGenerator = async () => {
  const packageName = await readLineString('package name', PROJECT_PATH.base);
  const defaultOutputPackage = path.parse(packageName).name;
  const bowserPackageName = await readLineString('browser class name', camelCase(defaultOutputPackage, {pascalCase: true}));
  const version = await readLineString('version: ', '1.0.0');
  const description = await readLineString('description: ', '');
  const gitRepository = await readLineString('git repository', '');
  const keywordsString = await readLineString('keywords', '');
  const author = await readLineString('author', '');

  const ignoreFields = [
    'dependencies',
    'scripts',
  ];
  const parsedRepo = (gitRepository != '') ? {
    repository: {
      type: 'git',
      url: gitRepository,
    }
  } : {};

  const scriptsCommand = JSON.parse(`{
    "type-check": "tsc --noEmit",
    "type-check:watch": "npm run type-check -- --watch",
    "build:types": "tsc --emitDeclarationOnly",
    "build:js": "rollup -c",
    "build:web": "rollup -c rollup-browser.config.js",
    "prebuild": "rimraf dist",
    "build": "npm run build:types && npm run build:js && npm run build:web"
  }`);

  ignoreFields.forEach((ignore) => {
    delete packageJSON[ignore];
  });
  const parsedPackage = {...packageJSON, ...{
    name: packageName,
    version,
    description,
    keywords: keywordsString.split(','),
    author,
    llfe: {
      name: bowserPackageName,
      file: `dist/${defaultOutputPackage}.min.js`,
    },
    main: `dist/${defaultOutputPackage}.cjs.js`,
    module: `dist/${defaultOutputPackage}.esm.js`,
    scripts: scriptsCommand,
  }, ...parsedRepo}
  return sortPackageJson(JSON.stringify(parsedPackage, null, 2));
}


