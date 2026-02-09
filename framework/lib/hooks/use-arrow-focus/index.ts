import { useFocusManager } from '@react-aria/focus'

export const useArrowFocus = (columns: number) => {
  const {
    focusNext: next,
    focusPrevious: previous,
    focusFirst,
    focusLast,
  } = useFocusManager()!

  const defaultOpts = {
    ArrowRight: {
      wrap: true,
      repeat: 1,
    },
    ArrowLeft: {
      wrap: true,
      repeat: 1,
    },
    ArrowDown: {
      wrap: false,
      repeat: columns,
    },
    ArrowUp: {
      wrap: false,
      repeat: columns,
    },
  }

  const focusPrevious = ({
    repeat,
    wrap,
  } = defaultOpts.ArrowLeft) => {
    for (let i = 0; i < repeat; i += 1) {
      previous({ wrap })
    }
  }

  const focusNext = ({
    repeat,
    wrap,
  } = defaultOpts.ArrowRight) => {
    for (let i = 0; i < repeat; i += 1) {
      next({ wrap })
    }
  }

  const defaultArrows = (e: any) => {
    switch (e.key) {
      case 'ArrowRight':
        focusNext(defaultOpts.ArrowRight)
        break
      case 'ArrowLeft':
        focusPrevious(defaultOpts.ArrowLeft)
        break
      case 'ArrowDown':
        e.preventDefault()
        focusNext(defaultOpts.ArrowDown)
        break
      case 'ArrowUp':
        e.preventDefault()
        focusPrevious(defaultOpts.ArrowUp)
        break
      default:
        break
    }
  }

  return {
    defaultArrows,
    focusPrevious,
    focusNext,
    focusFirst,
    focusLast,
  }
}
