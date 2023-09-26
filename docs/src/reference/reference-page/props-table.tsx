import React from 'react'
import { isEmpty, isNil, propOr, slice } from 'ramda'
import { PropItemType } from 'react-docgen-typescript'
import { palette } from '@northlight/tokens'
import { AlertCircleDuo } from '@northlight/icons'
import {
  Box,
  Code,
  Divider,
  Flex,
  HStack,
  Icon,
  Lead,
  Link,
  P,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Small,
  Stack,
  getContrastColor,
  useDisclosure,
} from '@northlight/ui/ts'

export interface FileLink {
  fileName: string
  name: string
}
export interface PropsTableProps {
  name: string
  description: string
  type: PropItemType
  file?: FileLink
  isRequired: boolean
}

const matchPageLink =
  /\b(?:https?|ftp):\/\/[a-z0-9-+&@#/%?=~_|!:,.;]*[a-z0-9-+&@#/%=~_|]/gi

export const PropsTable = ({
  name,
  description,
  type,
  isRequired,
  file,
}: PropsTableProps) => {
  const fileLink = !isNil(file)
    ? `Declared in ${file.fileName} by ${file.name}`
    : ''

  const { isOpen, onOpen, onClose } = useDisclosure()

  const isLinkAvailable = fileLink.includes('framework/lib')

  const typeName =
    type.name === 'enum'
      ? slice(2, Infinity, type.value.reduce(
        (acc: string, curr: { value: string }) => `${acc} | ${curr.value}`,
        ''
      ))
      : type.name

  const textWithLink = description.replace(
    matchPageLink,
    (url) =>
      `<a href="${url}" target="_blank" rel="noopener noreferrer" style="color: ${palette.blue['600']}; text-decoration: underline;">${url}</a>`
  )

  return (
    <Stack spacing="0">
      <HStack spacing="3">
        <Lead>{ name }</Lead>
        { isRequired && (
        <HStack spacing="1">
          <Icon as={ AlertCircleDuo } size="xs" color="text.warning" />
          <Small>Required</Small>
        </HStack>
        ) }
      </HStack>
      <Divider />
      <Stack pt="2" spacing="2">
        { !isEmpty(description) && (
          <Flex>
            <Box minW="32"><P>Description</P></Box>
            <P dangerouslySetInnerHTML={ { __html: textWithLink } } />
          </Flex>
        ) }
        { !isEmpty(type) && (
          <Flex>
            <Box minW="32">
              <P>Type</P>
            </Box>
            <Popover isOpen={ isOpen } onClose={ onClose }>
              <PopoverTrigger>
                <Code
                  h="min-content"
                  onMouseEnter={ onOpen }
                  onMouseLeave={ onClose }
                >
                  { typeName }
                </Code>
              </PopoverTrigger>
              <PopoverContent
                onMouseLeave={ onClose }
                onMouseEnter={ onOpen }
                bgColor="bg.tertiary.default"
              >
                <PopoverBody>
                  { isLinkAvailable && (
                    <Link
                      sx={ { color: getContrastColor('bg.tertiary.defualt') } }
                      isExternal={ true }
                      href={ `https://github.com/mediatool/northlight/tree/master/${propOr('', 'fileName', file)}` }
                    >
                      { fileLink }
                    </Link>
                  ) }
                  { !isLinkAvailable && (
                    <P sx={ { color: getContrastColor('bg.tertiary.default') } }>{ fileLink }</P>
                  ) }
                </PopoverBody>
              </PopoverContent>
            </Popover>
          </Flex>
        ) }
      </Stack>
    </Stack>
  )
}
