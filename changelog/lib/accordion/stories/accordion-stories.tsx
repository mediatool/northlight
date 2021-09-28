import React, { ComponentProps } from 'react'
import { Story } from '@storybook/react'
import { Accordion } from '../components';

export default {
  title: 'Accordion',
  component: Accordion
}

const Template: Story<ComponentProps<typeof Accordion>> = (args: any) => (
  <Accordion {...args} />
)

export const AccordionDefault = Template.bind({})

AccordionDefault.args = {}
