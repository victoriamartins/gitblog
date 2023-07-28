import {
  Footer,
  HeaderLink,
  PageWrapper,
  Profile,
  ProfileHeader,
} from './styles'
import { GithubLogo, Buildings, Users, Link } from 'phosphor-react'
import { Articles } from './Articles'
import { FormContainer } from './FormContainer'
import { Cover } from '../../components/Cover'
import { useContext } from 'react'
import { BlogContext } from '../../context/Blog'

export function Home() {
  const { user } = useContext(BlogContext)
  const { name, bio, company, login, followers, htmlUrl } = user

  return (
    <PageWrapper>
      <Cover />

      <Profile>
        <img src={`https://github.com/${login}.png`} alt="" />
        <aside>
          <ProfileHeader>
            {' '}
            {/* --------- TITLE WITH NAME AND LINK --------- */}
            <h1>{name}</h1>
            <HeaderLink>
              <a href={htmlUrl} target="_blank" rel="noreferrer">
                github
              </a>
              <Link size={14} color="#3294F8" />
            </HeaderLink>
          </ProfileHeader>

          <p>{bio}</p>

          <Footer>
            <span>
              <GithubLogo weight="fill" size={18} /> {login}
            </span>
            <span>
              <Buildings weight="fill" size={18} /> {company}
            </span>
            <span>
              <Users weight="fill" size={18} /> {followers} seguidores
            </span>
          </Footer>
        </aside>
      </Profile>

      <FormContainer />

      <Articles />
    </PageWrapper>
  )
}
