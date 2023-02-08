import React, { DragEvent, useEffect, useRef, useState } from 'react'
import { useMultiStyleConfig } from '@chakra-ui/react'
import { filter, identity } from 'ramda'
import { Image03Solid, UploadCloudSolid } from '@northlight/icons'
import { Box } from '../box'
import { Icon } from '../icon'
import { Input } from '../input'
import {
  compressImage,
  createFileObject,
  createPreviewFileObject,
  isFileImage,
  isValidFile,
  onlyAcceptsImages,
  readableFileSize,
} from './utils'
import { Clickable } from '../clickable'
import { HStack, Stack } from '../stack'
import { Lead, P } from '../typography'
import { fiveHundredMB } from './constants'
import { FileFormat, MultiFileUploaderProps } from './types'

export function MultiFileUploader<T extends FileFormat> ({
  acceptFormat = '*',
  compression,
  onChange = identity,
  addFilesToQueue = identity,
  updatePreviewFiles = identity,
  maxFileSize = fiveHundredMB,
}: MultiFileUploaderProps<T>) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [ isInvalid, setIsInvalid ] = useState(false)
  const { multiFilePicker } = useMultiStyleConfig('FilePicker', { isInvalid })
  const [ active, setActive ] = useState(false)
  const [ errorMessage, setErrorMessage ] = useState('')

  const onlyImageAccepted = onlyAcceptsImages(acceptFormat)

  useEffect(() => {
    if (isInvalid) {
      setTimeout(() => {
        setIsInvalid(false)
      }, 1500)
    }
  }, [ isInvalid ])

  const toggleHover = () => {
    setActive((prev) => !prev)
  }

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click()
    }
  }

  const updateMultipleFiles = async (newFiles: FileList) => {
    const filesArr: File[] = Array.prototype.slice.call(newFiles)
    const validFiles = filter((file) => {
      const fileCheck = isValidFile(file, acceptFormat, maxFileSize)
      if (!fileCheck.isValid) {
        setErrorMessage(fileCheck.errorMessage || '')
      }
      return fileCheck.isValid
    }, filesArr)
    if (filesArr.length > 0 && validFiles.length === 0) {
      setIsInvalid(true)
    }

    addFilesToQueue(validFiles.map((file) => createFileObject(file)))
    updatePreviewFiles(validFiles.map((file) => createPreviewFileObject(file)))
    const compressedFiles = validFiles.map(
      async (file) => (isFileImage(file)
        ? compressImage(
          file,
          compression?.width,
          compression?.height,
          compression?.quality
        ) as File
        : file)
    )
    Promise.all(compressedFiles).then((values) => {
      onChange(values)
      if (inputRef.current) {
        inputRef.current.value = ''
      }
    })
  }

  const handleDrop = (e: DragEvent) => {
    e.preventDefault()
    updateMultipleFiles(e.dataTransfer.files)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      updateMultipleFiles(e.target.files)
    }
  }
  return (
    <Clickable
      onClick={ handleClick }
      onDragOver={ (e: DragEvent) => e.preventDefault() }
      onDrop={ handleDrop }
      onMouseEnter={ toggleHover }
      onMouseLeave={ toggleHover }
    >
      <Box sx={ multiFilePicker }>
        <Stack
          alignItems="center"
          justifyContent="center"
          h="full"
          w="full"
          spacing={ 0 }
        >
          <Icon
            as={ onlyImageAccepted ? Image03Solid : UploadCloudSolid }
            boxSize="32px"
            color={
            isInvalid
              ? 'red.500 '
              : active
                ? 'blue.500 '
                : 'gray.300'
            }
            aria-label="image-icon-upload"
            mb={ onlyImageAccepted ? '0a' : 0 }
          />
          <HStack spacing={ 1 } display={ isInvalid ? 'none' : 'flex' }>
            <P variant="14" textAlign="center" alignSelf="center">
              Drag & drop { onlyImageAccepted ? 'images' : 'files' } here or
            </P>
            <Lead sx={ { textDecoration: 'underline', color: 'blue.500' } }>
              choose { onlyImageAccepted ? 'image' : 'file' }
            </Lead>
          </HStack>
          <P variant="14" textAlign="center" alignSelf="center" display={ isInvalid ? 'initial' : 'none' }>
            { errorMessage }
          </P>
          <P variant="14" sx={ { color: 'gray.400' } }>
            Max file size is { readableFileSize(maxFileSize) }
          </P>
        </Stack>
        <Input
          type="file"
          display="none"
          accept={ acceptFormat }
          onChange={ handleChange }
          multiple={ true }
          ref={ inputRef }
        />
      </Box>
    </Clickable>
  )
}
