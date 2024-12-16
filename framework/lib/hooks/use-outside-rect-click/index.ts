import { isNil } from 'ramda'
import { MutableRefObject, useEffect, useRef } from 'react'

const isBetween = (point: number, min: number, max: number) => (point >= min && point <= max)

export const useOutsideRectClick =
(ref: MutableRefObject<HTMLElement | null>, callback: (event: MouseEvent | TouchEvent) => void) => {
  const stateRef = useRef({
    isPointerDown: false,
    ignoreEmulatedMouseEvents: false,
  })

  const state = stateRef.current

  useEffect(() => {
    const handleMouseClick = (event: MouseEvent | TouchEvent) => {
      let clientX
      let clientY

      if (event instanceof MouseEvent) {
        clientX = event.clientX
        clientY = event.clientY
      } else if (event instanceof TouchEvent && event.changedTouches[0]) {
        clientX = event.changedTouches[0].clientX
        clientY = event.changedTouches[0].clientY
      }

      if (isNil(clientX) || isNil(clientY)) return

      if (isNil(ref?.current)) return

      const {
        top,
        right,
        left,
        bottom,
      } = ref.current.getBoundingClientRect()

      const isInBound = isBetween(clientX, left, right) && isBetween(clientY, top, bottom)

      if (isInBound) return
      callback(event)
    }

    const onPointerDown: any = () => {
      state.isPointerDown = true
    }

    const onMouseUp: any = (event: MouseEvent) => {
      if (state.ignoreEmulatedMouseEvents) {
        state.ignoreEmulatedMouseEvents = false
        return
      }

      if (state.isPointerDown) {
        state.isPointerDown = false
        handleMouseClick(event)
      }
    }

    const onTouchEnd = (event: TouchEvent) => {
      state.ignoreEmulatedMouseEvents = true
      if (state.isPointerDown) {
        state.isPointerDown = false
        handleMouseClick(event)
      }
    }

    document.addEventListener('mousedown', onPointerDown, true)
    document.addEventListener('mouseup', onMouseUp, true)
    document.addEventListener('touchstart', onPointerDown, true)
    document.addEventListener('touchend', onTouchEnd, true)

    return () => {
      document.removeEventListener('mousedown', onPointerDown, true)
      document.removeEventListener('mouseup', onMouseUp, true)
      document.removeEventListener('touchstart', onPointerDown, true)
      document.removeEventListener('touchend', onTouchEnd, true)
    }
  }, [ callback ])
}
