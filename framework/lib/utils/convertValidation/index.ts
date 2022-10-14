export function convertValidation<FormValues> (validation: Record<keyof FormValues, string>) {
  const reactHookFormValidation: any = {}
  Object.keys(validation).forEach((key) => {
    reactHookFormValidation[key] = {
      message: validation[key as keyof FormValues],
    }
  })
  return reactHookFormValidation
}
