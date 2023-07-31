import styled from 'styled-components'

export const Main = styled.main`
  margin: 0 auto;
  margin-top: 3rem;
  width: 54rem;
  max-width: 54rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    width: 90%;
  }
`
