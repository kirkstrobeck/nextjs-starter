const lint = "eslint --ignore-path .gitignore --ext .jsx,.js,.ts,.tsx '.'";

const build = 'NODE_ENV=production next build';

const scripts = {
  build,

  ci: `concurrently "${lint}" "${build}"`,

  dev: 'next dev',

  lint,

  lintFix: `${lint} --fix`,

  start: 'next start',
};

module.exports = {
  scripts,
};
