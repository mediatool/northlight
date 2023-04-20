const d = new Date()
const isCurrentDate = (date: string) => {
  const year = d.getFullYear()
  const month = d.getMonth() < 10
    ? `0${d.getMonth() + 1}`
    : d.getMonth() + 1
  const day = d.getDate()

  return date === `${year}-${month}-${day}`
}

export const validation = (values: any) => {
  const errors: any = {}
  if (values.firstName.nested === 'error') {
    errors.firstName = {
      nested: {
        message: 'That is an error',
      },
    }
  }
  if (isCurrentDate(values.date)) {
    errors.date = { message: "Can't select current date" }
  }
  if (values.sports.includes('basketball')) {
    errors.sports = { message: 'Nobody likes basketball' }
  }
  if (values.dogs > 10) {
    errors.dogs = { message: 'Too many dogs' }
  }
  if (values.newsletter) {
    errors.newsletter = { message: 'Our newsletter sucks' }
  }
  return errors
}
