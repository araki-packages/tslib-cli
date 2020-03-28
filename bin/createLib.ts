#!/usr/bin/env node
import * as grobby from 'globby';
import * as fs from 'fs';
import * as path from 'path';
import { packageGenerator } from './generator/packageGenerator';
import { ROOT_PATH, PROJECT_PATH } from './utils/device';
import { certainlyCreateFile } from './utils/output';
import * as chalk from 'chalk';
import { COPY_FILES } from './constants/files';

const main = async () => {
  const generatedPackage = await packageGenerator();
  
  const copyFiles = COPY_FILES.map((value) => {
    const rootPath = getFullPath(value);
    if (value === 'package.json') {
      return {
        rootPath: rootPath,
        projectPath: path.resolve(__dirname, '..', PROJECT_PATH.dir, PROJECT_PATH.base, value),
        description: JSON.stringify(generatedPackage, null, 2),
      }
    }
    
    return {
      rootPath: rootPath,
      projectPath: path.resolve(PROJECT_PATH.dir, PROJECT_PATH.base, value),
      description: fs.readFileSync(rootPath).toString(),
    }
  });

  copyFiles.forEach(({projectPath, description}) => {
    const result = certainlyCreateFile(projectPath, description);
    console.log( result.isComplete ? chalk.bgCyan(result.message) : chalk.bgRed(result.message))
  })
}

const getFullPath = (dir: string) => {
  const inputRelativeDir = path.parse(dir);
  return path.resolve(ROOT_PATH.dir, inputRelativeDir.dir, inputRelativeDir.base);
}
main();