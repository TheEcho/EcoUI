import { TColor } from '../../../../../shared/tokens/color'
import { ActionType } from './CardAccordionAction/CardAccordionAction'

export const getActionColor = (type: ActionType): TColor => {
  switch (type) {
    case 'cancel':
      return 'text-light'
    case 'action':
      return 'secondary-dark'
    default:
      return 'text'
  }
}
