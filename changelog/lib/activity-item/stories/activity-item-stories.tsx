import React, { ComponentProps } from 'react'
import { Story } from '@storybook/react'

import { ActivityItem as ActivityItemComp, ActivityItemProps } from '../components'
import { EntrySummary } from '../../entry-summary'

export default {
  title: 'ActivityItem',
  component: ActivityItemComp,
}

const Description = () => (
  <div>
    <p>Kayla added 5 and modified 9 and deleted 1 entries</p>
  </div>
)

const DescriptionLong = () => (
  <div>
    <p>Anne Holmstrøm sent plan 2021 Mar_Apr_Feeling and Customer Stories
      for approval to Fabian Ydmark Reich Hey Fabian, I have now inserted the data
      and assets that I know we have. Some of the creatives we have two of
      since we wants to A/B test, e.g. with word like global and with/without stars,
      I dont know how this will be with the setup? Further more I am waiting for the
      specs for the Google Display from Henrik and I have therefore not put in the creatives.
      Please see if it is correct or if there should be made any changes :) /Anne
    </p>
  </div>
)

const ActivityItemTime = () => (
  <div style={ {
    width: '9rem',
    marginTop: '0.7rem',
    color: '#A4B7C3',
    marginRight: '2.5rem',
  } }
  >
    <p>2021-10-03</p>
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

const Template: Story<ComponentProps<typeof ActivityItemComp>> = (args: ActivityItemProps) => (
  <>
    <ActivityItemComp
      { ...args }
      summary={
        <EntrySummary
          actor={ user }
          icon="added"
          description={ <Description /> }
          time={
            <ActivityItemTime />
          }
        />
      }
    />
    <ActivityItemComp
      { ...args }
      summary={
        <EntrySummary
          actor={ user }
          icon="modified"
          description={ <Description /> }
          time={
            <ActivityItemTime />
          }
        />
    }
    />
    <ActivityItemComp
      { ...args }
      summary={
        <EntrySummary
          actor={ user }
          icon="approved"
          description={ <DescriptionLong /> }
          time={
            <ActivityItemTime />
          }
        />
    }
    />
    <ActivityItemComp
      { ...args }
      summary={
        <EntrySummary
          actor={ user }
          icon="denied"
          description={ <Description /> }
          time={
            <ActivityItemTime />
          }
        />
    }
    />
    <ActivityItemComp
      { ...args }
      summary={
        <EntrySummary
          actor={ user }
          icon="deleted"
          description={ <Description /> }
          time={
            <ActivityItemTime />
          }
        />
    }
    />
    <ActivityItemComp
      { ...args }
      summary={
        <EntrySummary
          actor={ user }
          icon="pending"
          description={ <Description /> }
          time={
            <ActivityItemTime />
          }
        />
    }
    />
    <ActivityItemComp
      { ...args }
      summary={
        <EntrySummary
          actor={ user }
          icon="modified"
          description={ <Description /> }
          time={
            <ActivityItemTime />
          }
        />
    }
    />
    <ActivityItemComp
      { ...args }
      summary={
        <EntrySummary
          actor={ user }
          icon="approvalRequested"
          description={ <Description /> }
          time={
            <ActivityItemTime
              time="2019-02-05T10:35:30:026+00:00"
              timeFormat="YYYY-MM-DDTHH:mm:ssZ"
              toolTipTime="1 month ago"
            />
          }
        />
    }
    />
    <ActivityItemComp
      { ...args }
      summary={
        <EntrySummary
          actor={ user }
          icon="modified"
          description={ <Description /> }
          time={
            <ActivityItemTime />
          }
        />
    }
    />
    <ActivityItemComp
      { ...args }
      summary={
        <EntrySummary
          actor={ user }
          icon="campaignCreated"
          description={ <Description /> }
          time={
            <ActivityItemTime />
          }
        />
    }
    />
    <ActivityItemComp
      { ...args }
      summary={
        <EntrySummary
          actor={ user }
          icon="orgCreated"
          description={ <Description /> }
          time={
            <ActivityItemTime />
          }
        />
    }
    />
  </>
)

export const ActivityItem = Template.bind({})

ActivityItem.args = {}
