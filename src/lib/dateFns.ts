import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const formatGap = (dateStr: string): string => {
  const date = new Date(dateStr)
  return formatDistanceToNow(date, { addSuffix: true, locale: ptBR })
}
