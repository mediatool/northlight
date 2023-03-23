/** A debounce function to be used together with Async select in SearchBar.
 * The reason to why the usual debounce hook does not work is because we
 * don't control the loadOptions call ourselves.
 *
 * Important to note is that the timeout here needs to NOT be reinstantiated
 * every render, otherwise it defeats the purpose as a new timeout will be
 * created every time the component re-renders.
*/
export const createDebounceFunctionInstance = (delay: number) => {
  let timeout: any

  return (fn: any) => (...args: any) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}
