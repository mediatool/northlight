import { useFormContext } from '../../hooks'
import { SetValueOptionsType } from './types.ts'

export const useSetValueRefreshed = () => {
  const { setValue, watch } = useFormContext()

  const setValueRefreshed = (name: any, value: any, options: SetValueOptionsType) => {
    watch(name)
    setValue(name, value, options)
  }
  return setValueRefreshed
}
