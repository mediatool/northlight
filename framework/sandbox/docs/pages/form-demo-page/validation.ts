const d = new Date()
const isCurrentDate = (date: string) => {
  const year = d.getFullYear()
  const month = d.getMonth() < 10
    ? `0${d.getMonth() + 1}`
    : d.getMonth() + 1
  const day = d.getDate()

  return date === `${year}-${month}-${day}`
}

export const validation = [
  {
    prop: 'firstName',
    predicate: (v: any) => v === 'error',
    error: 'That is an error',
  },
  {
    prop: 'date',
    predicate: isCurrentDate,
    error: 'Cant select current date',
  },
  {
    prop: 'sports',
    predicate: (v: any) => v.includes('basketball'),
    error: 'Nobody likes basketball!',
  },
  { prop: 'dogs', predicate: (v: any) => v > 10, error: 'Too many dogs' },
  {
    prop: 'newsletter',
    predicate: (v: any) => v,
    error: 'Our newsletter sucks',
  },
]
