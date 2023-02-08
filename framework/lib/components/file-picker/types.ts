import { ComponentType } from 'react'
import { IconButtonProps, StackDirection } from '@chakra-ui/react'
import { RegisterOptions } from 'react-hook-form'
import { ModalProps } from '../modal/types'
import { ButtonVariants } from '../button/types'

interface CompressionType {
  width: number
  height: number
  quality: number
}

interface EditFileOptionsType {
  canEdit: boolean
  canEditImage: boolean
  canEditName: boolean
}

export interface FileFormat {
  src: string | null
  name: string
  type: string
  _id: string
  isLazy?: boolean
  size: number | null
  isUploading?: boolean
  uploaded?: number
  lastModified?: number
}

export type FileWithType = Pick<FileFormat, 'type'>

export type FileWithSrcNameType = Pick<FileFormat, 'src' | 'name' | 'type'>

export type FileWithSizeAndType = Pick<FileFormat, 'type' | 'size'>

export type ModalBooleans = {
  canCropImage?: boolean
  canEditFile?: boolean
  confirmDelete?: boolean
  canEditFileName?: boolean
}
export interface FilePickerProps {
  acceptFormat?: string
  onChange?: (image: File | null) => void
  compression?: CompressionType
  isUploading?: boolean
  uploaded?: number
  maxFileSize?: number
  value?: string | null
  loadWithSpinner?: boolean
  confirmDelete?: boolean
  editFileOptions?: EditFileOptionsType
  showProgress?: boolean
}

export interface FilePickerFieldProps extends Omit<FilePickerProps, 'onChange'> {
  name: string
  label: string
  validate?: RegisterOptions
  isRequired?: boolean
  direction?: StackDirection
  onChange?: (File: string | null) => void
}
export interface MultiFilePickerFieldProps extends Omit<FilePickerFieldProps, 'onChange'> {
  onChange?: (File: string[]) => void
}
export interface MultiFilePickerProps<T extends FileFormat> extends Omit<FilePickerProps, 'onChange'> {
  onChange?: (files: File[]) => void
  compression?: CompressionType
  files?: T[] | null
  uploadingFiles?: T[]
  deleteFile?: ((file: T | FileFormat) => void) | null
  enablePreLoad?: boolean
  enableSmartLoad?: boolean
  confirmDelete?: boolean
}

export interface MultiFileUploaderProps<T extends FileFormat> {
  acceptFormat?: string
  compression?: CompressionType
  maxFileSize?: number
  addFilesToQueue?: (files: T[]) => void
  updatePreviewFiles?: (files: any[]) => void
  onChange?: (files: File[]) => void
}
export interface MultiFileListProps<T extends FileFormat> {
  files?: T[]
  uploadingFiles?: T[]
  deleteFile?: (file: T | FileFormat) => void
  onChange?: (files: File[]) => void
  addFile?: (file: File, id: string) => void
  enableSmartLoad?: boolean
  editFileOptions?: EditFileOptionsType
  confirmDelete?: boolean
}

export interface FileItemProps<T> {
  file: T | FileFormat
  deleteFile: (file: T | FileFormat) => void
  onChangeCallback: (files: File[]) => void
  addFile?: (file: File, id: string) => void
  isLazy?: boolean
  editFileOptions?: EditFileOptionsType
  confirmDelete?: boolean
}
export interface ConfirmDeleteModalProps extends Omit<ModalProps, 'children'> {
  confirmDelete: () => void
  fileName: string
}

export interface FileEditorModalProps extends Omit<ModalProps, 'children'> {
  fileName: string
  canEditFileName?: boolean
  canCropImage?: boolean
  isImage: boolean
  handleCrop: () => void
  image: File | string | null
  setFileName: (value: string) => void
}

export interface FileIconButtonProps extends Omit<IconButtonProps, 'icon' | 'ButtonVariants'> {
  icon: ComponentType<any>
  variant?: ButtonVariants
}
