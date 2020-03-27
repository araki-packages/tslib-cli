import Base from './rollup-base.config';

const name = 'RollupTypeScriptBabel';
export default {
  ...Base,
  external: [],
  output: [{
    file: './dist/browser.js',
    format: 'iife',
    name,
    globals: {},
  }],
};
