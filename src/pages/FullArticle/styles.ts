import styled from 'styled-components'

export const Section = styled.section`
  position: relative;
  width: 54rem;
  max-width: 54rem;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 0.625rem;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme['base-profile']};
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 130%;
    margin-block: 1.25rem 0.5rem;
  }
`

export const Footer = styled.footer`
  color: ${(props) => props.theme['base-span']};
  display: flex;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`

export const HeaderLink = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  text-transform: uppercase;
  color: ${(props) => props.theme['blue-base']};
  font-size: 0.75rem;
  font-weight: 700;

  a {
    text-decoration: none;
    color: ${(props) => props.theme['blue-base']};
    border-bottom: 1px solid transparent;
    &:hover {
      border-bottom: 1px solid ${(props) => props.theme['blue-base']};
    }
  }
`

export const Article = styled.article`
  max-width: 54rem;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  margin-bottom: 8rem;

  h2 {
    margin-top: 1rem;
    margin-left: 0.8rem;
  }

  h3,
  h4 {
    margin-top: 0.5rem;
  }

  p,
  li {
    color: ${(props) => props.theme['base-subtitle']};
  }
  p {
    margin-top: 0.4rem;
  }

  ul,
  ol {
    padding-left: 2rem;
  }

  pre {
    font-family: 'Fira Code', monospace;
    padding: 1rem;
    border-radius: 8px;
    background-color: ${(props) => props.theme['base-profile']};
    code {
      font-size: 0.875rem;
    }
  }

  a {
    color: ${(props) => props.theme['blue-base']};
  }
`
