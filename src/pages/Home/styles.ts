import styled from 'styled-components'

export const PageWrapper = styled.div`
  width: 100%;
  margin-bottom: 14rem;
`

export const Profile = styled.section`
  position: relative;
  width: 54rem;
  max-width: 54rem;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 0.625rem;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => props.theme['base-profile']};
  display: flex;
  gap: 2rem;

  > img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }

  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 1rem;
    line-height: 160%;
  }

  aside {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }
`

export const ProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 130%;
`

export const HeaderLink = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 1.6;
  display: flex;
  align-items: center;
  gap: 0.3rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme['blue-base']};
    border-bottom: 1px solid transparent;
    :hover {
      border-bottom: 1px solid ${(props) => props.theme['blue-base']};
      transition: border 0.2s;
    }
  }
`

export const Footer = styled.footer`
  color: ${(props) => props.theme['base-subtitle']};
  display: flex;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`
