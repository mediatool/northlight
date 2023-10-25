import React, { forwardRef, useEffect } from 'react'
import { useClipboard, useMultiStyleConfig } from '@chakra-ui/react'
import { CheckDuo, CopyDuo } from '@northlight/icons'
import { IconButton } from '../icon-button'
import { Icon } from '../icon'
import { Tooltip } from '../tooltip'
import { Input, InputGroup, InputRightElement } from '../input'
import { ClipboardInputProps } from './types'

/**
 * Meant to display non editable copiable text
 * @see {@link https://northlight.dev/reference/clipboard-input}
 *
 * @example (Example)
 * ## Your token
 * (?
 * <ClipboardInput value="8aa6d075-eae2-49b3-8f65-318ece801b3b" aria-label="Copy token" />
 * ?)
 *
 */
export const ClipboardInput = forwardRef<HTMLDivElement, ClipboardInputProps>(({
  size = 'md',
  value,
  'aria-label': ariaLabel,
  ...rest
}, ref) => {
  const { hasCopied, onCopy, setValue } = useClipboard(value)
  const { button, icon, tooltip } = useMultiStyleConfig('ClipboardInput', { size })

  useEffect(() => {
    setValue(value)
  }, [ value ])

  return (
    <InputGroup size={ size } data-testid="clipboard-input-test-id" ref={ ref }>
      <Input
        textOverflow="ellipsis"
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
})
