import React from 'react'
import {
  Box,
  Code,
  Divider,
  H2,
  H3,
  H6,
  Highlight,
  Image,
  Link,
  ListItem,
  NumVal,
  P,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
  UnorderedList,
} from '@northlight/ui'
import { Page } from '../../components'
import {
  Body,
  Colors,
  Headings,
  Labels,
  NumVals,
  Stylized,
  TableHead,
} from './data'
import lowContrast from './low-contrast.jpg'
import highContrast from './high-contrast.jpg'
import harmony from './harmony.png'
import coherent from './coherent.png'
import customize from './customize.png'

const TableHeadings = () => (
  <Thead>
    <Tr>
      { TableHead.map((item) => (
        <Td key={ item }>
          <H6 sx={ { color: 'text.subdued' } }>{ item }</H6>
        </Td>
      )) }
    </Tr>
  </Thead>
)

const TypographyPage = () => (
  <Page
    title="Typography"
    subtitle="Northlight typography system is set to create informational hierarchy, ensure the coherence through out the product and make the UI clear and easily recognizable"
  >
    <Stack spacing={ 8 }>
      <Stack maxW="container.lg" spacing="8">
        <Text>
          <Highlight
            query={ [ 'Headings', 'Body', 'Stylized', 'Labels', 'NuMVal' ] }
            styles={ {
              color: 'text.default',
              px: '1',
              py: '0.5',
              rounded: '6',
              bg: 'bg.layer',
              fontWeight: 'bold',
            } }
          >
            There are 5 different typography categories divided by usage:
            Headings, Body, Stylized, Labels, NumVal.
          </Highlight>
          <br />
          The base text size is 16px (1 rem)
        </Text>
        <Stack spacing="4">
          <Text>
            Considering the purpose of a page or section there are two ways of
            combining typography styles:
          </Text>
          <UnorderedList>
            <Stack spacing="2">
              <ListItem>
                <b>Low contrast</b> If the purpose is to complete a complex
                scenario including set of actions and a lot details it will lead
                to the high content density on the screen, therefore there is
                need to use lesser contrast ratio of typography styles. It makes
                UI less dramatic but saves space to reflect important parts of
                the interface. It is used mostly <b>inside of the main app</b>
              </ListItem>

              <Box
                borderWidth="xs"
                borderColor="border.defualt"
                borderStyle="solid"
                rounded="md"
                w="40%"
                p="2"
              >
                <Image src={ lowContrast } w="100%" maxW="xl" />
              </Box>

              <ListItem>
                <b>High contrast</b> If the purpose is to introduce parts of
                content, lead a user through simple and linear scenario, and the
                average density of content is rather low (website blocks, other
                sections that tend to draw user’s attention, articles, empty
                states etc.) there is a room to use higher contrast. It is used
                mostly <b>on websites and in articles.</b>
              </ListItem>
              <Box
                borderWidth="xs"
                borderColor="border.defualt"
                borderStyle="solid"
                rounded="md"
                w="40%"
                p="2"
              >
                <Image src={ highContrast } w="100%" maxW="xl" />
              </Box>
            </Stack>
          </UnorderedList>
        </Stack>
      </Stack>
      <Divider />
      <H2>Overview</H2>
      <Stack spacing="12">
        <Stack>
          <H3>Headings</H3>
          <Box w="full" overflowX="scroll">
            <Table>
              <TableHeadings />
              <Tbody>
                { Headings.map(
                  ({
                    element,
                    component: Component,
                    code,
                    demoText,
                    description,
                  }) => (
                    <Tr key={ code }>
                      <Td>{ element }</Td>
                      <Td>
                        <Component>{ demoText }</Component>
                      </Td>
                      <Td w="50%" whiteSpace={ { base: 'nowrap', md: 'normal' } }>{ description }</Td>
                      <Td>
                        <Code>{ code }</Code>
                      </Td>
                    </Tr>
                  )
                ) }
              </Tbody>
            </Table>

          </Box>
        </Stack>
        <Stack>
          <H3>Body</H3>
          <Box w="full" overflowX="scroll">
            <Table>
              <TableHeadings />
              <Tbody>
                { Body.map(
                  ({
                    element,
                    component: Component,
                    code,
                    variant,
                    demoText,
                    description,
                  }) => (
                    <Tr key={ code }>
                      <Td>{ element }</Td>
                      <Td>
                        <Component variant={ variant }>{ demoText }</Component>
                      </Td>
                      <Td w="50%" whiteSpace={ { base: 'nowrap', md: 'normal' } }>{ description }</Td>
                      <Td>
                        <Code>{ code }</Code>
                      </Td>
                    </Tr>
                  )
                ) }
              </Tbody>
            </Table>
          </Box>
        </Stack>
        <Stack>
          <H3>NumVals</H3>
          <Text>
            NumVal is a group of special monospace styles with lining figures
            which is to be applied on numerical values in order to scan columns
            in tables and compare numbers easily. Align them to the right.
          </Text>
          <Table
            borderWidth="xs"
            borderColor="border.default"
            borderStyle="solid"
            w="40"
          >
            <Thead>
              <Tr>
                <Td p="2">
                  <P variant="14">Actual Spend</P>
                </Td>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td p="2">
                  <NumVal sx={ { color: 'brand' } }>2700000</NumVal>
                </Td>
              </Tr>
              <Tr>
                <Td p="2">
                  <NumVal>2700000</NumVal>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Box w="full" overflowX="scroll">
            <Table>
              <TableHeadings />
              <Tbody>
                { NumVals.map(
                  ({
                    element,
                    component: Component,
                    code,
                    demoText,
                    description,
                  }) => (
                    <Tr key={ code }>
                      <Td>{ element }</Td>
                      <Td>
                        <Component>{ demoText }</Component>
                      </Td>
                      <Td w="50%" whiteSpace={ { base: 'nowrap', md: 'normal' } }>{ description }</Td>
                      <Td>
                        <Code>{ code }</Code>
                      </Td>
                    </Tr>
                  )
                ) }
              </Tbody>
            </Table>

          </Box>
        </Stack>
        <Stack>
          <H3>Stylized</H3>
          <Text>
            Stylised text is a group used on certain purpose when other styles
            don't work for a scenario.
          </Text>
          <Box w="full" overflowX="scroll">
            <Table>
              <TableHeadings />
              <Tbody>
                { Stylized.map(
                  ({
                    element,
                    component: Component,
                    code,
                    demoText,
                    description,
                  }) => (
                    <Tr key={ code }>
                      <Td>{ element }</Td>
                      <Td>
                        <Component>{ demoText }</Component>
                      </Td>
                      <Td w="50%" whiteSpace={ { base: 'nowrap', md: 'normal' } }>{ description }</Td>
                      <Td>
                        <Code>{ code }</Code>
                      </Td>
                    </Tr>
                  )
                ) }
              </Tbody>
            </Table>
          </Box>
        </Stack>
        <Stack>
          <H3>Labels</H3>
          <Text>
            To customize, pass the styles with the <Code>sx</Code> prop. The
            component will merge the two objects.
          </Text>
          <Box w="full" overflowX="scroll">
            <Table>
              <TableHeadings />
              <Tbody>
                { Labels.map(
                  ({
                    element,
                    component: Component,
                    code,
                    size,
                    demoText,
                    description,
                  }) => (
                    <Tr key={ code }>
                      <Td>{ element }</Td>
                      <Td>
                        <Component size={ size }>{ demoText }</Component>
                      </Td>
                      <Td w="50%" whiteSpace={ { base: 'nowrap', md: 'normal' } }>{ description }</Td>
                      <Td>
                        <Code>{ code }</Code>
                      </Td>
                    </Tr>
                  )
                ) }
              </Tbody>
            </Table>
          </Box>
        </Stack>
        <Stack>
          <H3>Colors</H3>
          <Box w="full" overflowX="scroll">
            <Table>
              <TableHeadings />
              <Tbody>
                { Colors.map(
                  ({
                    element,
                    component: Component,
                    code,
                    size,
                    demoText,
                    description,
                    componentProps = {},
                  }) => (
                    <Tr key={ code }>
                      <Td>{ element }</Td>
                      <Td>
                        <Component size={ size } whiteSpace={ { base: 'nowrap', md: 'normal' } } { ...componentProps }>
                          { demoText }
                        </Component>
                      </Td>
                      <Td w="50%" whiteSpace={ { base: 'nowrap', md: 'normal' } }>{ description }</Td>
                      <Td>
                        <Code>{ code }</Code>
                      </Td>
                    </Tr>
                  )
                ) }
              </Tbody>
            </Table>
          </Box>
        </Stack>
      </Stack>
      <Box w="container.md">
        <P>
          If text is placed on the background which differs from the base one
          (set by user, for instance) it is recommended to use{ ' ' }
          <Code>getContrastColor</Code> function to determine whether to use
          text.default or text.inverted
        </P>
      </Box>
      <Stack>
        <H2>Rules</H2>
        <UnorderedList>
          <ListItem>Don't use dots at the end of headings</ListItem>
          <ListItem>Always align text to left by default</ListItem>
          <ListItem>Keep a line of text between 60-80 characters</ListItem>
          <ListItem>Don't underline text if it's not a link</ListItem>
          <ListItem>
            Distinguish between dashes "–" and hyphens "-":{ ' ' }
            <Link href="https://www.sjsu.edu/writingcenter/docs/handouts/Hyphens%20Dashes.pdf">
              San jose university
            </Link>
          </ListItem>
          <ListItem>
            Use non-breaking space with prepositions (Alt+255 for Windows,
            Opt+SpaceBar for Mac)
          </ListItem>
        </UnorderedList>
      </Stack>
      <Divider />
      <H2>Tips</H2>
      <Stack spacing="12">
        <Stack>
          <H3>Customize</H3>
          <Text>
            To customize, pass the styles with the <Code>sx</Code> prop. The
            component will merge the two objects.
          </Text>
          <Box bgColor="white" borderRadius="md" p="1">
            <Image src={ customize } w="100%" />
          </Box>
        </Stack>
        <Stack>
          <H3>Highlighting</H3>
          <P>
            If you want to highlight some specific chunk of text, you can either
            use <Code>Highlight</Code> or <Code>Mark</Code>
          </P>
          <P>
            Example:{ ' ' }
            <Highlight
              query="delete"
              styles={ { color: 'destructive', fontWeight: 'bold' } }
            >
              Do you really want to delete?
            </Highlight>
          </P>
          <Link href="https://chakra-ui.com/docs/components/highlight/usage">See Chakra UI docs</Link>
        </Stack>
      </Stack>
      <Divider />
      <H2>Recommendations</H2>
      <Stack spacing="12">
        <Stack>
          <H3>Pay attention</H3>
          <P>
            Grouped elements should be consistent with their “neighbors”. Keep
            the hierarchy clear but avoid disharmony
          </P>
          <Box bgColor="white" borderRadius="md" p="1">
            <Image
              src={ harmony }
              w="
          100%"
            />

          </Box>
        </Stack>
        <Stack>
          <H3>Keep it coherent</H3>
          <P>
            The same logical purpose should lead to the same choice of
            typography and color style
          </P>
          <Box bgColor="white" borderRadius="md" p="1">
            <Image src={ coherent } w="40%" maxW="xl" />

          </Box>
        </Stack>
      </Stack>
    </Stack>
  </Page>
)

export default TypographyPage
