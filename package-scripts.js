const build = 'NODE_ENV=production next build';

const lint = "eslint --ignore-path .gitignore --ext .jsx,.js,.ts,.tsx '.'";

const scripts = {
  build,

  dev: 'NODE_ENV=development next dev',

  lint,

  lintFix: `${lint} --fix`,

  start: 'next start',
};

module.exports = {
  scripts,
};
