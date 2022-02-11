import { useLayoutEffect, useState } from 'react'
import { DateTuple } from '../types'
import { datesAreNotInSameMonthOrYear } from '../util'

/*
  Dayzed calculates an offset based on the current month.
  Given a scenario where the current month is February, passing 1 as offset to Dayzed, it will
  return the dates for March.
  However passing 1 as offset by default, did not work out for the use-case of selecting presets.
  If the user selected a preset for Q1 (Jan - March), with a static offset of 1 for the right
  calendar, the right calendar would render April.
  This is why this hook is needed.
*/
export const useCalendarOffset = (
  dateRange: Partial<DateTuple>,
  initialOffset: number
) => {
  const [ start, end ] = dateRange
  const [ offset, setOffset ] = useState(initialOffset)

  /*
    Since useEffect runs after react has rendered, it caused the right calendar to flicker
    if an end date was selected.
    useLayoutEffect fixes this because it runs before browser painting, preventing flickering.
  */
  useLayoutEffect(() => {
    if (
      end &&
      datesAreNotInSameMonthOrYear(start, end)
    ) {
      setOffset(0)
    }
  }, [ dateRange ])

  return [
    offset,
    setOffset,
  ] as const
}
