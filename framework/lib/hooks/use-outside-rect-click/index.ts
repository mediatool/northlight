import { any, isNil } from 'ramda'
import { MutableRefObject, useEffect, useRef } from 'react'

const isBetween = (point: number, min: number, max: number) => (point >= min && point <= max)

const isInBound = (
  clientX: number,
  clientY: number,
  ref: MutableRefObject<HTMLElement | null>
) => {
  if (isNil(ref.current)) return false
  const {
    top,
    right,
    left,
    bottom,
  } = ref.current.getBoundingClientRect()
  return isBetween(clientX, left, right) && isBetween(clientY, top, bottom)
}

export const useOutsideRectClick =
(
  ref: MutableRefObject<HTMLElement | null>,
  callback: () => void,
  ignoredRefs: MutableRefObject<HTMLElement>[] = []) => {
  const stateRef = useRef({
    isPointerDown: false,
    ignoreEmulatedMouseEvents: false,
  })

  const state = stateRef.current

  useEffect(() => {
    const handleMouseClick = (event: MouseEvent | TouchEvent) => {
      let clientX: number
      let clientY: number

      if (event instanceof MouseEvent) {
        clientX = event.clientX
        clientY = event.clientY
      } else if (event instanceof TouchEvent && event.changedTouches[0]) {
        clientX = event.changedTouches[0].clientX
        clientY = event.changedTouches[0].clientY
      } else return

      if (isNil(clientX) || isNil(clientY)) return

      if (isNil(ref?.current)) return

      if (any(
        (ignoredRef) => isInBound(clientX, clientY, ignoredRef),
        ignoredRefs)) return

      if (isInBound(clientX, clientY, ref)) return
      callback()
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
  }, [])
}
