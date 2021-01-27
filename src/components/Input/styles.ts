import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.label<ContainerProps>`
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

    transition: all 0.4s;

    &::placeholder {
      opacity: 0.48;
    }
  }

  ${(props) =>
    props.isFocused &&
    css`
      & {
        color: var(--Primary);

        input {
          border-bottom: 1px solid var(--Primary);
        }
      }
    `}

  ${(props) =>
    props.isErrored &&
    css`
      & {
        color: var(--Neutral);
      }

      & p {
        color: var(--Alert);
      }

      &  input {
          border-bottom-color: var(--Alert);
        }
      }
    `}
`;
