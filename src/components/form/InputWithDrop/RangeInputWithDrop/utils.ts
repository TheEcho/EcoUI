type TProps = {
  min?: number
  max?: number
  localMin: number
  localMax: number
}
type TRes = {
  submitDisabled: boolean
  orderError: boolean
  showResetBtn: boolean
}

const shouldShowOrderError = ({ localMin, localMax }: TProps): boolean => {
  return localMin > localMax && localMax !== 0
}

const shouldSubmitBeDisabled = ({
  min,
  max,
  localMax,
  localMin,
  orderError,
}: TProps & { orderError: boolean }): boolean => {
  if (min === localMin && max === localMax) {
    return true
  }

  if (!localMin && !localMax) {
    return false
  }

  return orderError
}

const shouldShowResetBtn = ({ min, max, localMin, localMax }: TProps): boolean => {
  return (!!min || !!max) && min === localMin && max === localMax
}

export const getBtnStats = (props: TProps): TRes => {
  const orderError = shouldShowOrderError(props)
  return {
    orderError,
    submitDisabled: shouldSubmitBeDisabled({ ...props, orderError }),
    showResetBtn: shouldShowResetBtn(props),
  }
}

export const getLocalValue = ({ min, max }: { min: number; max: number }): string => {
  if (!!min && !max) {
    return `> ${min}`
  }

  if (!!max && !min) {
    return `< ${max}`
  }

  if (!!min && !!max) {
    return min === max ? `${min}` : `${min} -> ${max}`
  }

  return ''
}
