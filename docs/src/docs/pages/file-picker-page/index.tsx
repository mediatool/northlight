import React, { useState } from 'react'
import { findIndex, propEq, remove, values } from 'ramda'
import {
  Box,
  Carousel,
  Code,
  Divider,
  FileFormat,
  FilePicker,
  Image,
  MultiFilePicker,
  MultiFileUploader,
  P,
  Stack,
} from '@northlight/ui'
import { Page } from '../../components'
import diagram from '../../images/multi-file-uploading-chain.jpg'

const generateId = () => Math.random().toString().substring(3)

const createFileObject = (file: File) => {
  const fileId = generateId()
  const fileObject = {
    _id: fileId,
    size: file.size,
    type: file.type,
    name: file.name,
    src: URL.createObjectURL(file),
    isUploading: true,
    uploaded: 0,
  }
  return fileObject
}

const CarouselImage = ({ src }: any) => <Image src={ src } rounded="md" />

let buffer: any = null
const FilePickerPage = () => {
  const [ files, setFiles ] = useState<any>([])
  const [ uploadingFiles, setUploadingFiles ] = useState<any>([])
  const [ progress, setProgress ] = useState(0)
  const [ carouselImages, setCarouselImages ] = useState<string[]>([])

  const [ savedFiles, setSavedFiles ] = useState([])

  const uploadFile = (newFiles: any) => {
    newFiles.forEach((file: any) => {
      setUploadingFiles((prev: any) => [ ...prev, createFileObject(file) ])
    })
    const uploadFilesInterval = setInterval(() => {
      setUploadingFiles((prev: any) => {
        if (prev.length <= 0) {
          clearInterval(uploadFilesInterval)
        }
        return prev
          .map((file: any) => ({
            ...file,
            uploaded: file.uploaded + 5e3 * Math.random(),
          }))
          .filter((file: any) => {
            if (file.uploaded >= file.size) {
              setFiles((prevFiles: any) => [
                ...prevFiles,
                { ...file, isUploading: false },
              ])
              return false
            }
            return true
          })
      })
    }, 100)
  }
  const handleDelete = (file: FileFormat) => {
    const removedIndex = findIndex(propEq('_id', file._id))(files)

    setFiles((prev: any) => remove(removedIndex, 1, prev))
  }

  if (progress > 1 && buffer) {
    clearInterval(buffer)
    setProgress(1)
    buffer = null
  }

  const updateProgress = (file: any) => {
    if (file) {
      setProgress(0)
      buffer = setInterval(
        () => setProgress((prev) => prev + Math.random() * 0.1),
        Math.random() * 300 + 200
      )
    }
  }

  return (
    <Page
      title="File Picker"
      subtitle="File Picker is one of the most complex and sophisticated constructions of art to date known"
    >
      <Stack spacing={ 4 }>
        <Stack mb={ 4 } spacing={ 4 } w="60%">
          <P>Mediatool uses a custom single file picker component</P>
          <FilePicker />
          <Code w="max-content">{ '<FilePicker />' }</Code>
          <P>
            It take an <b>onChange</b>, which spits out the selected file as a
            JS file object
          </P>
          <P>
            It can also take prop called <b>uploaded</b>, which is a decimal
            between 0 and 1. This is used in combination with setting{ ' ' }
            <b>showProgress</b> to true, to display a progress bar before
            showing the selected image
          </P>
          <P>
            It also takes a <b>value</b>, which can be a base64 string(if
            image), or a JS file, to control the value of the selected file
          </P>
          <FilePicker
            onChange={ updateProgress }
            uploaded={ progress }
            showProgress={ true }
          />
          <Code w="max-content" display="block" whiteSpace="pre">
            { `<FilePicker
  onChange={ (image) => setImage(image) }
  uploaded={ getProgress() }
  showProgress={ true }
/>` }
          </Code>
          <P>(example with progess)</P>
          <P>
            File Picker can also be used in the <b>{ '<Form/>' }</b> context
          </P>
          <Code w="max-content">
            { '<FilePickerField name="image" label="Select image"/>' }
          </Code>
          <P>
            The file picker field only supports image files, and encodes them in
            base64 strings. It does not support a progress bar.
          </P>
          <Divider />
          <P>
            Mediatool uses a custom <b>multi</b> file picker component
          </P>
          <MultiFilePicker />
          <P>
            It take an <b>onChange</b>, which returns the selected files as an
            array of JS File objects
          </P>
          <P>
            It takes a <b>files</b> prop, which is eithier an array of
            javascript File objects or a generic object with properties src,
            name, type, id, size(bytes), . All this files will be displayed as
            file items under the input
          </P>
          <P>
            It also takes a <b>uploadingFiles</b>, similiar to files, this is
            also an array of objects with file data, however it takes additional
            properties isUploading: true, and uploaded(how many bytes uploaded
            of total file size)
          </P>
          <P>
            Aswell as <b>deleteFile</b>, prop, which takes in an array of the
            current deleted file, and should update the files
          </P>
          <MultiFilePicker
            onChange={ uploadFile }
            deleteFile={ handleDelete }
            files={ files }
            uploadingFiles={ values(uploadingFiles) }
            enablePreLoad={ false }
            enableSmartLoad={ false }
          />
          <Code w="max-content" display="block" whiteSpace="pre">
            { `<MultiFilePicker
  onChange={ uploadFile }
  deleteFile={ handleDelete }
  files={ files }
  uploadingFiles={ uploadingFiles }
  enablePreLoad={ true }
  enableSmartLoad={ false }
/>` }
          </Code>
          <P>(example with progress)</P>
          <P>
            It takes addtional properties <b>enablePreLoad</b>, which is a
            boolean enabling to "pre" load images before the uploadingFiles has
            been updated
          </P>
          <P>
            <b>enableSmartLoad</b>, a boolean that does not remove the uploading
            files before a new file has been added to <b>files props</b> with
            matching file name
          </P>
          <P>
            Here is an explanatory diagram to explain how preLoading and
            smartLoading interacts with updating file uploading status
          </P>
          <Image src={ diagram } boxSize={ 700 } />
          <Divider />
          <P>
            Both the single file picker and the multi file picker take the
            following props
          </P>
          <P>
            <b>maxFileSize</b> - a number indicating how many bytes are allowed.
            Default is 500mb
          </P>
          <P>
            <b>acceptFormat</b> - a string, which either indicates the type of
            the file format allowed, etc { 'image/*' }, or the specific file
            extension, example: { 'acceptFormat="video/*, audio/*, .gif"' }
          </P>
          <P>
            <b>compression</b> - this is an object, on the form{ ' ' }
            { '{width: number, height: number, quality: number}' }. If the user
            tries to upload an image then the image will be downscaled to the
            resolution in px defined by set maxWidth and maxHeight, aswell as
            compressed with quality factor between 0 and 1. Defaults are
            3000x3000 resolution with quality 0.75.{ ' ' }
          </P>
          <P>
            <b>confirmDelete</b>- boolean whether pop-up modal should appear to
            confirm deletion of file
          </P>
          <P>
            <b>editFileOptions</b>, in case you don't want the user to change
            any information on the file, you can adjust the options with an
            object with properties canEdit, canEditImage(cropping) and
            canEditName.
          </P>
          <MultiFilePicker
            maxFileSize={ 5e4 }
            acceptFormat=".jpg,.jpeg"
            compression={ { width: 50, height: 50, quality: 0.1 } }
            confirmDelete={ false }
            editFileOptions={ {
              canEdit: true,
              canEditImage: false,
              canEditName: true,
            } }
          />
          <Code w="max-content" display="block" whiteSpace="pre">
            { `<MultiFilePicker
  maxFileSize={ 5e4 }
  acceptFormat=".jpg,.jpeg"
  compression={ { width: 50, height: 50, quality: 0.1 } }
  confirmDelete={ false }
  editFileOptions={ {
    canEdit: true,
    canEditImage: false,
    canEditName: true,
  } }
/>` }
          </Code>
          <P>
            Try to upload a big jpg, or any file that is not a jpg. Notice also
            that there no longer is an option to crop the image.
          </P>
          <P>
            MultiFile Picker can also be used in the <b>{ '<Form/>' }</b> context
          </P>
          <Code w="max-content">
            { '<MultiFilePickerField name="multi-image" label="Select images"/>' }
          </Code>
          <P>
            The multi file picker field only supports image files, and encodes
            them in base64 strings stored in an array.
          </P>
          <Divider />
          <P>Examples</P>
          <MultiFilePicker
            files={ savedFiles }
            enablePreLoad={ false }
            onChange={ (newFiles: any) => setSavedFiles(newFiles) }
          />
          <Code w="max-content" display="block" whiteSpace="pre">
            { `<MultiFilePicker
  files={ savedFiles }
  enablePreLoad={ false }
  onChange={ (newFiles: any) => setSavedFiles(newFiles) }
/>` }
          </Code>
          <P>
            To enable more developer control, Northlight ui also exports a multi
            file uploader, which provides the same methods such as onChange, but
            does not render any UI file-items
          </P>
          <Box maxW="40%" h="400px">
            <Carousel>
              { carouselImages.map((imageSrc) => (
                <CarouselImage src={ imageSrc } />
              )) }
            </Carousel>
          </Box>
          <MultiFileUploader
            acceptFormat="image/*"
            onChange={ (newFiles) =>
              setCarouselImages(
                newFiles.map((file) => URL.createObjectURL(file))
              )
            }
          />
          <Code w="max-content" display="block" whiteSpace="pre">
            { `<MultiFileUploader
  acceptFormat="image/*"
  onChange={ (newFiles) =>
    setCarouselImages(newFiles.map((file) => URL.createObjectURL(file)))
  }
/>` }
          </Code>
        </Stack>
      </Stack>
    </Page>
  )
}

export default FilePickerPage
