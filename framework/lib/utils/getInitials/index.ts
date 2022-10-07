export const getInitials = (name: string) => {
  const [ firstName, lastName ] = name.toUpperCase().split(' ')
  return firstName && lastName
    ? `${firstName[0]}${lastName[0]}`
    : firstName[0]
}
