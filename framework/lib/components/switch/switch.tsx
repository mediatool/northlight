import React from 'react'
import { Switch as ChakraSwitch } from '@chakra-ui/react'
import { SwitchProps } from './types.ts'

/**
 * @see SwitchField
 * @see {@link https://northlight.dev/reference/switch}
 *
 * @example (Example)
 * Mainly used for forms, however this component is controlled by
 *  a value prop and an onChange callback
 *
 * (?
 * () => {
 * const [ advancedMode, setAdvancedMode ] = useState(false)
 *
 * return (
 * <Stack p="2">
  * <Label size="sm" htmlFor="advanced-mode-switch">Advanced mode</Label>
  * <Switch name="vegan-checkbox" onChange={() => setAdvancedMode((prev) => !prev)}
  *  value={advancedMode} />
 * </Stack>
 * )
 * }
 * ?)
 */
export const Switch = ({
  value,
  onChange,
  name,
  size = 'md',
  ...rest
}: SwitchProps) => (
  <ChakraSwitch
    size={ size }
    id={ name }
    isChecked={ value }
    onChange={ onChange }
    { ...rest }
  />
)
