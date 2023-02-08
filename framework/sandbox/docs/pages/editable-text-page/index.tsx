import React, { useState } from 'react'
import { DocumentsDuo, SmileyDuo } from '@northlight/icons'
import {
  Code,
  EditableText,
  H2,
  Icon,
  IconButton,
  Link,
  P,
  Stack,
} from '../../../../lib/components'
import { DefaultPageSubtitle, Page } from '../../components'

const EditableTextPage = () => {
  const [ value, setValue ] = useState('The title goes here')

  return (
    <Page
      title="Editable Text"
      subtitle={ (
        <DefaultPageSubtitle
          slug="/editable"
          linkText="Chakra Editable"
        />
      ) }
    >
      <Stack>
        <P>The EditableText component is used to modify prefilled or default text.</P>
        <P>Once clicked on the input (or the edit icon), you will be able to modify the content.</P>
        <P>
          Pressing <b>ESC</b> or clicking on the
          <b> red icon</b> will delete the changes and go back to the original state
        </P>
        <P>
          Pressing <b>ENTER</b> or clicking on the
          <b> green icon</b> will save the changes internally and fire the{ ' ' }
          <Code>onSubmit</Code> callback.
        </P>
        <P>To know more about the usage, visit the{ ' ' }
          <Link
            href="https://chakra-ui.com/docs/components/editable/props"
            isExternal={ true }
            color="blue.500"
            fontWeight="semibold"
          >
            Chakra Documentation.
          </Link>
        </P>
      </Stack>
      <Stack spacing={ 8 } mt={ 8 } maxWidth="400px">
        <Stack spacing={ 2 }>
          <H2>In action</H2>
          <P>Try it out</P>
          <EditableText
            value={ value }
            onSubmit={ (v) => setValue(v) }
          />
          <Code p={ 4 }>
            <u>Value</u>:  { value }
          </Code>
        </Stack>
        <Stack spacing={ 2 }>
          <H2>Sizes</H2>
          <P>The EditableText comes in 3 sizes</P>
          <EditableText
            value="Size sm"
            size="sm"
          />
          <EditableText
            value="Size md"
          />
          <EditableText
            value="Size lg"
            size="lg"
          />
        </Stack>
        <Stack spacing={ 2 }>
          <H2>Custom props</H2>
          <P>
            You add a left element by using the{ ' ' }
            <Code>leftItem</Code>{ ' ' }
            prop
          </P>
          <EditableText
            value="Two layers"
            leftItem={ <Icon as={ DocumentsDuo } /> }
          />
          <EditableText
            value="The button on the left does nothing"
            leftItem={ (
              <IconButton
                aria-label="I do nothing"
                variant="ghost"
                size="sm"
                icon={ <Icon as={ SmileyDuo } /> }
              />
            ) }
          />
        </Stack>
      </Stack>
    </Page>
  )
}

export default EditableTextPage
