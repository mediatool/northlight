import React from 'react'
import { test } from 'ramda'
import { Box, Button, HStack, Text, VisuallyHidden } from '@northlight/ui'

export const TokenPreview = ({
  type,
  value,
}: {
  type: string | null
  value: string
}) => {
  switch (type) {
    case 'color':
      return (
        <Box
          boxSize="8"
          bgColor={ value }
          borderRadius="xs"
          borderStyle="solid"
          borderColor="gray.500"
          borderWidth="xs"
        />
      )
    case 'boxShadow':
      return <Box boxSize="8" boxShadow={ value } />
    case 'borderRadius':
      return (
        <Box
          boxSize="8"
          borderRadius={ value }
          borderStyle="solid"
          borderColor="gray.500"
          borderWidth="xs"
        />
      )
    case 'borderWidths':
      return (
        <Box
          boxSize="8"
          borderStyle="solid"
          borderColor="gray.500"
          borderWidth={ value }
        />
      )
    case 'borders':
      return (
        <Box
          boxSize="8"
          borderStyle="solid"
          borderColor="gray.500"
          border={ test(/solid/, value) ? value : undefined }
          borderWidth={ value }
        />
      )
    case 'opacity':
      return (
        <Button cursor="auto" opacity={ value }>
          Opacity: { value }
        </Button>
      )
    case 'space':
      return (
        <HStack spacing={ value }>
          <Box boxSize="8" bgColor="bg.overlayer" />
          <Box boxSize="8" bgColor="bg.overlayer" />
        </HStack>
      )
    case 'sizes':
      return <Box boxSize={ value } bgColor="bg.overlayer" />
    case 'fontSize':
      return (
        <Text fontSize={ value }>
          The quick brown fox jumps over the lazy dog
        </Text>
      )
    case 'fontFamily':
      return (
        <Text fontFamily={ value }>
          The quick brown fox jumps over the lazy dog
        </Text>
      )
    case 'fontWeight':
      return (
        <Text fontWeight={ value }>
          The quick brown fox jumps over the lazy dog
        </Text>
      )
    case 'letterSpacing':
      return (
        <Text letterSpacing={ value }>
          The quick brown fox jumps over the lazy dog
        </Text>
      )
    case 'lineHeight':
      return (
        <Text lineHeight={ value }>
          The quick brown fox jumps over the lazy dog
        </Text>
      )
    default:
      return <VisuallyHidden />
  }
}
