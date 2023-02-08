import React from 'react'
import { CheckDuo, EditDuo, XCloseSolid } from '@northlight/icons'
import {
  HStack,
  useEditableControls,
  useEditableState,
  useMultiStyleConfig,
} from '@chakra-ui/react'
import { IconButton } from '../icon-button'
import { Icon } from '../icon'
import { EditableControlsProps } from './types'

export const EditableControls = ({ size }: EditableControlsProps) => {
  const {
    getSubmitButtonProps,
    getCancelButtonProps,
  } = useEditableControls()

  const { onEdit, isEditing } = useEditableState()

  const { button, icon, controls } = useMultiStyleConfig('EditableText', { size, isEditing })

  return (
    <HStack spacing={ 1 } sx={ controls }>
      { isEditing
        ? (
          <>
            <IconButton
              aria-label="Cancel"
              sx={ button }
              variant="danger"
              { ...getCancelButtonProps() }
            >
              <Icon sx={ icon } as={ XCloseSolid } />
            </IconButton>
            <IconButton
              aria-label="Save"
              sx={ button }
              variant="success"
              { ...getSubmitButtonProps() }
            >
              <Icon sx={ icon } as={ CheckDuo } />
            </IconButton>
          </>
        )
        : (
          <IconButton
            aria-label="Edit"
            variant="ghost"
            sx={ button }
            onClick={ onEdit }
          >
            <Icon sx={ icon } as={ EditDuo } />
          </IconButton>
        )
      }
    </HStack>
  )
}
