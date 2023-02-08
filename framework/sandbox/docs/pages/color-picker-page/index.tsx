import React, { useState } from 'react'
import {
  ClipboardInput,
  Code,
  ColorPicker,
  Divider,
  HStack,
  Stack,
  Text,
} from '../../../../lib/components'
import { Page } from '../../components'

const ColorPickerPage = () => {
  const [ selectedColor, setSelectedColor ] = useState('null')
  return (
    <Page
      title="Color Picker"
      subtitle="Because a gray world would be so boring..."
    >
      <Stack spacing={ 6 }>
        <Stack spacing={ 2 }>
          <Text>Mediatool uses 1 color picker</Text>
          <ColorPicker />
          <Code w="max-content">{ '<ColorPicker /> ' }</Code>
          <Divider />
        </Stack>
        <Stack spacing={ 2 }>
          <Text>
            You can pick what colors the user can choose with{ ' ' }
            <strong>colors</strong> prop{ ' ' }
          </Text>
          <ColorPicker colors={ [ 'red.500', 'blue.500', 'green.500' ] } />
          <Code w="max-content" display="block" whiteSpace="pre">{
'<ColorPicker colors={[\'red.500\', \'blue.500\', \'green.500\']} />' }
          </Code>
          <Divider />
        </Stack>
        <Stack spacing={ 2 }>
          <Text>
            You can customize what colors will show up when the user presses the
            down expand arrow
          </Text>
          <ColorPicker expandedColors={ [ 'red.500', 'blue.500', 'green.500' ] } />
          <Code w="max-content">
            { '<ColorPicker expandedColors={[\'red.500\', \'blue.500\', \'green.500\']} /> ' }
          </Code>
          <Divider />
        </Stack>
        <Stack spacing={ 2 }>
          <Text>You can get out the selected color value in hex code by the onChange method</Text>
          <HStack w="max-content">
            <ColorPicker onChange={ (color) => setSelectedColor(color) } colors={ [ 'red.500' ] } />
            <ClipboardInput value={ selectedColor } />
          </HStack>
          <Code w="max-content" display="block" whiteSpace="pre">{
`<HStack>
  <ColorPicker onChange={ (color) => setSelectedColor(color) } />
  <ClipboardInput value={ selectedColor } />
</HStack>` }
          </Code>
          <Divider />
        </Stack>
        <Stack spacing={ 2 }>
          <Text>By default there is no selected color, however you can set a default color</Text>
          <ColorPicker value="blue.500" />
          <Code w="max-content">{ '<ColorPicker value="blue.500" />' }</Code>
          <Divider />
        </Stack>
        <Stack spacing={ 2 }>
          <Text>The color picker can be used in three sizes(sm, md, lg)</Text>
          <HStack>
            <ColorPicker size="sm" isRound={ true } />
            <ColorPicker size="md" isRound={ true } />
            <ColorPicker size="lg" isRound={ true } />
          </HStack>
          <Code w="max-content">{ '<ColorPicker size="SIZE" isRound={ true } />' }</Code>
        </Stack>
      </Stack>
    </Page>
  )
}

export default ColorPickerPage
