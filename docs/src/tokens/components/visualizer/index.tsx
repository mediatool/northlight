import React, { useEffect, useRef } from 'react'
import { RefreshDataSolid } from '@northlight/icons'
import { keyframes } from '@emotion/react'
import { Box, Icon, IconButton, Tooltip } from '@northlight/ui/ts'
import { Tokens } from '../../utils/types'

interface Props {
  data: Tokens
  title: string
}

const rotate = keyframes`
  from {transform: rotate(0deg)}
  to {transform: rotate(360deg)}
`

export const Visualizer = ({ data, title }: Props) => {
  const ref = useRef<HTMLIFrameElement>(null)

  const generateGraph = () => {
    const iframe = ref.current
    iframe?.contentWindow?.postMessage({
      json: JSON.stringify({ [title as string]: data }),
    }, '*')
  }

  useEffect(() => {
    if (ref.current) {
      setTimeout(generateGraph, 250)
    }
  }, [ ref.current ])

  return (
    <Box position="relative" height="full" w="100%">
      <Tooltip label="Force refresh" placement="right">
        <IconButton
          variant="brand"
          isRound={ true }
          position="absolute"
          top={ 9 }
          left={ 8 }
          aria-label="Force reload"
          icon={ <Icon as={ RefreshDataSolid } /> }
          onClick={ generateGraph }
          _hover={ {
            animation: `${rotate} infinite 1.5s linear`,
          } }
        />
      </Tooltip>
      <iframe
        ref={ ref }
        title="jsoncrackEmbed"
        id="jsoncrackEmbed"
        src="https://jsoncrack.com/widget"
        width="100%"
        height="100%"
      />
    </Box>
  )
}
