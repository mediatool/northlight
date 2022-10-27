import { FormLabel, Grid } from '@chakra-ui/react'
import React, { ChangeEvent, useState } from 'react'
import {
  Button,
  Capitalized,
  FormControl,
  HStack,
  Input,
  PaneDivider,
  PaneItem,
  SplitPane,
  Stack,
  VStack,
} from '../../../../lib/components'
import { Page } from '../../components'

const SplitPage = () => {
  const [ isSplitted, setIsSplitted ] = useState(false)
  const [ paneSize, setPaneSize ] = useState({
    minRightWidth: 25,
    minLeftWidth: 50,
    initialSplit: 50,
  })

  const { minRightWidth, minLeftWidth, initialSplit } = paneSize

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    setPaneSize((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const onReset = () => {
    setPaneSize({
      minRightWidth: 25,
      minLeftWidth: 50,
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
      <Stack direction="column" spacing={ 4 }>
        <VStack alignItems="flex-start" spacing={ 4 }>
          <HStack>
            <FormControl>
              <FormLabel htmlFor="minLeftWidth">Minimum left width</FormLabel>
              <Input value={ minLeftWidth } name="minLeftWidth" onChange={ handleChange } />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="minRightWidth">Minimum right width</FormLabel>
              <Input value={ minRightWidth } name="minRightWidth" onChange={ handleChange } />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="initialSplit">Initial split left width</FormLabel>
              <Input value={ initialSplit } name="initialSplit" onChange={ handleChange } />
            </FormControl>
          </HStack>
          <HStack>
            <Button variant="success" onClick={ () => setIsSplitted(!isSplitted) }>
              { !isSplitted ? 'Split me' : 'Un-split me' }
            </Button>
            <Button variant="danger" onClick={ onReset }>Reset values</Button>
          </HStack>
        </VStack>
        <SplitPane
          isOpen={ isSplitted }
          minRightWidth={ minRightWidth }
          minLeftWidth={ minLeftWidth }
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
                !isSplitted
                  ? `I always take 100%. If you split me I will start at ${initialSplit}%`
                  : `Now my min width is ${minLeftWidth}%`
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
                { `And my min width is ${minRightWidth}%` }
              </Capitalized>
            </Grid>
          </PaneItem>
        </SplitPane>
      </Stack>
    </Page>
  )
}

export default SplitPage
