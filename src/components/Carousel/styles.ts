import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  flex-direction: column;

  padding: 112px 128px 0;

  h2 {
    margin: 30px auto 20px;

    font: var(--Heading1);
    color: var(--NeutralLight);
  }

  p {
    max-width: 560px;
    width: 100%;

    margin: 0 auto 30px;

    text-align: center;
    font: var(--Heading2);
    color: var(--NeutralLight);
  }
`;
