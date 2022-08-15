import React, { Profiler, useState } from 'react'
import {
  Button,
  Form,
  NumberInputField,
  Stack,
  Text,
  Tooltip,
} from '../../../../lib/components'
import { Page, RenderData } from '../../components'
import { arrayWithLength } from '../../utilities'

const TextFieldTestPage = () => {
  const [ amountOfTooltips, setAmountOfTooltips ] = useState<number[]>([])
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
    setAmountOfTooltips([])
    setAverageRenderTime(totalRenderingTime / totalRerenders)
    setRerenderTimes(totalRerenders)
  }

  return (
    <Page
      title="Tooltip test"
      subtitle={ (
        <Text>Measure the performance of Chakra tooltips</Text>
      ) }
    >
      <Stack w="40%">
        <Form
          initialValues={ { amountOfTooltips: 0 } }
          onSubmit={ (values) => {
            setAmountOfTooltips(arrayWithLength(values.amountOfTooltips))
          } }
        >
          { (form) => (
            <Stack>
              <NumberInputField
                name="amountOfTooltips"
                label={ `Generate ${form.values.amountOfTooltips} Tooltips` }
              />
              <Button type="submit">Generate</Button>
            </Stack>
          ) }
        </Form>
        <Stack maxH="350px" overflow="scroll" spacing={ 4 }>
          <Profiler id="tooltip-profiler" onRender={ updateRenderData }>
            { amountOfTooltips.map((number) => (
              <Tooltip label={ number } key={ number } placement="right">
                <Button w="50%">Hover over me { number }</Button>
              </Tooltip>
            )) }
          </Profiler>
        </Stack>
        <Button onClick={ getRenderData } variant="success">Reset</Button>
        <RenderData averageRenderTime={ averageRenderTime } rerenderTimes={ rerenderTimes } />
      </Stack>
    </Page>
  )
}

export default TextFieldTestPage
