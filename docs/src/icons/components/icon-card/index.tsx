import React from 'react'
import {
  Card,
  CardBody,
  ClipboardInput,
  Icon,
  Stack,
} from '@northlight/ui/ts'
import { IconComponent } from '../../utils/types'

export const IconCard = ({ label, component }: IconComponent) => (
  <Card bgColor="background.default">
    <CardBody>
      <Stack spacing={ 6 }>
        <Icon boxSize={ 10 } as={ component } />
        <ClipboardInput value={ label } />
      </Stack>
    </CardBody>
  </Card>
)
