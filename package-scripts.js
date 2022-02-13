const eslint = "eslint --ignore-path .gitignore --ext .jsx,.js,.ts,.tsx '.'";

const typeCheck = `tsc --noEmit`;

const scripts = {
  build: 'NODE_ENV=production next build',

  dev: 'next dev',

  eslintFix: `${eslint} --fix`,

  lint: `concurrently "${eslint}" "${typeCheck}"`,

  start: 'next start',

  typeCheck,
};

module.exports = {
  scripts,
};
