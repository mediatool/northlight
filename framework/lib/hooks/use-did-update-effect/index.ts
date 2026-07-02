import { DependencyList, EffectCallback, useEffect, useRef } from 'react'

export const useDidUpdateEffect = (effect: EffectCallback, dependencies: DependencyList) => {
  const didMountRef = useRef(false)

  useEffect(() => {
    if (didMountRef.current) {
      effect()
    }
    didMountRef.current = true
    // ponytail: wrapper hook forwards caller's deps verbatim
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)
}
