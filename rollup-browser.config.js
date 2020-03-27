import Base from './rollup-base.config';
import pkg from './package.json';

export default {
  ...Base,
  external: [],
  output: [{
    file: pkg.iife.file,
    format: 'iife',
    name: pkg.iife.name,
    globals: {},
  }],
};
