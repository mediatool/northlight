import React, { useState } from 'react'
import {
  Button,
  Code,
  ProgressBar,
  Stack,
  Text,
} from '../../../../lib/components'
import { DefaultPageSubtitle, Page } from '../../components'

let buffer: any = null
const ProgressBarPage = () => {
  const [ progress, setProgress ] = useState(0)
  if (progress > 1 && buffer) {
    clearInterval(buffer)
    buffer = null
  }

  const handleClick = () => {
    setProgress(0)
    buffer = setInterval(
      () => setProgress((prev) => prev + Math.random() * 0.1),
      Math.random() * 300 + 200
    )
  }

  return (
    <Page
      title="Progress Bar"
      subtitle={ (
        <DefaultPageSubtitle
          slug="/progress"
          linkText="Chakra Progress"
        />
    ) }
    >
      <Stack spacing={ 4 }>
        <Stack mb={ 4 } spacing={ 4 } w="40%">
          <Text>Mediatool uses a custom progress bar component</Text>
          <ProgressBar loaded={ 0.5 } />
          <Code w="max-content">{ '<ProgressBar loaded={ 0.5 } />' }</Code>
          <Text>
            It takes a <b>loaded</b> prop which is a decimal between 0 and 1 indicating
            the percentage of how much has loaded
          </Text>
          <ProgressBar loaded={ progress } />
          <Button onClick={ handleClick }>Start Loading</Button>
          <Code w="max-content" display="block" whiteSpace="pre">
            { `setInterval(() => setProgress((prev) => prev + Math.random() * 0.1), Math.random() * 300 + 200)

<ProgressBar loaded={ progress }` }
          </Code>
          <Text>
            By default, the progress bar will completely disappear from the DOM
            after loading has finnished, you can adjust this with <b>hideDisplay</b>
          </Text>
          <Text>
            <b>onLoadEnd</b> is a callback that runs after the
            progress bar has loaded to 100% and faded out
          </Text>
        </Stack>
      </Stack>
    </Page>
  )
}

export default ProgressBarPage
