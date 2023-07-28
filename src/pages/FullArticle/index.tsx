import { Cover } from '../../components/Cover'
import {
  CalendarBlank,
  CaretLeft,
  GithubLogo,
  ChatCircle,
  Link as LinkIcon,
} from 'phosphor-react'
import { Article, Footer, HeaderLink, Section } from './styles'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { useContext } from 'react'
import { BlogContext, IssueType } from '../../context/Blog'
import { formatGap } from '../../lib/dateFns'

export function FullArticle() {
  const { id } = useParams()

  const {
    user: { login },
    getFullIssue,
  } = useContext(BlogContext)

  const issue = getFullIssue(Number(id)) || ({} as IssueType)
  const timeStamp = issue.createdAt
    ? issue.createdAt.slice(0, 10)
    : String(new Date())
  const gap = formatGap(timeStamp)

  return (
    <>
      <Cover />

      <Section>
        <header>
          <HeaderLink>
            <CaretLeft size={12} color="#3294F8" />
            <Link to={'/'}>Voltar</Link>
          </HeaderLink>
          <HeaderLink>
            <a href={issue?.htmlUrl} target="_blank" rel="noreferrer">
              ver no github
            </a>
            <LinkIcon size={14} color="#3294F8" />
          </HeaderLink>
        </header>

        <h1>{issue?.title}</h1>

        <Footer>
          <span>
            <GithubLogo weight="fill" size={18} /> {login}
          </span>
          <span>
            <CalendarBlank weight="fill" size={18} /> {gap}
          </span>
          <span>
            <ChatCircle weight="fill" size={18} />{' '}
            {issue?.comments === 1
              ? `1 comentário`
              : `${issue?.comments} comentários`}
          </span>
        </Footer>
      </Section>

      <Article>
        <ReactMarkdown>{issue?.text}</ReactMarkdown>
      </Article>
    </>
  )
}
