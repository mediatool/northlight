import { FormLabel, Grid } from '@chakra-ui/react'
import React, { ChangeEvent, useState } from 'react'
import { PaneDivider } from '~/lib/components/split-pane/pane-divider'
import {
  Button,
  Capitalized,
  FormControl,
  HStack,
  Input,
  PaneItem,
  SplitPane,
  Stack,
  VStack,
} from '../../../../lib/components'
import { Page } from '../../components'

const SplitPage = () => {
  const [ split, setSplit ] = useState(false)
  const [ paneSize, setPaneSize ] = useState({
    minL: 25,
    minR: 50,
    initialSplit: 50,
  })

  const { minL, minR, initialSplit } = paneSize

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setPaneSize((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const onReset = () => {
    setPaneSize({
      minL: 25,
      minR: 50,
      initialSplit: 50,
    })
  }

  const textStyle = {
    fontSize: '4xl',
    fontWeight: 'bold',
    color: 'inherit',
    textAlign: 'center',
    maxWidth: '25ch',
  }

  return (
    <Page title="Split">
      <Stack direction="column">
        <VStack alignItems="flex-start">
          <HStack>
            <FormControl>
              <FormLabel htmlFor="minL">Min pink width</FormLabel>
              <Input value={ minL } name="minL" onChange={ handleChange } />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="minR">Min purple width</FormLabel>
              <Input value={ minR } name="minR" onChange={ handleChange } />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="initialSplit">Initial purple width</FormLabel>
              <Input value={ initialSplit } name="initialSplit" onChange={ handleChange } />
            </FormControl>
          </HStack>
          <HStack>
            <Button variant="success" onClick={ () => setSplit(!split) }>
              { !split ? 'Split me' : 'Un-split me' }
            </Button>
            <Button variant="danger" onClick={ onReset }>Reset values</Button>
          </HStack>
        </VStack>
        <SplitPane
          isOpen={ split }
          minL={ minL }
          minR={ minR }
          initialSplit={ initialSplit }
        >
          <PaneItem>
            <Grid
              placeItems="center"
              height="500px"
              borderWidth={ 8 }
              borderStyle="solid"
              borderColor="purple.500"
              color="purple.500"
            >
              <Capitalized sx={ textStyle }>{
                !split
                  ? `I always take 100%. If you split me I will start at ${initialSplit}%`
                  : `Now my min width is ${minR}%`
              }
              </Capitalized>
            </Grid>
          </PaneItem>
          <PaneDivider />
          <PaneItem>
            <Grid
              placeItems="center"
              height="500px"
              borderWidth={ 8 }
              borderStyle="solid"
              borderColor="pink.500"
              color="pink.500"
            >
              <Capitalized sx={ textStyle }>
                { `And my min width is ${minL}%` }
              </Capitalized>
            </Grid>
          </PaneItem>
        </SplitPane>
      </Stack>
    </Page>
  )
}

export default SplitPage
