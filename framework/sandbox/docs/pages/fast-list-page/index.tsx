import React from 'react'
import {
  Box,
  Code,
  FastList,
  Heading,
  Stack,
  Text,
} from '../../../../lib/components'
import { Page } from '../../components'

const FastListPage = () => (
  <Page
    title="Fast List"
    subtitle={ (<Text>Based on VariableSizeList from react-window</Text>) }
  >
    <Stack spacing={ 4 }>
      <Text>The Fast list component can be used to virtualize long lists in a stack</Text>
      <Box h="500px" w="300px" border="1px solid gray" p={ 4 } borderRadius={ 4 }>
        <FastList
          itemCount={ 10000 }
          itemSize={ 30 }
          overscanCount={ 100 }
        >
          { (index) => `item-${index}` }
        </FastList>
      </Box>
      <Code w="max-content" display="block" whiteSpace="pre">{
`<Box h="500px" w="300p" border="1px solid gray" p={ 4 } borderRadius={ 4 }>
    <FastList itemCount={ 10000 } itemSize={ 30 } overscanCount={ 100 }>
        { (index) => \`item-\${index}\` }
    </FastList>
</Box>` }
      </Code>
      <Heading size="sm">(Note: FastList must be wrapped in a parent element with set height!)</Heading>
      <Text>It can take the following props: </Text>
      <Text>
        <strong>itemCount</strong>: number of items to render
      </Text>
      <Text>
        <strong>itemSize</strong>: height of each element,
        either a number in px, or a function on the form (index) - heightOf(index)
      </Text>
      <Text>
        <strong>Direction</strong>, either column or row
      </Text>
      <Text>
        <strong>Children</strong>, any valid JSX or string,
        can also make a function with index for each element as in example above
      </Text>
      <Text><strong>overscanCount</strong>,
        this is how many list items to render before they enter the viewport, <br />
        use this to make the scrolling smoother for the user
      </Text>
    </Stack>
  </Page>
)

export default FastListPage
