import React from 'react'
import {
  Blockquote,
  Capitalized,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Lead,
  P,
  Small,
  Stack,
  Tiny,
} from '../../../../lib/components'
import { Page } from '../../components'

const TypographyPage = () => (
  <Page
    title="Typography"
  >
    <Stack spacing={ 8 }>
      <Stack>
        <H1>I am a very beautiful h1</H1>
        <H2>I am a very beautiful h2</H2>
        <H3>I am a very beautiful h3</H3>
        <H4>I am a very beautiful h4</H4>
        <H5>I am a very beautiful h5</H5>
        <H6>I am a very beautiful h6</H6>
      </Stack>
      <Stack spacing={ 4 }>
        <P>
          Looking down into the dark gulf below,
          I could see a ruddy light streaming through a rift in the clouds.
        </P>
        <P variant="14">
          Looking down into the dark gulf below,
          I could see a ruddy light streaming through a rift in the clouds.
        </P>
      </Stack>
      <Stack spacing={ 4 }>
        <Blockquote>I am a blockquote</Blockquote>
        <Tiny>I am tiny</Tiny>
        <Capitalized>I am capitalized</Capitalized>
        <Small>I am small</Small>
        <Lead>I am a lead</Lead>
      </Stack>
    </Stack>
  </Page>
)

export default TypographyPage
