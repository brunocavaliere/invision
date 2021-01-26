import styled from 'styled-components';

export const Container = styled.label`
  input {
    margin-top: 4px;
    padding: 12px 20px;

    border: none;
    border-bottom: 1px solid var(--Neutral);

    &::placeholder {
      opacity: 0.48;
    }
  }
`;
