import React, { forwardRef, useState } from 'react'
import AvatarEditor from 'react-avatar-editor'
import { ZoomInDuo } from '@mediatool/icons'
import { EditableText } from '../editable-text'
import { Icon } from '../icon'
import { HStack, Stack } from '../stack'
import { Box } from '../box'
import { Button } from '../button'
import { Slider, SliderFilledTrack, SliderThumb, SliderTrack } from '../slider'
import { Modal, ModalBody, ModalFooter, ModalHeader } from '../modal'
import { FormLabel } from '../form-control'
import { FileEditorModalProps } from './types'

export const FileEditorModal = forwardRef(({
  fileName,
  setFileName,
  isOpen,
  onClose,
  image = '',
  handleCrop,
  isImage,
  canEditFileName = true,
  canCropImage = false,
  ...rest
}: FileEditorModalProps, ref: any) => {
  const [ zoomLevel, setZoomLevel ] = useState(1)
  const [ position, setPosition ] = useState({ x: 0.5, y: 0.5 })

  const handleClose = () => {
    setZoomLevel(1)
    onClose()
  }

  return (
    <Modal
      isOpen={ isOpen }
      onClose={ onClose }
      closeOnOverlayClick={ false }
      { ...rest }
    >
      <ModalHeader>Edit { isImage ? 'image' : 'file' }</ModalHeader>
      <ModalBody
        display="flex"
        justifyContent="start"
        flexDirection="column"
        alignItems="center"
        gap={ 4 }
        minH="300px"
      >
        <Stack display={ isImage && canCropImage ? 'inherit' : 'none' }>
          <AvatarEditor
            ref={ ref }
            image={ image || '' }
            onPositionChange={ (pos) => setPosition(pos) }
            position={ position }
            width={ 250 }
            height={ 250 }
            border={ 50 }
            color={ [ 255, 255, 255, 0.7 ] }
            scale={ zoomLevel }
            rotate={ 0 }
          />
          <HStack w="90%">
            <FormLabel>Zoom</FormLabel>
            <Slider
              aria-label="zoom"
              defaultValue={ zoomLevel }
              maxW="50%"
              min={ 0.1 }
              step={ 0.05 }
              max={ 10 }
              onChange={ (value) => setZoomLevel(value) }
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb boxSize={ 6 }>
                <Icon as={ ZoomInDuo } />
              </SliderThumb>
            </Slider>
          </HStack>

        </Stack>
        { canEditFileName && (
        <Stack w="90%" direction={ isImage ? 'row' : 'column' } pt={ 2 }>
          <FormLabel>Name the file:</FormLabel>
          <Box maxW="50%">
            <EditableText onSubmit={ (v) => setFileName(v) } value={ fileName } size="sm" />
          </Box>
        </Stack>
        ) }
      </ModalBody>
      <ModalFooter>
        <HStack>
          <Button variant="danger" onClick={ handleClose }>
            Cancel
          </Button>
          <Button variant="success" onClick={ handleCrop }>
            Save
          </Button>
        </HStack>
      </ModalFooter>
    </Modal>
  )
})
