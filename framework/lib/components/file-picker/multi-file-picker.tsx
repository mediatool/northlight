import React, { useState } from 'react'
import { useMultiStyleConfig } from '@chakra-ui/react'
import { findIndex, identity, insert, isEmpty, isNil, remove } from 'ramda'
import { MultiFileList } from './multi-file-list'
import { createPreviewFileObject } from './utils'
import { MultiFileUploader } from './multi-file-uploader'
import { Stack } from '../stack'
import { defaultEditOptions, fiveHundredMB } from './constants'
import { FileFormat, MultiFilePickerProps } from './types'

export function MultiFilePicker<T extends FileFormat> ({
  acceptFormat = '*',
  compression,
  onChange = identity,
  files = null,
  uploadingFiles,
  deleteFile = null,
  confirmDelete = true,
  maxFileSize = fiveHundredMB,
  enablePreLoad = true,
  enableSmartLoad = true,
  editFileOptions = defaultEditOptions,
}: MultiFilePickerProps<T>) {
  const { multiFilePicker } = useMultiStyleConfig('FilePicker')
  const [ bufferFiles, setBufferFiles ] = useState<T[]>([])
  const [ previewFiles, setPreviewFiles ] = useState<T[]>([])

  const getIndexById = (id: string) => findIndex((file) => file._id === id, previewFiles)

  const addFile = (file: File, id: string) => {
    const addedFile = createPreviewFileObject(file)
    const indexOfChanged = getIndexById(id)
    const newPreviewFiles = remove(indexOfChanged, 1, previewFiles)
    const newFiles = insert(indexOfChanged, addedFile, newPreviewFiles)
    setPreviewFiles(newFiles as T[])
  }

  const handleDelete = (file: T | FileFormat) => {
    const indexOfRemoved = getIndexById(file._id)
    const newPreviewFiles = remove(indexOfRemoved, 1, previewFiles)
    setPreviewFiles(newPreviewFiles)
  }

  const updateQueuedFiles = (queuedFiles: T[]) => {
    if (enablePreLoad) {
      setBufferFiles(queuedFiles)
    }
  }

  return (
    <Stack
      spacing={ 4 }
      maxW={ multiFilePicker.maxWidth as number }
      maxH="inherit"
    >
      <MultiFileUploader
        acceptFormat={ acceptFormat }
        compression={ compression }
        onChange={ onChange }
        addFilesToQueue={ updateQueuedFiles }
        updatePreviewFiles={ setPreviewFiles }
        maxFileSize={ maxFileSize }
      />
      <MultiFileList
        files={ files || previewFiles }
        onChange={ onChange }
        uploadingFiles={
          isEmpty(files) && (uploadingFiles?.length === 0 || isNil(uploadingFiles))
            ? bufferFiles
            : uploadingFiles
        }
        deleteFile={ deleteFile || handleDelete }
        confirmDelete={ confirmDelete }
        enableSmartLoad={ enableSmartLoad }
        editFileOptions={ editFileOptions }
        addFile={ addFile }
      />
    </Stack>
  )
}
