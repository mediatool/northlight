import React from 'react'
import {
  GroupBase,
  SelectComponentsConfig,
  chakraComponents,
} from 'chakra-react-select'
import { PlusSolid } from '@northlight/icons'
import { Icon } from '../icon'
import { Box } from '../box'
import { Flex } from '../flex'
import { Text } from '../text'
import { Option } from '../select'

const { Option: ChakraOption } = chakraComponents

type CustomComponents<T extends string> =
SelectComponentsConfig<Option<T>, false, GroupBase<Option<T>>>

export const getCustomComponents = <T extends string = string>(): CustomComponents<T> => (
  {
    Option: ({ children, ...props }) => (
      <ChakraOption { ...props }>
        { props.data.isCreation && (
          <Flex
            mr={ 3 }
            width={ 1.5 }
            mb={ 0.5 }
            justifyContent="center"
            alignItems="center"
          >
            <Icon as={ PlusSolid } color="brand" />
          </Flex>
        ) }
        { !props.data.isCreation && <Box mr={ 3 } width={ 1.5 } /> }
        <Text
          color={ props.data.isCreation ? 'text.brand' : 'text.default' }
          fontWeight={ props.data.isCreation ? 'semibold' : 'normal' }
        >
          { children }
        </Text>
      </ChakraOption>
    ),
  }
)
