import React, { useEffect, useRef, useState } from 'react'
import { identity } from 'ramda'
import { useMultiStyleConfig } from '@chakra-ui/react'
import { DownloadDuo, EditBoxDuo, FileBlankDuo, Image03Duo } from '@northlight/icons'
import AvatarEditor from 'react-avatar-editor'
import { Icon } from '../icon'
import { SlideFade } from '../transitions'
import { P } from '../typography'
import { HStack, Stack } from '../stack'
import { convertBlobToFile, getImageAsFile, handleDownload, isFileImage, readableFileSize } from './utils.ts'
import { Box } from '../box'
import { Image as ChakraImage } from '../image'
import { useDisclosure } from '../../hooks'
import { CloseButton } from '../close-button'
import { ProgressBar } from '../progress'
import { ConfirmDeleteModal } from './confirm-delete-modal.tsx'
import { FileEditorModal } from './file-editor-modal.tsx'
import { FileIconButton } from './file-icon-button.tsx'
import { FileFormat, FileItemProps } from './types.ts'
import { defaultEditOptions } from './constants.ts'

export function FileItem<T extends FileFormat> ({
  onChangeCallback,
  addFile = identity,
  deleteFile,
  file,
  confirmDelete = true,
  isLazy = false,
  editFileOptions = defaultEditOptions,
}: FileItemProps<T>) {
  const { canEdit, canEditImage, canEditName } = editFileOptions
  const { fileItem } = useMultiStyleConfig('FilePicker')
  const editModalDisclosure = useDisclosure()
  const deleteModalDisclosure = useDisclosure()
  const imageEditorRef = useRef<AvatarEditor>(null)
  const [ fileName, setFileName ] = useState('')
  const [ show, setShow ] = useState(true)
  const [ hasLoaded, setHasLoaded ] = useState(false)
  const [ loadingImage, setLoadingImage ] = useState(true)

  useEffect(() => {
    if (file.src) {
      const buffer = new Image()
      buffer.src = file.src
      buffer.onload = () => {
        setLoadingImage(false)
      }
    }
  }, [ file.isUploading ])

  const handleCrop = async () => {
    if (imageEditorRef.current && isFileImage(file)) {
      const canvas = imageEditorRef.current.getImageScaledToCanvas()
      canvas.toBlob(async (blob) => {
        if (file && blob) {
          const newFile = convertBlobToFile(blob, fileName || file.name, file.type)
          deleteFile(file)
          addFile(newFile, file._id)
          onChangeCallback([ newFile ])
        }
      })
      editModalDisclosure.onClose()
    } else if (file.src) {
      const newFile = await getImageAsFile(file, fileName)
      deleteFile(file)
      addFile(newFile, file._id)
      onChangeCallback([ newFile ])
    }
  }

  const clearImage = () => {
    setShow(false)
    setTimeout(() => {
      deleteFile(file)
    }, 500)
  }

  return (
    <SlideFade
      in={ show }
      direction="left"
      offset={ 30 }
      enterDuration={ !isLazy ? 300 : 1 }
      exitDuration={ 300 }
    >
      <Box sx={ fileItem }>
        <HStack
          w="full"
          h="full"
          borderRadius={ 6 }
          alignItems="center"
          justifyContent="space-between"
          px={ 2 }
          pt={ file.isUploading && !hasLoaded ? 2 : 0 }
        >
          <HStack spacing={ 4 } alignItems="start" maxW="50%">
            { isFileImage(file)
              ? file.isUploading || loadingImage
                ? (
                  <Icon
                    as={ Image03Duo }
                    bgColor="gray.100"
                    color="gray.400"
                    boxSize="10"
                    borderRadius="8"
                    p="2"
                  />
                )
                : (
                  <ChakraImage
                    src={ file.src || '' }
                    alt="preview-image"
                    objectFit="cover"
                    display={ file.src ? 'inherit' : 'none' }
                    borderRadius="8"
                    boxSize="10"
                  />
                )
              : (
                <Icon
                  as={ FileBlankDuo }
                  boxSize="10"
                  p="1"
                  color="gray.300"
                />
              )
          }
            <Stack
              alignItems="start"
              justifyContent="start"
              spacing="0"
              maxW="100%"
            >
              <P
                variant="14"
                whiteSpace="nowrap"
                textOverflow="ellipsis"
                overflow="hidden"
                maxW="100%"
              >
                { file?.name }
              </P>
              <P variant="14" sx={ { color: 'gray.400' } }>
                { file?.size && readableFileSize(file.size) }
              </P>
            </Stack>
          </HStack>
          <HStack
            spacing="3"
            justifyContent="center"
            borderRadius="6"
            bgColor="bg.filled"
            display={ file.isUploading ? 'none' : 'flex' }
            p="1"
          >
            { canEdit && (
            <FileIconButton
              aria-label="Edit-image"
              onClick={ editModalDisclosure.onOpen }
              icon={ EditBoxDuo }
            />
            ) }
            <FileIconButton
              aria-label="download-image"
              onClick={ handleDownload(file) }
              icon={ DownloadDuo }
            />
            <CloseButton
              onClick={ confirmDelete ? deleteModalDisclosure.onOpen : clearImage }
            />
          </HStack>
        </HStack>
        <Box
          w="full"
          pl="16"
          pr="4"
          pb="2"
          mt="-2"
          display={ file.isUploading ? 'block' : 'none' }
        >
          <ProgressBar
            loaded={ file.size ? (file?.uploaded || 0) / file.size : 0 }
            onLoadEnd={ () => setHasLoaded(true) }
          />
        </Box>
        { canEdit && (
        <FileEditorModal
          { ...editModalDisclosure }
          fileName={ fileName || file.name }
          setFileName={ setFileName }
          image={ file.src }
          canCropImage={ canEditImage }
          canEditFileName={ canEditName }
          handleCrop={ handleCrop }
          isImage={ isFileImage(file) }
          ref={ imageEditorRef }
        />
        ) }
        <ConfirmDeleteModal
          { ...deleteModalDisclosure }
          confirmDelete={ clearImage }
          fileName={ fileName || file.name }
        />
      </Box>
    </SlideFade>
  )
}
