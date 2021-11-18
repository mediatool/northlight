import React from 'react'
import { HStack, Radio, RadioGroup } from '@mediatool/ui'
import { ChakraDocsLink, Page } from '../../components'

const RadioButtonPage = () => (
  <Page
    title="Radio button"
    subtitle={
      <>
        Based on &nbsp;
        <ChakraDocsLink slug="/form/radio">
          Chakra radio
        </ChakraDocsLink>
      </>
    }
  >
    <RadioGroup>
      <HStack>
        <Radio size="sm" value="1">Small radio</Radio>
        <Radio value="2">Medium radio (default)</Radio>
        <Radio size="lg" value="3">Large radio</Radio>
        <Radio colorScheme="purple" value="4">Purple color scheme radio</Radio>
        <Radio colorScheme="green" value="5">Green color scheme radio</Radio>
      </HStack>
    </RadioGroup>
  </Page>
)

export default RadioButtonPage
