import styled from 'styled-components'

export const ComponentWrapper = styled.div`
  max-width: 54rem;
  margin: 0 auto;
  margin-top: 4.5rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2 {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.125rem;
      font-weight: 700;
    }

    span {
      color: var(--base-span, #7b96b2);
      font-size: 0.875rem;
      font-style: normal;
    }

    div {
      display: flex;
      align-items: center;
      gap: 1.5rem;

      > button {
        cursor: pointer;
        background-color: transparent;
        border: 0;
        color: ${(props) => props.theme['blue-base']};
      }
    }
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  margin-top: 0.75rem;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme['base-border']};
  background: ${(props) => props.theme['base-input']};

  &:not(:disabled):focus {
    border: 1px solid ${(props) => props.theme['blue-base']};
    box-shadow: 0;
    outline: 0;
  }
`
