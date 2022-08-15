import React, { Profiler, useState } from 'react'
import {
  Button,
  Form,
  Heading,
  NumberInputField,
  SelectField,
  Stack,
  Text,
} from '../../../../lib/components'
import { Page, RenderData, TestFieldPage } from '../../components'
import { optionsWithLength } from '../../utilities'

const TextFieldTestPage = () => {
  const [ selectFieldOptions, setSelectFieldOptions ] = useState(optionsWithLength(0))
  const [ averageRenderTime, setAverageRenderTime ] = useState(0)
  const [ rerenderTimes, setRerenderTimes ] = useState(0)

  let totalRerenders = 0
  let totalRenderingTime = 0
  const updateRenderData = (
    _id: string,
    _phase: 'mount' | 'update',
    actualDuration: number,
    _baseDuration: number,
    _startTime: number,
    _commitTime: number,
    _interactions: any
  ): void => {
    totalRerenders += 1
    totalRenderingTime += actualDuration
  }

  const getRenderData = () => {
    setAverageRenderTime(totalRenderingTime / totalRerenders)
    setRerenderTimes(totalRerenders)
  }

  return (
    <Stack>
      <TestFieldPage name="select" as={ SelectField } />
      <Page
        title=""
        subtitle={ <Text /> }
      >
        <Stack w="40%">
          <Heading size="md">MultiSelect stress test</Heading>
          <Form
            initialValues={ { selectFieldOptions: 0 } }
            onSubmit={ (values) => {
              setSelectFieldOptions(optionsWithLength(values.selectFieldOptions))
            } }
          >
            { (form) => (
              <Stack>
                <NumberInputField
                  name="selectFieldOptions"
                  label={ `Generate ${form.values.selectFieldOptions} Options` }
                />
                <Button type="submit">Generate</Button>
              </Stack>
            ) }
          </Form>
          <Form
            initialValues={ {
              'select-number': '',
            } }
            onSubmit={ (_values, { resetForm }) => {
              setSelectFieldOptions(optionsWithLength(0))
              resetForm()
            } }
          >
            <Stack spacing={ 3 }>
              <Text>Testing SelectField with { selectFieldOptions.length } options</Text>
              <Profiler id="select-options-profiler" onRender={ updateRenderData }>
                <SelectField
                  name="select-number"
                  label="Select"
                  options={ selectFieldOptions }
                  isMulti={ true }
                />

              </Profiler>
              <Button type="submit" variant="success" onClick={ getRenderData }>Reset</Button>
            </Stack>
          </Form>
          <RenderData averageRenderTime={ averageRenderTime } rerenderTimes={ rerenderTimes } />
        </Stack>
      </Page>
    </Stack>
  )
}

export default TextFieldTestPage
