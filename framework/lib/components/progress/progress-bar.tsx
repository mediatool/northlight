import React, { useEffect, useRef, useState } from 'react'
import { Progress } from '@chakra-ui/react'
import { VStack } from '../stack'
import { Small } from '../typography'
import { formattedTime } from './utils.ts'
import { Fade } from '../transitions'
import { ProgressBarProps } from './types.ts'
import { animationSlideTime, updateTimeThreshold } from './constants.ts'

/**
 * @see {@link https:/northlight/reference/progress-bar}
 *
 * @example
 * (?
 * () => {
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
    <Stack>
    <ProgressBar loaded={ progress } hideDisplay={true}/>
    <Button onClick={ handleClick }>Start Loading</Button>
    </Stack>
  )
 * }
 * ?)
 *
 */
export const ProgressBar = ({
  loaded,
  onLoadEnd = () => {},
  hideDisplay = true,
  ...rest
}: ProgressBarProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const timeRef = useRef<number>(0)
  const progress = Math.max(0, Math.min(loaded, 1))
  const [ timeLeft, setTimeLeft ] = useState(0)

  useEffect(() => {
    if (ref.current) {
      (ref.current.children[0] as HTMLDivElement).style.width = `${progress * 100}%`
    }

    if (timeRef.current) {
      const deltaTime = timeRef.current
        ? (Date.now() - timeRef.current) / 1000
        : 0
      if (deltaTime > updateTimeThreshold) {
        const newEstimate = progress !== 0 ? deltaTime / progress : 0
        setTimeLeft(Math.round(newEstimate - deltaTime))
      }
    } else if (progress > 0) {
      timeRef.current = Date.now()
    }
  }, [ progress ])

  return (
    <Fade
      in={ progress < 1 }
      enterDuration={ 1 }
      exitDelay={ 250 }
      exitDuration={ 1000 }
      hideDisplay={ hideDisplay }
      onTransitionComplete={ () => {
        if (progress >= 1) {
          onLoadEnd()
        }
      } }
    >
      <VStack { ...rest }>
        <Small>
          { Math.round(progress * 100) }%{ ' ' }
          { !!timeLeft && `· ${formattedTime(timeLeft)} left` }
        </Small>
        <Progress
          ref={ ref }
          sx={ { '>[role="progressbar"]': { transition: `width ${animationSlideTime}ms ease-out` } } }
          width="full"
          height="1a"
          borderRadius="full"
        />
      </VStack>
    </Fade>
  )
}
