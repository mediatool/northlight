import { BellSolid } from '@northlight/icons'
import React from 'react'
import {
  Alert,
  Code,
  H1,
  H4,
  HStack,
  Icon,
  Label,
  Lead,
  Link,
  ListItem,
  P,
  Stack,
  StepStack,
  UnorderedList,
} from '@northlight/ui/ts'

export default function ContributePage () {
  return (
    <Stack p="6" spacing="8" maxW="1000px">
      <Stack>
        <H1>Reference</H1>
        <Lead>
          Under reference all the react components that are expored from the
          library are covered
        </Lead>
      </Stack>
      <P>
        If you want to contribute, fork this{ ' ' }
        <Link
          href=" https://github.com/mediatool/northlight"
          isExternal={ true }
          sx={ { color: 'cyan.500', textDecoration: 'underline' } }
        >
          repo
        </Link>
        .
      </P>
      <Stack>
        <H4>How to contribute</H4>
        <StepStack>
          <P>
            Write your component under{ ' ' }
            <Code>
              northlight/framework/lib/components/component-name/component-name.tsx
            </Code>
          </P>
          <P>
            Add an index.ts file in the same folder and export you component
            from it, also export from components/index.ts
          </P>
          <P>Write documentation using JsDoc Comments</P>
          <P>Run yarn build-docs </P>
          <P>Run yarn nx demo to view your component and double check</P>
          <P>Push!</P>
        </StepStack>
      </Stack>
      <Alert variant="info">
        <HStack alignItems="flex-start">
          <Icon as={ BellSolid } color="icon.toast.info" boxSize={ 6 } />
          <Stack spacing={ 0 } alignItems="flex-start">
            <Label size="md">yarn watch-docs</Label>
            <P>Runt this command to rebuild reference docs pages on save</P>
          </Stack>
        </HStack>
      </Alert>
      <Stack>
        <H4>How to write appropiate jsDoc comments</H4>
        <P>
          We use{ ' ' }
          <Link
            href="https://github.com/styleguidist/react-docgen-typescript"
            isExternal={ true }
            sx={ { color: 'cyan.500', textDecoration: 'underline' } }
          >
            react-docgen-typescript
          </Link>{ ' ' }
          to autogenerate documentation pages from jsdoc comments
        </P>
        Example:
        <Code w="max-content" whiteSpace="pre" display="block">
          { `/** 
 * Description for component 
 * 
 * @see Select 
 * @see {@link https://northlight.dev/reference/component-name} 
*/
const MyComponent = (props: MyComponentProps) => (
// code
)` }
        </Code>
        <UnorderedList>
          <ListItem>
            <P>The description will be displayed as a subheading</P>
          </ListItem>
          <ListItem>
            <P>
              The @see Select will render a link which goes to the select
              reference page
            </P>
          </ListItem>
          <ListItem>
            <P>
              The { '@see {@link}' } will make the link to the reference page
              visible in code editors
            </P>
          </ListItem>
          <ListItem>
            Notice that the component must be defined in .tsx file and exported
            from the library, a component that is exported like this: export{ ' ' }
            { '{ Box } ' } from '@chakra-ui/react' will not generate a reference
            page
          </ListItem>
        </UnorderedList>
      </Stack>
      <Stack>
        <H4>You can also add live code examples</H4>
        <Code w="max-content" whiteSpace="pre" display="block">
          { `/**
 * @example 
 * (?
 * <MyComponent />
 * ?)
 */

const MyComponent = (props: MyComponentProps) => (
// code
)` }
        </Code>
        <P>
          This will render a live code editor enviorment using{ ' ' }
          <Link
            href="https://formidable.com/open-source/react-live/"
            isExternal={ true }
            sx={ { color: 'cyan.500', textDecoration: 'underline' } }
          >
            react-live
          </Link>{ ' ' }
        </P>
        <P>
          From this live code editor, you don't have to import anything, all the
          northlight components, icons and hook are already imported
        </P>
      </Stack>
      <Stack>
        <P>
          You can either write pure jsx in the code example or write an
          anonymous function:{ ' ' }
        </P>
        <Code w="max-content" whiteSpace="pre" display="block">
          { `/**
 * @example 
 * (?
 * () => {
    * const [state, setState ] = useState(0)
    * return (
        * <Box p="2>¨
            * <MyComponent icon={UsersDuo} />
        * </Box>
    * )
 * }
 * ?)
 */

const MyComponent = (props: MyComponentProps) => (
// code
)` }
        </Code>
        <P>
          As you have propably noticed, you need to wrap the actual code using{ ' ' }
          <b>(? //code ?)</b>. This is so our custom formatting can recognize
          what to put into react live
        </P>
      </Stack>
      <Stack>
        <P>
          You can use multiple code examples, then you need to mark them out
          with <b>(Example)</b>
        </P>
        <Code w="max-content" whiteSpace="pre" display="block">
          { `/**
 * @example (Example) 
 * //example 1
 * @example (Example)
 * //example 2
 */

const MyComponent = (props: MyComponentProps) => (
// code
)` }
        </Code>
      </Stack>
      <Stack>
        <P>
          You can get more control over which components to render using the
          react render method, then you need to mark it with <b>+</b>{ ' ' }
        </P>
        <Code w="max-content" whiteSpace="pre" display="block">
          { `/**
 * @example (Example) 
 * (?
 * + 
 * const SubComponent = () => //code
 * const MainComponent = () => <Box><SubComponent /></Box>
 * render(<MainComponent />)
 * ?)
 */

const MyComponent = (props: MyComponentProps) => (
// code
)` }
        </Code>
        <P>
          And call the <b>render</b> method at the end
        </P>
      </Stack>
      <Stack>
        <P>
          You can use markdown in your code example (using{ ' ' }
          <Link
            href="https://www.npmjs.com/package/markdown-to-jsx"
            isExternal={ true }
            sx={ { color: 'cyan.500', textDecoration: 'underline' } }
          >
            markdown-to-jsx
          </Link>
          )
        </P>
        <Code w="max-content" whiteSpace="pre" display="block">
          { `/**
 * @example (Example) 
 * ## Header
 * (?
 * +
 * const SubComponent = () => //code
 * const MainComponent = () => <Box><SubComponent /></Box>
 * render(<MainComponent />)
 * ?)
 * ### Notes about code example
 */

const MyComponent = (props: MyComponentProps) => (
// code
)` }
        </Code>
      </Stack>
      <Stack>
        <P>
          Finally, you can add a description to the props that the components
          takes
        </P>
        <Code w="max-content" whiteSpace="pre" display="block">
          { `interface MyComponentProps {
    /** The hideDisplay prop will remove the component from the DOM tree when clicked */
    hideDisplay: boolean
}
const MyComponent = (props: MyComponentProps) => (
// code
)` }
        </Code>
        <P>
          You must you typescript <b>interface</b> for our parser to pick the
          types up
        </P>
      </Stack>
    </Stack>
  )
}
