import React, { forwardRef } from 'react'
import { Button as ChakraButton } from '@chakra-ui/react'
import { Spinner } from '../spinner'
import { ButtonProps } from './types'

const SpinnerSizeMap = {
  xs: 'xs',
  sm: 'sm',
  md: 'sm',
  lg: 'md',
}

/**
 * @see {@link https://northlight.dev/reference/button}
 *
 * @example
 * (?
        <Button
          variant="success"
          leftIcon={ <Icon as={ FolderCheckDuo } /> }
          rightIcon={ <Icon as={ PlusDuo } /> }
        >
          Create folder
        </Button>
 * ?)
 *
 * @example (Example)
 * (?
 * +
 * const variants = ['link', 'success', 'default', 'danger', 'brand', 'ghost']
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
 * }, 300)
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
  <As extends React.ElementType = typeof ChakraButton>(
    { variant = 'default', children, size = 'md', ...rest }: ButtonProps<As>,
    ref: any
  ) => (
    <ChakraButton
      variant={ variant }
      ref={ ref }
      size={ size }
      spinner={ (
        <Spinner
          size={ SpinnerSizeMap[size] }
        />
        ) }
      { ...rest }
    >
      { children }
    </ChakraButton>
  )
)
