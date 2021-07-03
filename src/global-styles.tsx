import { Global } from '@emotion/react';

const Base = () => (
  <Global
    styles={{
      '*': {
        boxSizing: 'inherit',
        MozOsxFontSmoothing: 'grayscale',
        WebkitFontSmoothing: 'antialiased',

        '&::after': {
          boxSizing: 'inherit',
        },

        '&::before': {
          boxSizing: 'inherit',
        },
      },

      '#__next, body, html': {
        minHeight: '100vh',
      },

      a: {
        color: 'inherit',
      },

      body: {
        color: '#333',
        fontFamily:
          'system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        lineHeight: 1.5,
      },

      'body, html': {
        margin: 0,
      },

      code: {
        fontFamily:
          'SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace',
      },

      html: {
        boxSizing: 'border-box',
      },

      ul: {
        paddingLeft: 28,
      },
    }}
  />
);

export default Base;
