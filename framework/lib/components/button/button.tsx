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
 * @example
 * ### Use the `isLoading` prop to show a loading spinner
 * (?
        <Button
            variant="success"
            isLoading={ true }
            loadingText="Creating folder..."
        >
          Create folder
        </Button>
 * ?)
 *
 * @example
 * ### Also use the `spinner` prop to show a custom spinner
 * (?
        <Button
            variant="success"
            isLoading={ true }
            loadingText="Creating folder..."
            spinner={ <Spinner color="text.success" /> }
        >
          Creating folder
        </Button>
 * ?)
 *
 * @example (Example)
 * (?
 * +
 * const variants = ['link', 'success', 'default', 'danger', 'brand', 'accent',
 *  'ghost', 'ai', 'outline', 'brandSubdued', 'solid']
 *
 * const ExampleButton = () => {
 *  const [currentVariant, setCurrentVariant ] = useState(0)
 *  const [ isLoading, setIsLoading ] = useState(false)
 *
 * const handleClick = () => {
 * setIsLoading(true)
 * setTimeout(() => {
 * setCurrentVariant((prev) => prev === variants.length - 1 ? 0 : prev + 1)
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
 *
 * @example (Example)
 * Use LinkOverlay to turn the button into a link
 *
 * (?
 * <LinkBox>
  * <LinkOverlay as={NavLink} to="/" />
  * <Button variant="link">Go to home page</Button>
  * </LinkBox>
 * ?)
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>((
  { variant = 'default', children, size = 'md', ...rest },
  ref
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
