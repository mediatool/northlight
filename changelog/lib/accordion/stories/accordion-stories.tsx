import React, { ComponentProps } from 'react'
import { Story } from '@storybook/react'

import { Accordion as AccordionComp, AccordionProps } from '../components'
import { EntrySummary } from '../../entry-summary'

export default {
  title: 'Accordion',
  component: AccordionComp,
}

const Description = () => (
  <div>
    <p>Kayla added CBS</p>
    <p>1 hour ago</p>
  </div>
)

const Template: Story<ComponentProps<typeof AccordionComp>> = (args: AccordionProps) => (
  <AccordionComp
    { ...args }
    summary={
      <EntrySummary
        avatar="https://filmtopp.imgix.net/media/2021/03/Avatar%201.jpg?s=ac6320a9ae319cbabdb5e65c06a110db"
        icon="added"
        description={ <Description /> }
      />
    }
    onExpand={ () => console.log('expanded') }
  >
    <p>This is expanded and works</p>
  </AccordionComp>
)

export const Accordion = Template.bind({})

Accordion.args = {}
