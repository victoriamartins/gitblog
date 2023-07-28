import { useContext } from 'react'
import { Card } from '../Card'
import { Main } from './styles'
import { BlogContext } from '../../../context/Blog'
import removeMarkdown from 'markdown-to-text'

export function Articles() {
  const { issues } = useContext(BlogContext)
  return (
    <Main>
      {issues.map((issue) => {
        return (
          <Card
            key={Math.random()}
            issueNumber={issue.issueNumber}
            title={issue.title}
            date={issue.createdAt.slice(0, 10)}
            preview={removeMarkdown(issue.text).slice(0, 171)}
          />
        )
      })}
    </Main>
  )
}
