const lint = "eslint --ignore-path .gitignore --ext .jsx,.js,.ts,.tsx '.'";

const scripts = {
  build: 'NODE_ENV=production next build',

  dev: 'next dev',

  lint,

  lintFix: `${lint} --fix`,

  start: 'next start',
};

module.exports = {
  scripts,
};
