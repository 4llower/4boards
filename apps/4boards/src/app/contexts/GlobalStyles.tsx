import { Global, css } from '@emotion/react';

import emotionReset from 'emotion-reset';

export function GlobalStyles() {
  return (
    <Global
      styles={css`
        ${emotionReset}
        *, *::after, *::before {
          box-sizing: border-box;
          -moz-osx-font-smoothing: grayscale;
          -webkit-font-smoothing: antialiased;
          font-smoothing: antialiased;
        }
        html,
        body {
          font-family: 'Roboto Condensed';
          font-size: 16px;
          color: #444;
        }
      `}
    />
  );
}
