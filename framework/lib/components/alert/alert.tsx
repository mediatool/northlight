import React from 'react'
import { Alert as ChakraAlert } from '@chakra-ui/react'
import { AlertProps } from './types'

/**
 * @example (Example)
 * ## Usage
 * <br />
 * Northlight exports 4 alert related components: <br />
 * <br />
 * `Alert`: The wrapper for alert components. <br />
 * `AlertIcon`: The visual icon for the alert that changes based on the status prop. <br />
 * `AlertTitle`: The title of the alert to be announced by screen readers. <br />
 * `AlertDescription`: The description of the alert to be announced by screen readers. <br />
 * <br />
 * (?
 * +
 * const toastIconMap = {
 *   success: CheckCircleSolid,
 *   warning: AlertTriangleSolid,
 *   error: AlertCircleSolid,
 *   danger: AlertCircleSolid,
 *   info: BellSolid,
 *   ai: BrightnessSolid,
 *   default: HelpCircleSolid,
 *   ghost: HelpCircleSolid,
 * }
 *
 * const variants = [
 *   "default",
 *   "success",
 *   "warning",
 *   "error",
 *   "info",
 *   "ai",
 *   "ghost",
 * ]
 *
 * const Example = () => (
 *   <SimpleGrid columns={2} columnGap="2" rowGap="4">
 *
 *     {variants.map((variant) => (
 *       <Alert variant={variant}>
 *         <AlertIcon as={toastIconMap[variant]} />
 *         <AlertTitle>Title</AlertTitle>
 *         <AlertDescription>Description</AlertDescription>
 *       </Alert>
 *     ))}
 *   </SimpleGrid>
 * )
 * render(<Example />)

 * ?)
 */

export const Alert = ({
  variant = 'success',
  children,
  ...rest
}: AlertProps) => (
  <ChakraAlert variant={ variant } { ...rest }>
    { children }
  </ChakraAlert>
)
