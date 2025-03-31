import { Portal, PortalProps } from '@chakra-ui/react'
import React from 'react'

interface RenderInPortalProps extends PortalProps {
  shouldRenderInPortal: boolean
  children: JSX.Element
}

export const RenderInPortal =
    ({ shouldRenderInPortal, children, ...rest }: RenderInPortalProps) => {
      if (!shouldRenderInPortal) return children
      return (
        <Portal { ...rest }>
          { children }
        </Portal>
      )
    }
