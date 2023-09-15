import { DependencyList, EffectCallback, useEffect, useRef } from 'react'

export const useDidUpdateEffect = (effect: EffectCallback, dependencies: DependencyList) => {
  const didMountRef = useRef(false)

  useEffect(() => {
    if (didMountRef.current) {
      effect()
    }
    didMountRef.current = true
  }, dependencies)
}
