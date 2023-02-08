import React, { useEffect, useRef, useState } from 'react'
import { any, identity, map } from 'ramda'
import { FileItem } from './file-item'
import { Stack } from '../stack'
import { createPreviewFileObject, getNewUploadingFiles, isFile, isOverflowing } from './utils'
import { FileFormat, MultiFileListProps } from './types'
import { defaultEditOptions } from './constants'

export function MultiFileList<T extends FileFormat> ({
  files,
  uploadingFiles,
  onChange = identity,
  deleteFile = identity,
  addFile = identity,
  confirmDelete,
  editFileOptions = defaultEditOptions,
  enableSmartLoad = true,
}: MultiFileListProps<T>) {
  const [ uploadingFilesReference, setUploadingFilesReference ] = useState(uploadingFiles)
  const [ overflowing, setOverflowing ] = useState(false)

  const formattedFiles = files?.map((file) => (
    isFile(file)
      ? createPreviewFileObject(file as unknown as File)
      : file
  ))

  const listRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (uploadingFiles && uploadingFilesReference && files) {
      if (enableSmartLoad) {
        const newVal = getNewUploadingFiles<T>(uploadingFilesReference, uploadingFiles, files)
        setUploadingFilesReference(newVal)
      } else {
        setUploadingFilesReference(uploadingFiles)
      }
    }
    if (listRef.current) {
      setOverflowing(isOverflowing(listRef.current))
    }
  }, [ uploadingFiles, files ])

  const isLazy = uploadingFilesReference
    ? any((file: T) => file.isLazy || false, uploadingFilesReference as T[])
    : false

  return (
    <Stack
      ref={ listRef }
      spacing={ 2 }
      maxH="sm"
      pr={ overflowing ? 2 : 0 }
      overflowY="auto"
    >
      { uploadingFilesReference && map((file) => (
        <FileItem
          onChangeCallback={ onChange }
          file={ file }
          key={ file._id }
          deleteFile={ deleteFile }
          confirmDelete={ confirmDelete }
          isLazy={ isLazy }
          editFileOptions={ editFileOptions }
        />
      ), uploadingFilesReference) }
      { formattedFiles && map((file) => (
        <FileItem
          onChangeCallback={ onChange }
          addFile={ addFile }
          file={ file }
          key={ file._id }
          deleteFile={ deleteFile }
          confirmDelete={ confirmDelete }
          editFileOptions={ editFileOptions }
        />
      ), formattedFiles) }
    </Stack>
  )
}
