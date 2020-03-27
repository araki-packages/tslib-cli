import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import chalk from 'chalk';
const extensions = [ '.js', '.jsx', '.ts', '.tsx' ];
const regNoDepPackage = /\.+\//;

export default {
  input: './src/index.ts',
  external(id) {
    if (!(regNoDepPackage.test(id))) {
      console.log(chalk.bgRed(`-- ${id} `));
    } else {
      console.log(chalk.bgCyan(`++ ${id} `));
    }
    return !(regNoDepPackage.test(id));
  },
  plugins: [
    resolve({ extensions }),
    commonjs(),
    babel({ extensions, include: ['src/**/*']}),
  ]
};
