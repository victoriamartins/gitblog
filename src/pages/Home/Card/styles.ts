import styled from 'styled-components'

export const CardWrapper = styled.div`
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  border: 2px solid transparent;
  padding: 2rem;
  p {
    overflow: hidden;
    color: ${(props) => props.theme['base-text']};
    text-overflow: ellipsis;
    font-size: 1rem;
  }
  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
  }
  a {
    text-decoration: none;
  }
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  h3 {
    width: 80%;
    color: ${(props) => props.theme['base-title']};
  }
  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
    text-align: right;
  }
`
