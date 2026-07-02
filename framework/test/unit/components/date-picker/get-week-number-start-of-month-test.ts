import { expect } from 'chai'
import {
  getDisplayWeek,
  getWeekNumberAtStartOfMonth,
} from '../../../../lib/components/date-picker/components/calendar/components/get-week-number-start-of-month'

// NB: `month` is 1-indexed (January === 1).
describe('getWeekNumberAtStartOfMonth', () => {
  it('returns week 1 for a January that starts its own first ISO week', () => {
    expect(getWeekNumberAtStartOfMonth(2024, 1)).to.equal(1)
    expect(getWeekNumberAtStartOfMonth(2025, 1)).to.equal(1)
  })

  it('computes mid-year week numbers', () => {
    expect(getWeekNumberAtStartOfMonth(2024, 2)).to.equal(5)
    expect(getWeekNumberAtStartOfMonth(2024, 6)).to.equal(22)
    expect(getWeekNumberAtStartOfMonth(2024, 12)).to.equal(48)
  })

  it('handles a January that still belongs to the previous ISO year', () => {
    // 2023-01-01 falls in ISO week 52 of 2022
    expect(getWeekNumberAtStartOfMonth(2023, 1)).to.equal(52)
  })

  it('handles years whose January starts in a week-53 previous year', () => {
    expect(getWeekNumberAtStartOfMonth(2021, 1)).to.equal(53)
    expect(getWeekNumberAtStartOfMonth(2027, 1)).to.equal(53)
  })
})

describe('getDisplayWeek', () => {
  it('returns the base week for the first row (weekIndex 0)', () => {
    expect(getDisplayWeek(1, 0, 2024, 1)).to.equal(1)
  })

  it('increments the base week for subsequent rows', () => {
    expect(getDisplayWeek(1, 3, 2024, 1)).to.equal(4)
  })

  it('wraps past week 52 back to the start of the next year', () => {
    expect(getDisplayWeek(50, 3, 2024, 6)).to.equal(1)
    expect(getDisplayWeek(52, 1, 2024, 6)).to.equal(1)
  })

  it('keeps week 53 for years that have one', () => {
    expect(getDisplayWeek(52, 1, 2026, 12)).to.equal(53)
  })

  it('wraps beyond week 53 correctly', () => {
    expect(getDisplayWeek(52, 2, 2020, 6)).to.equal(2)
  })
})
