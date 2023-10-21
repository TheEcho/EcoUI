export const getNewContainer = (): HTMLDivElement => {
  // setup DOM
  const container = document.createElement('div')
  document.body.appendChild(container)
  return container
}

export const removeContainer = (container: HTMLDivElement) => {
  if (container) {
    document.body.removeChild(container)
  }
}

export const findVisibleParent = (element: HTMLElement | null): HTMLElement | undefined => {
  if (element) {
    return element.offsetParent ? element : findVisibleParent(element.parentElement) || element
  }
  return undefined
}

export const findScrollParents = (element: Element, horizontal?: true) => {
  const result = []
  if (element) {
    let parent = element.parentNode as Element
    while (parent && parent.getBoundingClientRect) {
      const rect = parent.getBoundingClientRect()
      // 10px is to account for borders and scrollbars in a lazy way
      if (horizontal) {
        if (rect.width && parent.scrollWidth > rect.width + 10) {
          result.push(parent)
        }
      } else if (rect.height && parent.scrollHeight > rect.height + 10) {
        result.push(parent)
      }
      parent = parent.parentNode as Element
    }
    // last scrollable element will be the document
    // if nothing else is scrollable in the page
    if (result.length === 0) {
      result.push(document)
    } else if (result[0].tagName.toLowerCase() === 'body') {
      result.length = 0
      result.push(document)
    }
  }
  return result
}
