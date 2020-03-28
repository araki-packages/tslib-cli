import grobby from 'globby';
// import path from 'path';
// const root = path.resolve(__dirname, '..');

const main = async () => {
  const copyTargetFiles = await grobby('', {
    gitignore: true,
    expandDirectories: ['*', '!node_modules/*']
  });
  console.log(copyTargetFiles);
}

main();