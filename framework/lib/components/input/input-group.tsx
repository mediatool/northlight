import React, {
  Dispatch,
  SetStateAction,
  createContext,
  forwardRef,
  useMemo,
  useState,
} from 'react'
import {
  InputGroup as ChakraInputGroup,
  InputGroupProps,
} from '@chakra-ui/react'

export const LeftElementContext = createContext<
| { leftWidth: number, setLeftWidth: Dispatch<SetStateAction<number>> }
| undefined
>(undefined)

export const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>(
  ({ children, ...rest }, ref) => {
    const [ leftWidth, setLeftWidth ] = useState(0)

    const contextValue = useMemo(
      () => ({
        leftWidth,
        setLeftWidth,
      }),
      [ leftWidth ]
    )

    return (
      <LeftElementContext.Provider value={ contextValue }>
        <ChakraInputGroup ref={ ref } { ...rest }>
          { children }
        </ChakraInputGroup>
      </LeftElementContext.Provider>
    )
  }
)
