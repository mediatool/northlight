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

const user = {
  _id: '8870370244424493',
  email: 'adam@mediatool.com',
  firstName: 'Adam',
  lastName: 'Advertiser',
  signedUpAt: '2021-10-05T14:15:36:774+02:00',
  activatedAt: '2021-10-05T14:15:36:774+02:00',
  homeOrganization: '558666952267906',
}

const systemUser = {
  _id: 'system',
}

const Template: Story<ComponentProps<typeof AccordionComp>> = (args: AccordionProps) => (
  <>
    <AccordionComp
      { ...args }
      summary={ (
        <EntrySummary
          actor={ user }
          icon="added"
          description={ <Description /> }
        />
      ) }
      onExpand={ () => console.log('expanded') }
    >
      <p>This is expanded and works</p>
    </AccordionComp>
    <AccordionComp
      { ...args }
      summary={ (
        <EntrySummary
          actor={ systemUser }
          icon="added"
          description={ <Description /> }
        />
      ) }
      onExpand={ () => console.log('expanded') }
    >
      <p>This is expanded and works</p>
    </AccordionComp>
  </>
)

export const Accordion = Template.bind({})

Accordion.args = {}
