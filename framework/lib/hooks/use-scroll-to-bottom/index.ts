import { RefObject, useEffect } from 'react'
import { smoothScrollToBottom } from './utils/smooth-scroll-to-bottom'

export interface Message {
  content: string
  role: string
  type?: string
  data?: string
}

export const useScrollToBottom = (scrollView: RefObject<HTMLDivElement>, messages: Message[]) => {
  useEffect(() => {
    const div = scrollView.current
    if (div) {
      smoothScrollToBottom(div)
    }
  }, [ messages ])
}
