import * as grobby from 'globby';
import * as fs from 'fs';
import * as path from 'path';
import { packageGenerator } from './generator/packageGenerator';
import { ROOT_PATH, PROJECT_PATH } from './utils/device';
import { certainlyCreateFile } from './utils/output';

const main = async () => {
  const copyTargetFiles = await grobby('', {
    gitignore: true,
    expandDirectories: ['*', '.*'],
  });
  const generatedPackage = await packageGenerator();
  const copyFiles = copyTargetFiles.map((value) => {
    const rootPath = getFullPath(value);
    console.log(value);
    if (value === 'package.json') {
      return {
        rootPath: rootPath,
        projectPath: path.resolve(PROJECT_PATH.dir, PROJECT_PATH.base, value),
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
    certainlyCreateFile(projectPath, description);
  })
}


const getFullPath = (dir: string) => {
  const inputRelativeDir = path.parse(dir);
  return path.resolve(ROOT_PATH.dir, inputRelativeDir.dir, inputRelativeDir.base);
}
main();