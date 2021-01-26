import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;

  margin: 0 auto;
  padding: 12px 60px;

  background: var(--Neutral);
  border: none;
  border-radius: 100px;

  font: var(--Button);
  color: var(--NeutralLight);

  & svg {
    margin-right: 20px;
  }
`;
