import React, { ElementType, Profiler, useState } from 'react'
import {
  Box,
  Button,
  FastList,
  Form,
  Heading,
  NumberInputField,
  Stack,
  Text,
  TextField,
} from '../../../../lib/components'
import { RenderData } from '../render-data'
import { arrayWithLength, initialValuesWithLength } from '../../utilities'

type Props = {
  name: string
  as?: ElementType
  virtualized?: boolean
}

export const TestFieldPage = ({
  name,
  as: As = TextField,
  virtualized = false,
}: Props) => {
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
    <Stack w="40%">
      <Heading size="md">{ name } { virtualized ? 'Virtualized' : '' }</Heading>
      <Form
        initialValues={ { fields: 0 } }
        onSubmit={ (values) => {
          setFields(arrayWithLength(values.fields))
        } }
      >
        { ({ watch }) => (
          <Stack>
            <NumberInputField
              name="fields"
              label={ `Generate ${watch().fields} ${name} fields` }
            />
            <Button type="submit">Generate</Button>
          </Stack>
        ) }
      </Form>
      <Form
        initialValues={ initialValuesWithLength(10000, `${name}`) }
        onSubmit={ (_values) => {
          setFields([])
        } }
        enableReInitialize={ true }
      >
        <Stack spacing={ 3 }>
          <Text>Testing { fields.length } { name } Field</Text>
          <Stack maxH="350px" overflow="scroll" pr={ 4 } pl={ 2 }>
            <Profiler id={ `${name}-field-profiler` } onRender={ updateRenderData }>
              { virtualized
                ? (
                  <Box h="350px">
                    <FastList
                      itemCount={ fields.length }
                      itemSize={ 80 }
                      overscanCount={ 50 }
                    >
                      { (index) => (
                        <As
                          name={ `${name}-${index}` }
                          label={ `${name}-${index}` }
                        />
                      ) }
                    </FastList>
                  </Box>
                )
                : fields.map((number) => (
                  <As
                    name={ `${name}-${number}` }
                    label={ `${name}-${number}` }
                    key={ number }
                  />
                ))
              }
            </Profiler>
          </Stack>
          <Button type="submit" variant="success" onClick={ getRenderData }>Reset</Button>
        </Stack>
      </Form>
      <RenderData averageRenderTime={ averageRenderTime } rerenderTimes={ rerenderTimes } />
    </Stack>
  )
}
