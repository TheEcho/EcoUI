import { capitalize } from 'lodash'
import calendar from 'dayjs/plugin/calendar'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'
import utc from 'dayjs/plugin/utc'
import dayjs, { Dayjs } from 'dayjs'
import 'dayjs/locale/fr'

dayjs.extend(calendar)
dayjs.extend(duration)
dayjs.extend(relativeTime)
dayjs.extend(utc)

dayjs.locale('fr')

export const sortByDateAsc = (dateA: Dayjs, dateB: Dayjs): number =>
  dayjs.utc(dateA).diff(dateB)
export const sortByDateDesc = (dateA: Dayjs, dateB: Dayjs): number =>
  dayjs.utc(dateB).diff(dateA)

export type DateInput = string | Date | Dayjs

export const formatFullDate = (
  date: DateInput,
  monthLength: 'short' | 'long' = 'short',
): string => {
  const month = monthLength === 'short' ? 'MMM' : 'MMMM'
  return dayjs.utc(date).format(`DD ${month} YYYY`)
}

export const formatFullMonth = (date: DateInput): string => {
  return capitalize(dayjs.utc(date).format(`MMMM YYYY`))
}

/**
 * Format date (GraphQL) as a string
 */
export const formatDate = (date: Dayjs): string =>
  dayjs.utc(date).format('DD/MM/YYYY')

/**
 * Format Date as 'T1', 'T2', etc...
 */
export const formatQuarter = (date: DateInput, withYear = false): string =>
  dayjs.utc(date).format(`[T]Q${withYear ? ' YYYY' : ''}`)

/**
 * Returns raw utc date
 */
export const parseUtc = (date: Dayjs, format?: string): Dayjs =>
  dayjs.utc(date, format ?? undefined)

export const parseUtcDate = (date: Dayjs): Date => dayjs.utc(date).toDate()

export const formatToCalendar = (timestamp: string): string => {
  return dayjs.utc(timestamp).calendar()
}
export const formatToFromNow = (timestamp: string): string => {
  return dayjs.utc(timestamp).fromNow()
}
export const daysFromNow = (timestamp: string): number => {
  const today = dayjs.utc().startOf('day')
  const date = dayjs.utc(timestamp).startOf('day')
  return Math.round(dayjs.duration(date.diff(today)).asDays())
}

export const isBeforeNow = (date: Dayjs): boolean =>
  dayjs.utc(date).isBefore(dayjs())
export const isAfterNow = (date: Dayjs): boolean =>
  dayjs.utc(date).isAfter(dayjs())

export const isSame = (date1: Dayjs, date2: Dayjs): boolean =>
  dayjs.utc(date1).isSame(date2)
