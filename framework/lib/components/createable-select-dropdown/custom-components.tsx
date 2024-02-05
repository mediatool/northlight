import React from 'react'
import { chakraComponents } from 'chakra-react-select'
import { PlusSolid } from '@northlight/icons'
import { Box, Flex, Icon } from '@chakra-ui/react'

export const customComponents = {
  Option: ({ children, ...props }: any) => (
    <chakraComponents.Option { ...props }>
      <>
        { props.data.isCreation ? (
          <Flex mr={ 3 } width={ 1.5 } mb={ 0.5 } justifyContent="center" alignItems="center">
            <Icon mb="4px" as={ PlusSolid } color="brand" />
          </Flex>
        ) : (
          <Box mr={ 3 } width={ 1.5 } />
        ) }
        { children }
      </>
    </chakraComponents.Option>
  ),
}
