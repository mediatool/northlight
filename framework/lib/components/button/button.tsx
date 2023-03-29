import React, { forwardRef } from 'react'
import { Button as ChakraButton } from '@chakra-ui/react'
import { ButtonProps } from './types'

/**
 * @see {@link https://northlight.dev/reference/button}
 *
 * @example (Example)
 * Example:
 * (?
 * +const variants = ['link', 'success', 'default', 'danger', 'brand', 'ghost']
 *
 * const ExampleButton = () => {
 *  const [currentVariant, setCurrentVariant ] = useState(0)
 *  const [ isLoading, setIsLoading ] = useState(false)
 *
 * const handleClick = () => {
 * setIsLoading(true)
 * setTimeout(() => {
 * setCurrentVariant((prev) => prev === 5 ? 0 : prev + 1)
 * setIsLoading(false)
 * }, 400)
 *
 * }
 *
 *  return (
 * <Button variant={variants[currentVariant]}
 * isLoading={isLoading} onClick={handleClick} loadingText="Saving...">
 * Save changes
 * </Button>
 * )
 *
 * }
 *
 * render(<ExampleButton/>)
 * ?)
 */
export const Button = forwardRef(
  ({ variant = 'default', children, ...rest }: ButtonProps, ref: any) => (
    <ChakraButton variant={ variant } ref={ ref } { ...rest }>
      { children }
    </ChakraButton>
  )
)
