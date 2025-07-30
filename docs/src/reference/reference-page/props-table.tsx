import React from 'react'
import { isEmpty, isNil, propOr, slice } from 'ramda'
import { PropItemType } from 'react-docgen-typescript'
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
} from '@northlight/ui'

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

const urlSource =
  '\\b(?:https?|ftp):\\/\\/[a-z0-9-+&@#/%?=~_|!:,.;]*[a-z0-9-+&@#/%=~_|]'
const matchPageLink = new RegExp(urlSource, 'gi')
const splitOnLink = new RegExp(`(${urlSource})`, 'gi')

function tokenizeLinks (text: string): string[] {
  return text.split(splitOnLink).filter(Boolean)
}

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
      ? slice(
        2,
        Infinity,
        type.value.reduce(
          (acc: string, curr: { value: string }) => `${acc} | ${curr.value}`,
          ''
        )
      )
      : type.name

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
            <Box minW="32">
              <P>Description</P>
            </Box>
            <P>
              { tokenizeLinks(description).map((chunk) =>
                (matchPageLink.test(chunk) ? (
                  <Link
                    key={ chunk }
                    href={ chunk }
                    isExternal={ true }
                    color="text.link.default"
                    _hover={ { textDecoration: 'underline' } }
                  >
                    { chunk }
                  </Link>
                ) : (
                  <React.Fragment key={ chunk }>{ chunk }</React.Fragment>
                ))
              ) }
            </P>
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
                  { isLinkAvailable ? (
                    <Link
                      sx={ { color: getContrastColor('bg.tertiary.default') } }
                      isExternal={ true }
                      href={ `https://github.com/mediatool/northlight/blob/master/${propOr(
                        '',
                        'fileName',
                        file
                      )}` }
                    >
                      { fileLink }
                    </Link>
                  ) : (
                    <P sx={ { color: getContrastColor('bg.tertiary.default') } }>
                      { fileLink }
                    </P>
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
