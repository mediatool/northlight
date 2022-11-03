import React from 'react'
import { AgencySolid } from '@mediatool/icons'
import {
  Box,
  Code,
  FlipButton,
  FlipButtonGroup,
  H4,
  P,
  Stack,
  Text,
} from '../../../../lib/components'
import { Page } from '../../components'

const FlipButtonPage = () => (
  <Page
    title="Flip Button"
    subtitle="The flip button is one of our most fancied components"
  >
    <Stack spacing={ 4 }>
      <Stack mb={ 4 } spacing={ 4 }>
        <Text>Mediatool uses a 2 custom flip button components</Text>
        <Stack w="40%" spacing={ 4 }>
          <H4>Radio Button Group { 'isMulti={false}' }</H4>
          <FlipButtonGroup name="select">
            <FlipButton value="one">One</FlipButton>
            <FlipButton value="two">Two</FlipButton>
            <FlipButton value="three">Three</FlipButton>
          </FlipButtonGroup>
          <H4>Checkbox Button Group { 'isMulti={true}' }</H4>
          <FlipButtonGroup isMulti={ true }>
            <FlipButton value="one">One</FlipButton>
            <FlipButton value="two">Two</FlipButton>
            <FlipButton value="three">Three</FlipButton>
          </FlipButtonGroup>
          <Code w="max-content" display="block" whiteSpace="pre">{ `<FlipButtonGroup isMulti={ boolean }>
  <FlipButton value="one">One</FlipButton>
  <FlipButton value="two">Two</FlipButton>
  <FlipButton value="three">Three</FlipButton>
</FlipButtonGroup>` }
          </Code>
          <H4>It comes in two variants</H4>
          <P>{ 'variant=\'brand\'' }</P>
          <FlipButtonGroup variant="brand">
            <FlipButton value="one">One</FlipButton>
            <FlipButton value="two">Two</FlipButton>
            <FlipButton value="three">Three</FlipButton>
          </FlipButtonGroup>
          <P>{ 'variant=\'default\'' }</P>
          <FlipButtonGroup>
            <FlipButton value="one">One</FlipButton>
            <FlipButton value="two">Two</FlipButton>
            <FlipButton value="three">Three</FlipButton>
          </FlipButtonGroup>
          <H4>You can change direction</H4>
          <P>{ 'direction=\'column\'' }</P>
          <Box w="40%">
            <FlipButtonGroup direction="column">
              <FlipButton value="one">One</FlipButton>
              <FlipButton value="two">Two</FlipButton>
              <FlipButton value="three">Three</FlipButton>
            </FlipButtonGroup>
          </Box>
          <H4>You can pass a custom icon( both on group and specific flipbutton) </H4>
          <P>{ 'icon={AgencySolid}' }</P>
          <FlipButtonGroup icon={ AgencySolid }>
            <FlipButton value="one">One</FlipButton>
            <FlipButton value="two">Two</FlipButton>
            <FlipButton value="three">Three</FlipButton>
          </FlipButtonGroup>
          <H4>It comes in four sizes</H4>
          <FlipButtonGroup>
            <FlipButton size="xs" value="xs">xs</FlipButton>
            <FlipButton size="sm" value="sm">sm</FlipButton>
            <FlipButton size="md" value="md">md</FlipButton>
            <FlipButton size="lg" value="lg">lg</FlipButton>
          </FlipButtonGroup>
        </Stack>
      </Stack>
    </Stack>
  </Page>
)

export default FlipButtonPage
