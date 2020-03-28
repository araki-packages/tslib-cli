import * as path from 'path';

// 生成される側のパス
export const PROJECT_PATH = path.parse(process.cwd());

// 生成する法のパス
export const ROOT_PATH = path.parse(path.resolve(__dirname, '..'));

// package json
export const packageJSON = require('../../package.json');