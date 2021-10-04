import React, { ComponentProps } from 'react'
import { Story } from '@storybook/react'
import { Chip, ChipProps } from '../components'

export default {
  title: 'Chip',
  component: Chip,
}

const Template: Story<ComponentProps<typeof Chip>> = (args: ChipProps) => (

  <Chip { ...args } />
)

export const ChipDefault = Template.bind({})

ChipDefault.args = {
  variant: 'normal',
  type: 'danger',
  children: <p style={ { textDecorationLine: 'line-through', margin: 0, padding: 0 } }>2020-10-15</p>,
}
