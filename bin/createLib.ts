#!/usr/bin/env node
import * as fs from 'fs';
import * as path from 'path';
import { packageGenerator } from './generator/packageGenerator';
import { ROOT_PATH, PROJECT_PATH } from './utils/device';
import { certainlyCreateFile } from './utils/output';
const chalk = require('chalk');
import { COPY_FILES } from './constants/files';
import { IS_DEBUG } from './constants/config';

const main = async () => {
  const generatedPackage = await packageGenerator();
  
  const copyFiles = COPY_FILES.map((value) => {
    const rootPath = getFullPath(value);
    const debugValue = IS_DEBUG ? `test/${value}` : value;
    const dir = path.resolve(PROJECT_PATH.dir, PROJECT_PATH.base, debugValue);

    if (value === 'package.json') {
      return {
        rootPath: rootPath,
        projectPath: dir,
        description: generatedPackage,
      }
    }
    
    return {
      rootPath: rootPath,
      projectPath: dir,
      description: fs.readFileSync(rootPath).toString(),
    }
  });

  copyFiles.forEach(({projectPath, description}) => {
    const result = certainlyCreateFile(projectPath, description);
    console.log( result.isComplete ? chalk.bgBlue(result.message) : chalk.bgRed(result.message))
  })
}

const getFullPath = (dir: string) => {
  const inputRelativeDir = path.parse(dir);
  return path.resolve(ROOT_PATH.dir, inputRelativeDir.dir, inputRelativeDir.base);
}
main();