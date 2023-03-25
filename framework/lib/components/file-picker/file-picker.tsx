import React, { DragEvent, useEffect, useRef, useState } from 'react'
import { Fade, SlideFade, useMultiStyleConfig } from '@chakra-ui/react'
import {
  DownloadDuo,
  EditBoxDuo,
  FileBlankDuo,
  Image03Solid,
  TrashFullDuo,
  UploadCloudSolid,
} from '@northlight/icons'
import { identity } from 'ramda'
import AvatarEditor from 'react-avatar-editor'
import { FileEditorModal } from './file-editor-modal'
import { ConfirmDeleteModal } from './confirm-delete-modal'
import { Icon } from '../icon'
import { Lead, P } from '../typography'
import { HStack, Stack } from '../stack'
import { FilePickerProps } from './types'
import { Input } from '../input'
import { Box } from '../box'
import { ProgressBar } from '../progress'
import { Spinner } from '../spinner'
import { Image } from '../image'
import { Clickable } from '../clickable'
import { useDisclosure } from '../../hooks'
import {
  compressImage,
  convertBlobToFile,
  handleDownload,
  isFile,
  isFileImage,
  isValidFile,
  onlyAcceptsImages,
  readableFileSize,
} from './utils'
import { FileIconButton } from './file-icon-button'
import { defaultEditOptions, fiveHundredMB } from './constants'
import { useCurrentTheme } from '../../utils'

/**
 * Lets user import file of any type as Javascript File Object
 * @see MultiFilePicker
 * @see {@link https://northlight.dev/reference/file-picker}
 *
 * @example (Example)
 * (?
 * <FilePicker />
 * ?)
 *
 *
 */
export const FilePicker = ({
  acceptFormat = '*',
  onChange = identity,
  compression,
  uploaded: uploadedInitial = 0,
  maxFileSize = fiveHundredMB,
  showProgress = false,
  value = '',
  loadWithSpinner = false,
  confirmDelete = false,
  editFileOptions = defaultEditOptions,
}: FilePickerProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const imageEditorRef = useRef<AvatarEditor>(null)
  const [ file, setFile ] = useState<File | null | string>(value)

  const [ isInvalid, setIsInvalid ] = useState(false)
  const [ name, setName ] = useState('')
  const editModal = useDisclosure()
  const deleteModal = useDisclosure()
  const [ editable, setEditable ] = useState(false)
  const [ hasLoaded, setHasLoaded ] = useState(false)
  const [ isLoading, setIsLoading ] = useState(false)
  const [ isImage, setIsImage ] = useState(true)
  const [ uploaded, setUploaded ] = useState(uploadedInitial)

  const onlyImageAccepted = onlyAcceptsImages(acceptFormat)

  const isUploading = uploaded < 1

  useEffect(() => {
    setUploaded(uploadedInitial)
  }, [ uploadedInitial ])

  useEffect(() => {
    if (!isUploading) {
      setIsLoading(false)
      setHasLoaded(true)
    }
  }, [ isUploading ])

  const currentTheme = useCurrentTheme()

  const { filePicker } = useMultiStyleConfig('FilePicker', {
    isImage,
    hasLoaded,
    isInvalid,
    currentTheme,
  })

  useEffect(() => {
    if (isInvalid) {
      setTimeout(() => {
        setIsInvalid(false)
      }, 1500)
    }
  }, [ isInvalid ])

  const handleOnClick = () => {
    if (fileInputRef.current && !file) {
      fileInputRef.current.click()
    }
  }

  const handleCrop = () => {
    if (imageEditorRef.current) {
      const canvas = imageEditorRef.current.getImageScaledToCanvas()
      canvas.toBlob((blob) => {
        if (file && blob) {
          const fileName = name
          || isFile(file)
            ? (file as File).name
            : 'downloaded-file'

          const fileType = isFile(file)
            ? (file as File).type
            : '.jpg'

          const newFile = convertBlobToFile(blob, fileName, fileType)
          setFile(newFile)
          setHasLoaded(true)
          onChange(newFile)
        }
      })
      editModal.onClose()
    }
  }

  const clearImage = () => {
    if (fileInputRef.current) {
      setIsInvalid(false)
      setName('')
      setFile(null)
      setIsImage(true)
      setHasLoaded(false)
      if (!showProgress) {
        setUploaded(0)
      }
      onChange(null)
      fileInputRef.current.value = ''
    }
  }

  const handleImageUpload = async (newImage: File | null) => {
    if (newImage) {
      setIsInvalid(false)
      const isFileTypeImage = isFileImage(newImage)
      setIsImage(isFileTypeImage)
      const compressedImage = isFileTypeImage
        ? ((await compressImage(
          newImage,
          compression?.width,
          compression?.height,
          compression?.quality
        )) as File)
        : newImage
      setFile(compressedImage)
      if (!showProgress) {
        setUploaded(1)
      }
      onChange(compressedImage)
      setIsLoading(isUploading)
    }
  }

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setIsInvalid(false)
      const newImage = e.target.files[0]
      handleImageUpload(newImage)
    }
  }

  const handleDrop = (e: DragEvent) => {
    e.preventDefault()
    if (e.dataTransfer.files) {
      const newFile = e.dataTransfer.files[0]
      if (isValidFile(newFile, acceptFormat, maxFileSize).isValid) {
        handleImageUpload(newFile)
      } else {
        setIsInvalid(true)
      }
    }
  }

  return (
    <Stack maxW={ filePicker.width as number }>
      <Clickable
        onClick={ handleOnClick }
        onDrop={ handleDrop }
        onDragOver={ (e: DragEvent) => e.preventDefault() }
        onMouseEnter={ () => setEditable(true) }
        onMouseLeave={ () => setEditable(false) }
      >
        <Box sx={ filePicker }>
          <SlideFade
            in={ hasLoaded }
            style={ {
              width: '100%',
              height: '100%',
              display: hasLoaded && isImage ? 'initial' : 'none',
            } }
          >
            <Image
              src={ file
                ? isFile(file)
                  ? URL.createObjectURL(file as File)
                  : file as string
                : '' }
              alt="preview-image"
              objectFit="cover"
              borderRadius={ 8 }
              display={ hasLoaded && isImage ? 'inherit' : 'none' }
              h="full"
              w="full"
            />
          </SlideFade>
          <Input
            type="file"
            display="none"
            accept={ acceptFormat }
            ref={ fileInputRef }
            onChange={ handleChange }
          />
          <Stack
            display={ hasLoaded && isImage ? 'none' : 'default' }
            alignItems="center"
            w="85%"
            spacing="0a"
          >
            <Icon
              as={ onlyImageAccepted ? Image03Solid : UploadCloudSolid }
              boxSize="32px"
              color={
              isInvalid
                ? 'red.500'
                : editable
                  ? 'blue.500'
                  : 'gray.300'
            }
              display={ isImage && !hasLoaded ? 'inline-block' : 'none' }
              aria-label="file-icon-upload"
            />
            <Icon
              as={ FileBlankDuo }
              boxSize="32px"
              color="gray.300"
              display={ hasLoaded && !isImage ? 'inline-block' : 'none' }
            />
            <P
              variant={ isInvalid ? '16' : '14' }
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              overflow="hidden"
              maxWidth={ filePicker.width as number }
              textAlign="center"
              alignSelf="center"
            >
              { isInvalid
                ? 'File not supported'
                : file && isFile(file)
                  ? (file as File).name
                  : `Drag & drop ${onlyImageAccepted ? 'image' : 'file'} or` }
            </P>
            <Lead
              sx={ {
                textDecoration: 'underline',
                color: isInvalid ? 'red.500' : 'blue.500',
              } }
              display={ isLoading || hasLoaded ? 'none' : 'default' }
            >
              Click to upload
            </Lead>
            <Box display={ isLoading ? 'block' : 'none' } pt={ 1 }>
              { loadWithSpinner
                ? <Spinner />
                : <ProgressBar loaded={ uploaded } />
          }
            </Box>
          </Stack>
          <Fade
            in={ hasLoaded && editable }
            style={ {
              display: hasLoaded && editable ? 'flex' : 'none',
              justifyContent: 'center',
            } }
          >
            <HStack
              spacing={ 2 }
              position="absolute"
              bottom="3"
              justifyContent="center"
              bgColor="bg.layer"
              borderRadius={ 6 }
              width="90%"
              py={ 2 }
            >
              { editFileOptions.canEdit && (
              <FileIconButton
                aria-label="edit-file"
                onClick={ editModal.onOpen }
                icon={ EditBoxDuo }
              />
              ) }
              <FileIconButton
                aria-label="download-file"
                onClick={ handleDownload(file) }
                icon={ DownloadDuo }
              />
              <FileIconButton
                aria-label="delete-file"
                onClick={ confirmDelete ? deleteModal.onOpen : clearImage }
                icon={ TrashFullDuo }
                color="red.500"
              />
            </HStack>
          </Fade>
          <P
            variant="14"
            sx={ { color: 'gray.400' } }
            display={
            hasLoaded && !isImage && !isLoading
              ? 'inline-block'
              : 'none'
          }
          >
            { isFile(file) && readableFileSize((file as File)?.size as number) }
          </P>

        </Box>
      </Clickable>
      <FileEditorModal
        { ...editModal }
        fileName={ name }
        setFileName={ setName }
        image={ file }
        handleCrop={ handleCrop }
        isImage={ isImage }
        ref={ imageEditorRef }
        canEditFileName={ editFileOptions.canEditName }
        canCropImage={ editFileOptions.canEditImage }
      />
      <ConfirmDeleteModal
        { ...deleteModal }
        confirmDelete={ clearImage }
        fileName={ name || 'file' }
      />
    </Stack>
  )
}
