import { color as tokenColor, TColor } from '../../../../shared/tokens/color'

export const getColorsByCategory = (): { key: string; colors: TColor[] }[] => {
  const colors = Object.keys(tokenColor) as TColor[]

  const mainColors: TColor[] = []
  const textColors: TColor[] = []
  const borderColors: TColor[] = []
  const backgroundColors: TColor[] = []
  const iconColors: TColor[] = []
  const utilitiesColor: TColor[] = []
  const otherColors: TColor[] = []

  const allColorCategories = [
    { key: 'Main', colors: mainColors },
    { key: 'Text', colors: textColors },
    { key: 'Border', colors: borderColors },
    { key: 'Background', colors: backgroundColors },
    { key: 'Icon', colors: iconColors },
    { key: 'Utilities', colors: utilitiesColor },
    { key: 'Other', colors: otherColors },
  ]

  colors.forEach((color) => {
    if (color.includes('primary') || color.includes('secondary')) {
      mainColors.push(color)
    } else if (color.includes('text')) {
      textColors.push(color)
    } else if (color.includes('border')) {
      borderColors.push(color)
    } else if (color.includes('background')) {
      backgroundColors.push(color)
    } else if (color.includes('icon')) {
      iconColors.push(color)
    } else if (
      color.includes('critical') ||
      color.includes('warning') ||
      color.includes('info') ||
      color.includes('success')
    ) {
      utilitiesColor.push(color)
    } else {
      otherColors.push(color)
    }
  })

  return allColorCategories
}
