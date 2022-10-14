export const createValidator = (validationSpecs: any) => (values: any) => {
  const errors: any = {}

  validationSpecs.forEach((validationSpec: any) => {
    const { prop, predicate, error, allValues = false } = validationSpec
    if (predicate(allValues ? values : values[prop])) {
      errors[prop] = error
    }
  })

  return errors
}
