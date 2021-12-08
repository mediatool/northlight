import React from 'react'
import { AbstractTextInput, Image, Stack, Text } from '~lib/components'
import { Page } from '../../components'
import { textfield } from '../../../assets/png'

const InputPage = () => (
  <Page
    title="Abstract TextInput"
    subtitle="A composition component that composes other specialized inputs"
  >
    <Stack width="20%" spacing={ 4 }>
      <AbstractTextInput
        color="primary"
        variant="outline"
        placeholder="Primary outline"
      />
      <AbstractTextInput
        color="primary"
        variant="filled"
        placeholder="Primary filled"
      />
      <AbstractTextInput
        color="primary"
        variant="flushed"
        placeholder="Primary flushed"
      />
    </Stack>
    <br /> <br />
    <Text>
      This component composes other specialized components, MaskedTextInput and FormattedTextInput.
      <br />
      If a mask is passed as props, it will render a MaskedTextInput, if a formatter is passed,
      it will render a FormattedTextInput.
      <br />
      In order to ensure consistency in Formik contexts, this component is also rendered inside of
      TextField.<br />
      Below is a diagram of the full abstraction. <br /><br />
    </Text>
    <Image
      src={ textfield }
      width={ 550 }
    />
  </Page>
)

export default InputPage
