import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    /* Colors */

    --Primary: #A9C5BA;

    --NeutralLight: #FFFFFF;
    --Neutral: #707070;
    --NeutralDark: #000000;

    --Alert: #EC3137;

    /* Typography */

    font-size: 10px;

    --Logo: 800 3.5rem/4.8rem 'Sarabun', sans-serif;

    --Heading1: 400 3rem/3.8rem 'Mulish', sans-serif;
    --Heading2: 400 2rem/2.5rem 'Mulish', sans-serif;
    --Body: 400 1.6rem/2rem 'Mulish', sans-serif;
    --BodySmall: 400 1.4rem/1.8rem 'Mulish', sans-serif;
    --Button: 700 1.6rem/2rem 'Mulish', sans-serif;

    --ButtonAlternative: 400 1.8rem/2.2rem 'Lato', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: var(--NeutralLight);
  }

  body, button, input {
    font: var(--Body);
    color: var(--NeutralDark);
    -webkit-font-smoothing: antialiased;
  }

  ol, ul {
	list-style: none;
  }

  img, svg {
    display: block;

    max-width: 100%;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
