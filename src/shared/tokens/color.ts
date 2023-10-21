export const color = {
  // Main colors
  'primary-darker': '#A3311C',
  'primary-dark': '#C13B23',
  primary: '#D54227',
  'primary-light': '#EF735D',
  'primary-lighter': '#FBECE9',
  'primary-bright': '#FDF6F4',

  'secondary-darker': '#17497E',
  'secondary-dark': '#1550A7',
  secondary: '#4270C7',
  'secondary-light': '#548FE5',
  'secondary-lighter': '#D1EDFF',
  'secondary-bright': '#EDF1FA',

  // Text colors
  'text-dark': '#212B36',
  text: '#4D5E71',
  'text-light': '#798B9D',
  'text-lighter': '#FFFFFF',

  // Border colors
  'border-dark': '#AABBCC',
  border: '#C0CCD9',
  'border-light': '#E1E5EF',

  // Background colors
  'background-darker': '#C0CCD9',
  'background-dark': '#E1E5EF',
  background: '#EFF2F9',
  'background-light': '#F7F8FA',
  'background-lighter': '#FFFFFF',
  'background-transparent': 'transparent',

  // Icon colors
  'icon-dark-purple': '#3C2E4D',
  'icon-yellow': '#FFD345',
  'icon-blue': '#7CBAE3',
  'icon-dark-blue': '#17497E',
  'icon-green': '#69CB8B',
  'icon-salmon': '#FFA38D',

  // Utilities Colors
  'success-ink': '#06391F',
  'success-darker': '#0A5C33',
  'success-dark': '#0E7642',
  success: '#148844',
  'success-light': '#A2E59D',
  'success-lighter': '#EAFFE2',

  'info-ink': '#17497E',
  'info-darker': '#1550A7',
  'info-dark': '#4270C7',
  info: '#548FE5',
  'info-light': '#D1EDFF',
  'info-lighter': '#EDF1FA',

  'warning-ink': '#382405',
  'warning-darker': '#764E0F',
  'warning-dark': '#955912',
  warning: '#F7CA65',
  'warning-light': '#FEF7E0',
  'warning-lighter': '#FFFCEE',

  'critical-ink': '#41031D',
  'critical-darker': '#980732',
  'critical-dark': '#AA1441',
  critical: '#D73771',
  'critical-light': '#FEA2A7',
  'critical-lighter': '#FFDDDE',

  // Other colors
  'underline-yellow': '#FFFE54',
}

export type TColor = keyof typeof color

export default color
