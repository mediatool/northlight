import {
  all,
  difference,
  has,
  intersection,
  isEmpty,
  last,
  split,
  test,
  trim,
} from 'ramda'
import { imageLazyThreshold } from './constants.ts'
import {
  FileFormat,
  FileWithSizeAndType,
  FileWithSrcNameType,
  FileWithType,
} from './types.ts'

export const getResizingFactor = (
  imgWidth: number,
  imgHeight: number,
  maxWidth: number,
  maxHeight: number
) => Math.min(1, Math.min(maxWidth / imgWidth, maxHeight / imgHeight))

export const convertBlobToFile = (
  blob: Blob,
  name: string,
  type: string
) => new File([ blob ], name, { type })

export const compressImage = (
  file: File,
  maxWidth = 3000,
  maxHeight = 3000,
  quality = 0.75
) => {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')
  if (!context) return file

  const imageBuffer = new Image()
  imageBuffer.src = URL.createObjectURL(file as File)

  return new Promise((resolve) => {
    imageBuffer.onload = () => {
      const resizingFactor = getResizingFactor(
        imageBuffer.width,
        imageBuffer.height,
        maxWidth,
        maxHeight
      )
      const scaledWidth = imageBuffer.width * resizingFactor
      const scaledHeight = imageBuffer.height * resizingFactor
      canvas.width = scaledWidth
      canvas.height = scaledHeight
      context.drawImage(imageBuffer, 0, 0, scaledWidth, scaledHeight)
      canvas.toBlob(
        (blob) => {
          if (file && blob) {
            const newImage = convertBlobToFile(blob, file.name, file.type)
            resolve(newImage)
          } else {
            resolve(file)
          }
        },
        'image/jpeg',
        quality
      )
    }
  })
}

export const readableFileSize = (size: number) => {
  if (size <= 0) return 0
  const i = Math.floor(Math.log(size) / Math.log(1024))
  return `${(size / 1024 ** i).toFixed(1)} ${
    [ 'B', 'kB', 'MB', 'GB', 'TB' ][i]
  }`
}

export const getImageAsFile = async <T extends FileWithSrcNameType>(
  image: T,
  name?: string
): Promise<File> =>
  fetch(image.src as string)
    .then((res) => res.blob())
    .then(
      (blob) =>
        new Promise((resolve) => {
          const newImage = convertBlobToFile(blob, name || image.name, image.type)
          resolve(newImage)
        })
    )

const getFormatsAsArray = (acceptFormat: string) =>
  split(',', acceptFormat)
    .map((format) => trim(format))

export const getAcceptedExtensions = (acceptFormat: string) =>
  getFormatsAsArray(acceptFormat)
    .filter((format) => test(/^\./, format))
    .map((format) => format.substring(1))

export const getAcceptedFormats = (acceptFormat: string) =>
  getFormatsAsArray(acceptFormat)
    .filter((format) => test(/\//, format))
    .map((format) => split('/', format)[0])

const getFileExtension = <T extends FileWithType> (file: T) => last(split('/', file.type)) as string

const getFileFormat = <T extends FileWithType> (file: T) => split('/', file.type)[0]

export const validFileFormat = <T extends FileWithType> (
  file: T,
  acceptFormat: string
) => (
    acceptFormat === '*'
|| getAcceptedFormats(acceptFormat).includes(getFileFormat(file))
|| getAcceptedExtensions(acceptFormat).includes(getFileExtension(file))
  )

export const isValidFile = <T extends FileWithSizeAndType> (
  file:T,
  acceptFormat: string,
  maxFileSize: number
) => {
  const isValid =
    file.size as number < maxFileSize
    && validFileFormat(file, acceptFormat)

  return {
    isValid,
    errorMessage: file.size as number > maxFileSize
      ? 'File size is too big'
      : isValid
        ? ''
        : 'File format not supported',
  }
}

export function getNewUploadingFiles<T extends FileFormat> (
  prev: T[],
  curr: T[],
  files: T[]
) {
  let buffer = prev
  const prevIDs = prev ? prev.map((file) => file.name) : null
  const currentIDs = curr ? curr.map((file) => file.name) : null
  const removedItemsIDs =
    prevIDs && currentIDs && difference(prevIDs, currentIDs)
  const filesIDs = files.map((file) => file.name)

  if (removedItemsIDs) {
    if (
      removedItemsIDs.length === 0 ||
      intersection(removedItemsIDs, filesIDs).length > 0
    ) {
      buffer = curr
    } else {
      buffer.forEach((value, index) => {
        if (removedItemsIDs.includes(value.name)) {
          const updatedData = { ...value,
            uploaded: has('size', value) ? value.size : 0 }
          buffer[index] = updatedData
        }
      }
      )
    }
  } else {
    buffer = curr
  }
  return buffer
}

export const generateId = () => Math.random().toString().substring(3)

export const isFile = (file: any) => 'File' in window && file instanceof File

export const isFileImage = <T extends FileWithType>(file: T) => {
  if (isFile(file)) {
    return getFileFormat(file) === 'image'
  }
  switch (getFileFormat(file)) {
    case 'image':
    case 'jpeg':
    case 'jpg':
    case 'png':
    case 'gif':
    case 'tiff':
    case 'jfif':
      return true
    default:
      return false
  }
}

export const onlyAcceptsImages = (acceptFormat: string) => {
  if (acceptFormat === '*' || acceptFormat === '') {
    return false
  }
  const formats = getAcceptedFormats(acceptFormat)
  const extensions = getAcceptedExtensions(acceptFormat)

  const premiseOne = isEmpty(formats) || all((type: string) => type === 'image', formats)

  const premiseTwo = isEmpty(extensions)
  || all((type: string) => isFileImage({ type }), extensions)

  return premiseOne && premiseTwo
}

export const createFileObject = <T extends FileFormat>(file: File): T => {
  const fileId = generateId()
  const fileObject = {
    _id: fileId,
    size: null,
    src: null,
    type: file.type,
    name: file.name,
    isUploading: true,
    isLazy: file.size > imageLazyThreshold && isFileImage(file),
  }
  return fileObject as T
}

export const createPreviewFileObject = <T extends FileFormat>(file: File): T => {
  const fileId = generateId()
  const fileObject = {
    _id: fileId,
    size: file.size,
    src: URL.createObjectURL(file),
    type: file.type,
    name: file.name,
    isUploading: false,
    isLazy: false,
  }
  return fileObject as T
}

export const createFileObjectFromSrc = <T extends FileWithSrcNameType>(file: T) => {
  const fileId = generateId()
  const fileObject = {
    _id: fileId,
    size: null,
    src: file.src,
    type: file.type,
    name: file.name,
    isUploading: false,
    isLazy: false,
  }
  return fileObject
}

export const isOverflowing = (element: Element) => (element
  ? element.scrollHeight > element.clientHeight
  : false
)

export const toBase64 = (file: File): Promise<string> => new Promise((resolve, reject) => {
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => resolve(reader.result as string)
  reader.onerror = (error) => reject(error)
})

const correctFileExtension = (str: string) => test(/./g, str)

const getFileFormattedName = (file: File | FileFormat) => (correctFileExtension(file.name)
  ? file.name
  : `${file.name}.${getFileExtension(file)}`)
export const handleDownload = (file:
File | FileFormat | null | string | FileFormat
) => () => {
  if (!file) return
  const anchor = document.createElement('a')
  anchor.href = isFile(file) ? URL.createObjectURL(file as File) : (file as FileFormat).src || ''
  anchor.download = isFile(file)
    ? 'downloaded-file.jpg'
    : getFileFormattedName(file as File)
  anchor.click()
}
