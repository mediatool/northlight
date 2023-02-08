import React from 'react'
import {
  Box,
  Code,
  FastGrid,
  Heading,
  Stack,
  Text,
} from '../../../../lib/components'
import { Page } from '../../components'

const FastGridPage = () => (
  <Page
    title="Fast Grid"
    subtitle={ (<Text>Based on VariableSizeGrid from react-window</Text>) }
  >
    <Stack spacing={ 4 }>
      <Text>The Fast Grid component can be used to virtualize long lists in a grid</Text>
      <Box h="500px" w="500px" border="1px solid gray" p={ 4 } borderRadius={ 4 }>
        <FastGrid
          columns={ 10000 }
          rows={ 10000 }
          rowSize={ 100 }
          columnSize={ 100 }
          overscanRowCount={ 10 }
          overscanColumnCount={ 1 }
        >
          { (rowIndex, columnIndex) => `[${rowIndex}, ${columnIndex}]` }
        </FastGrid>
      </Box>
      <Code w="max-content" display="block" whiteSpace="pre">{
`<Box h="500px" w="500p" border="1px solid gray" p={ 4 } borderRadius={ 4 }>
    <FastGrid 
        columns={ 10000 } 
        rows={ 10000 } 
        rowSize={ 100 }
        columnSize={ 100 }
        overscanRowCount={ 10 }
        overscanColumnCount={ 1 }
    >
        { (rowIndex, columnIndex) => \`[\${rowIndex}, \${columnIndex}]\` }
    </FastGrid>
</Box>` }
      </Code>
      <Heading size="sm">(Note: FastGrid must be wrapped in a parent element with set height!)</Heading>
      <Text>It can take the following props: </Text>
      <Text>
        <strong>columns, rows</strong>: number of rows, and columns to render
      </Text>
      <Text>
        <strong>rowSize, columnSize</strong>: width of each row, and height of each column, <br />
        can either a number in px, or a function on the form (index) - heightOf(index)
      </Text>
      <Text>
        <strong>Children</strong>, any valid JSX or string,
        recommended to pass in a function that takes in the rowIndex and columnIndex and returns JSX
      </Text>
      <Text><strong>overscanRowCount, overscanColumnCount</strong>,
        this is how many row/columns to render before they enter the viewport
      </Text>
    </Stack>
  </Page>
)

export default FastGridPage
