import React from 'react'
import {
  InputProps,
  useClipboard,
  useMultiStyleConfig,
} from '@chakra-ui/react'
import { CheckDuo, CopyDuo } from '@mediatool/icons'
import { IconButton } from '../icon-button'
import { Icon } from '../icon'
import { Tooltip } from '../tooltip'
import { Input, InputGroup, InputRightElement } from '../input'

interface Props extends InputProps {
  value: string
  size?: 'sm' | 'md' | 'lg'
}

export const ClipboardInput = ({
  size = 'md',
  value,
  'aria-label': ariaLabel,
  ...rest
}: Props) => {
  const { hasCopied, onCopy } = useClipboard(value)
  const { button, icon, tooltip } = useMultiStyleConfig('ClipboardInput', { size })

  return (
    <InputGroup size={ size } data-testid="clipboard-input-test-id">
      <Input
        aria-label={ `Value to copy: ${value}` }
        isReadOnly={ true }
        value={ value }
        { ...rest }
      />
      <InputRightElement>
        <Tooltip
          label={ hasCopied ? 'Copied!' : 'Copy' }
          placement="left"
          closeOnClick={ false }
          sx={ tooltip }
        >
          <IconButton
            aria-label={ ariaLabel || 'Click to copy' }
            onClick={ onCopy }
            variant={ hasCopied ? 'success' : 'default' }
            sx={ button }
          >
            <Icon
              as={ hasCopied ? CheckDuo : CopyDuo }
              sx={ icon }
            />
          </IconButton>
        </Tooltip>
      </InputRightElement>
    </InputGroup>
  )
}
