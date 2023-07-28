import { formatGap } from '../../../lib/dateFns'
import { CardWrapper, Header } from './styles'
import { Link } from 'react-router-dom'

interface CardProps {
  issueNumber: number
  title: string
  date: string
  preview: string
}

export function Card({ issueNumber, title, date, preview }: CardProps) {
  const daysGap = formatGap(date)
  return (
    <CardWrapper>
      <Link to={`/article/${issueNumber}`}>
        <Header>
          <h3>{title}</h3>
          <span>{daysGap}</span>
        </Header>
        <p>{preview}...</p>
      </Link>
    </CardWrapper>
  )
}
