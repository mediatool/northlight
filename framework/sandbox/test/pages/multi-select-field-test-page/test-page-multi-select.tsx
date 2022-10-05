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
import { RenderData } from '../../components/render-data'
import { optionsWithLength } from '../../utilities'

export const TestPageMultiSelect = ({ name }: any) => {
  const [ fields, setFields ] = useState<any[]>([])
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
    <Stack w="40%">
      <Heading size="md">Multi Select </Heading>
      <Form
        initialValues={ { fields: 0 } }
        onSubmit={ (values) => {
          setFields(optionsWithLength(values.fields))
        } }
      >
        { ({ watch }) => (
          <Stack>
            <NumberInputField
              name="fields"
              label={ `Generate ${watch().fields} multi select options` }
            />
            <Button type="submit">Generate</Button>
          </Stack>
        ) }
      </Form>
      <Form
        initialValues={ { 'select-number': '' } }
        onSubmit={ (_values) => {
          setFields(optionsWithLength(0))
        } }
      >
        <Stack spacing={ 3 }>
          <Text>Testing { fields.length } Multi Select Field options </Text>
          <Stack pr={ 4 } pl={ 2 }>
            <Profiler id={ `${name}-field-profiler` } onRender={ updateRenderData }>
              <SelectField
                name="select-number"
                label="select"
                options={ fields }
                isMulti={ true }
              />
            </Profiler>
          </Stack>
          <Button type="submit" variant="success" onClick={ getRenderData }>Reset</Button>
        </Stack>
      </Form>
      <RenderData averageRenderTime={ averageRenderTime } rerenderTimes={ rerenderTimes } />
    </Stack>
  )
}
