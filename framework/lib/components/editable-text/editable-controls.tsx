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
import { ButtonVariants } from '../button/types'

type MapVariantTypes = Record<EditableControlsProps['variant'], ButtonVariants>

const mapEditableVariantsToButtonSubmitVariants: MapVariantTypes = {
  brand: 'brand',
  default: 'success',
}

const mapEditableVariantsToButtonCancelVariants: MapVariantTypes = {
  brand: 'ghost',
  default: 'danger',
}

export const EditableControls = ({ size, variant = 'default' }: EditableControlsProps) => {
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
              variant={ mapEditableVariantsToButtonCancelVariants[variant] }
              { ...getCancelButtonProps() }
            >
              <Icon sx={ icon } as={ XCloseSolid } />
            </IconButton>
            <IconButton
              aria-label="Save"
              sx={ button }
              variant={ mapEditableVariantsToButtonSubmitVariants[variant] }
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
