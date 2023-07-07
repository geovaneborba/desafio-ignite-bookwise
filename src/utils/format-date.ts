import { format, isToday, isYesterday } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function formatDate(date: Date) {
  if (isToday(date)) {
    return 'Hoje'
  } else if (isYesterday(date)) {
    return 'Ontem'
  } else {
    return format(date, 'PPP', {
      locale: ptBR,
    })
  }
}
