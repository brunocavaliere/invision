import styled from 'styled-components';

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  z-index: 20;

  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.64);

  animation: bgOpacity 0.5s;

  @keyframes bgOpacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  & div {
    background: var(--NeutralLight);

    padding: 32px 64px;

    border-radius: 5px;

    animation: modalUpToDown 1s;

    @keyframes modalUpToDown {
      from {
        margin-top: -100%;
      }
      to {
        margin-top: 0;
      }
    }

    & > h3 {
      font: var(--Heading2);
      color: var(--NeutralDark);
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: stretch;

  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0 6%;

  max-width: 960px;
  width: 100%;

  & > a {
    margin-left: auto;
    margin-bottom: 72px;

    font: var(--Logo);
    color: var(--NeutralDark);
  }

  h1 {
    margin-bottom: 88px;

    font: var(--Heading1);
    color: var(--Neutral);
  }

  form {
    display: flex;
    flex-direction: column;

    max-width: 432px;
    width: 100%;

    & > a {
      margin-left: auto;
      margin-bottom: 30px;

      font: var(--BodySmall);
      color: var(--Neutral);
    }

    & > .divider {
      display: flex;
      align-items: center;

      margin: 40px auto 52px;

      font: var(--BodySmall);
      color: var(--Neutral);

      &::after {
        content: '';

        display: block;

        width: 150px;
        height: 0.5px;

        margin-left: 20px;

        background: var(--Neutral);
      }

      &::before {
        content: '';

        display: block;

        width: 150px;
        height: 0.5px;

        margin-right: 20px;

        background: var(--Neutral);
      }
    }

    button.buttonGoogle {
      display: flex;
      align-items: center;

      margin: 0 auto;
      padding: 12px 30px;

      background: var(--NeutralLight);
      border: none;
      border-radius: 100px;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);

      font: var(--ButtonAlternative);

      & svg {
        margin-right: 20px;
      }
    }

    & div:last-child {
      margin: 40px auto 0;

      font: var(--BodySmall);
      color: var(--Neutral);

      a {
        color: var(--Primary);
        text-decoration: underline;
      }
    }
  }
`;

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  background-color: var(--Primary);

  @media (max-width: 1120px) {
    & {
      display: none;
    }
  }
`;
