import React from 'react'
import {
  Stack,
  Step,
  StepList,
  StepPanel,
  StepPanels,
  Steps,
  Text,
} from '../../../../lib/components'
import { DefaultPageSubtitle, Page } from '../../components'

const StepsPage = () => (
  <Page
    title="Steps"
    subtitle={ (
      <DefaultPageSubtitle
        slug="/tabs"
        linkText="Chakra Tabs"
      />
    ) }
  >
    <Stack spacing={ 8 }>
      <Text>
        Mediatool uses 1 type of <b>steps</b>
      </Text>
      <Steps>
        <StepList>
          <Step label="Step 1" description="Name and email" />
          <Step label="Step 2" description="Pick a password" />
          <Step label="Step 3" description="Review" />
        </StepList>
        <StepPanels>
          <StepPanel>1</StepPanel>
          <StepPanel>2</StepPanel>
          <StepPanel>3</StepPanel>
        </StepPanels>
      </Steps>
      <Text>
        The <b>StepList</b> component takes 100% of the width.<br />
        It is based on a grid and each child (step) takes the same space.<br />
        If there are 4 children, it will be divided in 4 equal columns (25% each).
      </Text>
    </Stack>
  </Page>
)

export default StepsPage
