import { css } from '@emotion/react';

export const GlobalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *,
  button,
  input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  html,
  body {
    ul {
      list-style-type: none;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
  }

  :root {
    --primary: #36393f;
    --secondary: #2f3136;
    --tertiary: rgb(32, 34, 37);
    --quaternary: #292b2f;
    --quinary: #393d42;
    --senary: #828386;

    --white: #fff;
    --gray: #8a8c90;
    --chat-input: rgb(64, 68, 75);
    --symbol: #74777a;

    --notification: #f84a4b;
    --discord: #5865f2;
    --mention-detail: #f9a839;
    --mention-message: #413f3f;

    --link: #5d80d6;

    --rocketseat: #6633cc;
  }
`;
