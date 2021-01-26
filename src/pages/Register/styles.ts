import styled from 'styled-components';

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
    margin-bottom: 50px;

    font: var(--Heading1);
    color: var(--Neutral);
  }

  form {
    display: flex;
    flex-direction: column;

    max-width: 432px;
    width: 100%;

    label {
      display: flex;
      flex-direction: column;

      margin-bottom: 20px;

      font: var(--BodySmall);
      color: var(--Neutral);

      input {
        margin-top: 4px;
        padding: 12px 20px;

        border: none;
        border-bottom: 1px solid var(--Neutral);

        &::placeholder {
          opacity: 0.48;
        }
      }
    }

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

    & div:nth-child(7),
    & div:nth-child(8) {
      max-width: 320px;
      width: 100%;

      margin: 40px auto 0;

      text-align: center;
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
