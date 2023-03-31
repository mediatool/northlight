import React from 'react'
import {
  LiveEditor,
  LiveError,
  LivePreview,
  LiveProvider,
  LiveProviderProps,
} from 'react-live'
import { typography } from '@northlight/tokens'
import { useMultiStyleConfig } from '@chakra-ui/system'
import { CheckDuo, CopyDuo } from '@northlight/icons'
import * as iconLib from '@northlight/icons'
import { Box } from '../../components/box'
import { Stack } from '../../components/stack'
import { IconButton } from '../../components/icon-button'
import { Icon } from '../../components/icon'
import { paleNight } from './code-editor-styling'
import { useClipboard } from '../../hooks'
import { Tooltip } from '../../components/tooltip'
import * as uiLib from '../..'

interface CodeEditorProps extends LiveProviderProps {}

export const CodeEditor = (props: CodeEditorProps) => {
  const { hasCopied, onCopy } = useClipboard(props.code ?? '')
  const { button, icon, tooltip } = useMultiStyleConfig('ClipboardInput', {
    size: 'md',
  })
  const scope = { ...uiLib, ...React, ...iconLib }

  return (
    <Box
      fontFamily="Fira Code"
      fontSize="13px"
      lineHeight="1.6"
      __css={ { pre: { borderRadius: 'lg' } } }
    >
      <LiveProvider scope={ scope } theme={ paleNight } { ...props }>
        <Stack spacing="2">
          <Box fontFamily={ typography.body.body14.fontFamily }>
            <LivePreview />
          </Box>
          <Box position="relative">
            <LiveEditor />
            <Tooltip
              label={ hasCopied ? 'Copied!' : 'Copy' }
              placement="left"
              closeOnClick={ false }
              sx={ tooltip }
            >
              <IconButton
                opacity="0.6"
                position="absolute"
                top="2"
                right="2"
                aria-label="Copy code snippet"
                onClick={ onCopy }
                variant={ hasCopied ? 'success' : 'default' }
                sx={ button }
              >
                <Icon as={ hasCopied ? CheckDuo : CopyDuo } sx={ icon } />
              </IconButton>
            </Tooltip>
          </Box>
          <LiveError />
        </Stack>
      </LiveProvider>
    </Box>
  )
}
