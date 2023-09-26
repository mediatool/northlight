import React from 'react'
import { Checkbox as ChakraCheckbox } from '@chakra-ui/react'
import { CheckboxProps } from './types.ts'

/**
 * @see CheckboxField
 * @see {@link https://northlight.dev/reference/checkbox}
 *
 * @example (Example)
 * Mainly used for forms, however this component is controlled by
 *  a value prop and an onChange callback
 *
 * (?
 * +
 * const MyForm = () => {
 * const [ isVegan, setIsVegan ] = useState(false)
 *
 * return (
 * <Stack p="2">
 * <Label size="sm" htmlFor="vegan-checkbox">Are you vegan</Label>
 * <Checkbox name="vegan-checkbox" onChange={() => setIsVegan((prev) => !prev)} value={isVegan} />
 * </Stack>
 *
 * )
 * }
 *
 * render(<MyForm />)
 *
 * ?)
 *
 */
export const Checkbox = ({
  value,
  onChange,
  name,
  size = 'md',
  variant = 'default',
  ...rest
}: CheckboxProps) => (
  <ChakraCheckbox
    size={ size }
    id={ name }
    onChange={ onChange }
    isChecked={ value }
    variant={ variant }
    { ...rest }
  />
)
