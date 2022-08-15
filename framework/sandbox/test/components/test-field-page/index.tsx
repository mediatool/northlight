import React, { ElementType, Profiler, useState } from 'react'
import { Field } from 'formik'
import {
  Button,
  Form,
  NumberInputField,
  Stack,
  Text,
  TextField,
} from '../../../../lib/components'
import { RenderData } from '../render-data'
import { Page } from '../page'
import { arrayWithLength, initialValuesWithLength } from '../../utilities'

type Props = {
  name: string
  as?: ElementType
}

export const TestFieldPage = ({ name, as: As = TextField }: Props) => {
  const [ fields, setFields ] = useState<number[]>([])
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
    <Page
      title={ `${name} field test` }
      subtitle={ (
        <Text>Measure performance by stress testing how many fields our form can handle </Text>
      ) }
    >
      <Stack w="40%">
        <Form
          initialValues={ { fields: 0 } }
          onSubmit={ (values) => {
            setFields(arrayWithLength(values.fields))
          } }
        >
          { (form) => (
            <Stack>
              <NumberInputField
                name="fields"
                label={ `Generate ${form.values.fields} ${name} fields` }
              />
              <Button type="submit">Generate</Button>
            </Stack>
          ) }
        </Form>
        <Form
          initialValues={ initialValuesWithLength(10000, `${name}`) }
          onSubmit={ (_values, { resetForm }) => {
            setFields([])
            resetForm()
          } }
        >
          <Stack spacing={ 3 }>
            <Text>Testing { fields.length } { name } Field</Text>
            <Stack maxH="350px" overflow="scroll" pr={ 4 } pl={ 2 }>
              <Profiler id={ `${name}-field-profiler` } onRender={ updateRenderData }>
                { fields.map((number) => (
                  <Field
                    as={ As }
                    name={ `${name}-${number}` }
                    label={ `${name}-${number}` }
                    key={ number }
                  />
                )) }
              </Profiler>
            </Stack>
            <Button type="submit" variant="success" onClick={ getRenderData }>Reset</Button>
          </Stack>
        </Form>
        <RenderData averageRenderTime={ averageRenderTime } rerenderTimes={ rerenderTimes } />
      </Stack>
    </Page>
  )
}
