const lint = "eslint --ignore-path .gitignore --ext .jsx,.js,.ts,.tsx '.'";

const scripts = {
  build: 'next build',

  dev: 'next dev',

  lint,

  'lint-fix': `${lint} --fix`,

  start: 'next start',

  test: 'yarn automated jest --coverage',
};

module.exports = { scripts };
