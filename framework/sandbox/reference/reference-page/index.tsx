import React, { ChangeEvent, useMemo, useState } from 'react'
import { ComponentDoc, PropItem } from 'react-docgen-typescript'
import {
  head,
  isEmpty,
  last,
  length,
  map,
  prop,
  propOr,
  slice,
  sort,
  times,
  values,
} from 'ramda'
import Fuse from 'fuse.js'
import prettier from 'prettier'
import parserTypeScript from 'prettier/parser-typescript'
import { useIsRightSidebarVisible } from '../../use-is-right-side-bar-visible'
import {
  Box,
  Flex,
  Input,
  Link,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from '../../../lib/components'
import { CodeEditor, MarkdownPreview } from '../../../lib/internal-components'
import { Page } from './reference-page-wrapper'
import { FileLink, PropsTable } from './props-table'
import { splitMarkdownAndCode } from './split-markdown-and-code'
import { SideNavBar } from './side-nav-bar'
import { formatFileName } from '../utils/format-file-name.mjs'

interface ReferencePageProps {
  data: ComponentDoc
}

const formatCode = (codeString: string) => {
  const noInline = codeString[0] === '+'
  const updatedString = noInline ? slice(1, Infinity, codeString) : codeString

  try {
    const formattedCode = prettier.format(updatedString, {
      parser: 'typescript',
      plugins: [ parserTypeScript ],
      singleQuote: true,
      trailingComma: 'all',
    })

    return { noInline, text: formattedCode }
  } catch (error) {
    console.error('could not format')
    return { noInline, tet: updatedString }
  }
}

const removeSpecialChars = (input: string): string => {
  const regex = /[^a-zA-Z\s]/g
  return input.replace(regex, '')
}

interface CodeExample {
  data: string
  type: string
}

const isDefinedExternal = (item: PropItem) => {
  if (!item.declarations) return false
  return item.declarations[0].fileName.includes('node_modules')
}

const sortPropItems = (a: PropItem, b: PropItem) => {
  if (a.required && !b.required) return -1
  if (b.required && !a.required) return 1
  if (!isDefinedExternal(a) && isDefinedExternal(b)) return -1
  if (isDefinedExternal(a) && !isDefinedExternal(b)) return 1
  return 0
}

const ReferencePage = ({ data }: ReferencePageProps) => {
  console.log({ data })
  const [ tabIndex, setTabIndex ] = useState(0)
  const isRightSidebarVisible = useIsRightSidebarVisible()

  const codeExamples = propOr<CodeExample[], unknown, string>(
    '',
    'example',
    data.tags
  )
    .split('(Example)')
    .filter((str) => str !== '')
    .map(splitMarkdownAndCode)
    .filter((example) => example.data !== '') as unknown as CodeExample[][]

  const headers = codeExamples
    .map((example, i) => {
      if (!example[0]) {
        return `Example ${i}`
      }
      return example[0].data.split('\n')[0]
    })
    .map(removeSpecialChars)

  const propEntries = values(data.props)

  const [ query, setQuery ] = useState('')
  const fuse = useMemo(
    () =>
      new Fuse(propEntries, {
        threshold: 0.2,
        keys: [ 'name', 'description', 'type' ],
      }),
    [ propEntries ]
  )

  const filteredPropEntries =
    query.length > 1 ? map(prop('item'), fuse.search(query)) : propEntries

  const sortedPropEntries =
    query.length > 1
      ? filteredPropEntries
      : sort(sortPropItems, filteredPropEntries)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length !== 1) {
      setQuery(e.target.value)
    }
  }

  const githubPath = last(data.filePath.split('framework/'))
  const sourceCodeLink = `https://github.com/mediatool/northlight/tree/master/framework/${githubPath}`

  const references = (
    data.tags && data.tags.see
      ? data.tags.see.split('*\n').filter((str) => !str.includes('@link'))
      : []
  ).map(formatFileName) as string[]

  const DOCS_WIDTH = '50vw'

  return (
    <Page
      title={ data.displayName }
      subtitle={ data.description }
      source={ sourceCodeLink }
      references={ references }
    >
      <VStack spacing={ 4 } w={ DOCS_WIDTH }>
        <Flex justifyContent="space-between">
          <Stack mb={ 4 } spacing={ 4 }>
            <Tabs variant="line" onChange={ setTabIndex } colorScheme="cyan">
              <TabList mb="8">
                { !isEmpty(codeExamples) && <Tab>Usage</Tab> }
                { !isEmpty(sortedPropEntries) && <Tab>Props</Tab> }
              </TabList>
              <TabPanels>
                { !isEmpty(codeExamples) && (
                  <TabPanel w={ DOCS_WIDTH }>
                    <Stack spacing="8">
                      { codeExamples.map((example, i) => (
                        <Stack spacing="2">
                          <Link
                            id={ `Example-${i}` }
                            display="block"
                            position="relative"
                            top="-250px"
                            visibility="hidden"
                          />
                          { example.map((part) => (
                            <>
                              { part.type === 'Code' && (
                                <CodeEditor
                                  code={ formatCode(part.data).text }
                                  noInline={ formatCode(part.data).noInline }
                                />
                              ) }
                              { part.type === 'Markdown' &&
                                !isEmpty(part.data) && (
                                  <MarkdownPreview>{ part.data }</MarkdownPreview>
                              ) }
                            </>
                          )) }
                        </Stack>
                      )) }
                    </Stack>
                  </TabPanel>
                ) }
                <TabPanel w={ DOCS_WIDTH }>
                  <Box w="full" p="0a" mb="4">
                    <Input
                      placeholder="Filter"
                      variant="filled"
                      onChange={ handleChange }
                    />
                  </Box>
                  <Stack spacing="8">
                    { sortedPropEntries.map((propData) => (
                      <PropsTable
                        key={ propData.name }
                        name={ propData.name }
                        type={ propData.type }
                        isRequired={ propData.required }
                        description={ propData.description }
                        file={ head(
                          propOr<never[], PropItem, FileLink[]>(
                            [],
                            'declarations',
                            propData
                          )
                        ) }
                      />
                    )) }
                  </Stack>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Stack>
          { tabIndex === 0 &&
            !isEmpty(codeExamples) &&
            isRightSidebarVisible &&
            length(headers) > 1 &&
            (
              <SideNavBar
                links={ headers }
                sections={ times((n) => `Example-${n}`, length(headers)) }
              />
            ) }
        </Flex>
      </VStack>
    </Page>
  )
}

export default ReferencePage
