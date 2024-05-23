const mondayFirstWeekDays = [ 'M', 'T', 'W', 'T', 'F', 'S', 'S' ]
const sundayFirstWeekDays = [ 'S', 'M', 'T', 'W', 'T', 'F', 'S' ]

export const getWeekdays = (firstDayOfWeek: 'monday' | 'sunday') =>
  (firstDayOfWeek === 'monday' ? mondayFirstWeekDays : sundayFirstWeekDays)
