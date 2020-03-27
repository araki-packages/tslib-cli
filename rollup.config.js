import Base from './rollup-base.config';
import pkg from './package.json';

//const externals = Object.keys(pkg.dependencies);
export default {
  ...Base,
  output: [{
    file: pkg.main,
    format: 'cjs'
  }, {
    file: pkg.module,
    format: 'es',
  }],
};
