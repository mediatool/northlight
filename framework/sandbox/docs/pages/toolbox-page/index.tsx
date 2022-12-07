import React, { useState } from 'react'
import {
  Button,
  Code,
  Flex,
  FlipButton,
  FlipButtonGroup,
  Input,
  P,
  Stack,
  Toolbox,
  ToolboxContent,
  ToolboxHeader,
  ToolboxProps,
  useDisclosure,
} from '../../../../lib'
import { Page } from '../../components'

const ToolboxPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  type SizeType = ToolboxProps['size']
  const [ size, setSize ] = useState<SizeType>('sm')

  return (
    <Page
      title="Toolbox"
      subtitle="Toolbox is a set of components meant to create a simple drawer overlay"
    >
      <Stack spacing={ 4 }>
        <Stack mb={ 4 } spacing={ 4 } w="40%">
          <FlipButtonGroup onChange={ (v) => setSize(v as SizeType) } value={ size }>
            <FlipButton value="sm">Sm</FlipButton>
            <FlipButton value="md">Md</FlipButton>
            <FlipButton value="lg">Lg</FlipButton>
          </FlipButtonGroup>
          <Flex>
            <Button onClick={ onOpen } w="full">
              Open Toolbox
            </Button>
            <Toolbox isOpen={ isOpen } onClose={ onClose } size={ size }>
              <ToolboxHeader>Title</ToolboxHeader>
              <ToolboxContent>
                <Stack>
                  <Input />
                  <Input />
                </Stack>
              </ToolboxContent>
            </Toolbox>
          </Flex>
          <Code w="max-content" display="block" whiteSpace="pre">
            { `const { isOpen, onOpen, onClose } = useDisclosure()

<Flex>
    <Button onClick={ onOpen } w="full">Open Toolbox</Button>
    <Toolbox isOpen={ isOpen }>
        <ToolboxHeader onClose={ onClose }>
            Title
        </ToolboxHeader>
        <ToolboxContent>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
            praesentium possimus saepe perspiciatis veritatis! Accusamus
        </ToolboxContent>
    </Toolbox>
</Flex>` }
          </Code>
        </Stack>
        <P>
          <b>isOpen, onClose</b>, booleans, required, can get simply from
          useDisclosure hook,
        </P>
        <P>
          <b>direction</b>, ethier left or right, where the toolbox pops in from
        </P>
        <P>
          <b>shouldPush</b>, a boolean, if true creates a statically positioned
          box element that takes up width, causes layout change.
        </P>
        <P>
          <b>autoFocus</b>, a boolean, if true focuses on the first element in the toolboxcontent.
        </P>
      </Stack>
    </Page>
  )
}

export default ToolboxPage
