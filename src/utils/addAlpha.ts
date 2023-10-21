export function addAlpha(color: string, opacity: number): string {
  // coerce values so ti is between 0 and 1.
  const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255)
  const opacityHex = _opacity.toString(16).toUpperCase()
  return color + (opacityHex.length === 2 ? opacityHex : `0${opacityHex}`)
}
