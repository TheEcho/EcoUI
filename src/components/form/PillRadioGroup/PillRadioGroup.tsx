import React, { FunctionComponent, ReactNode, useCallback } from 'react'

import { Box, Text } from '../../core'
import { StyledPillRadioGroup, StyledPillRadioItem } from './PillRadioGroup.styled'

type Choice = { value: string; label: string; prefixContent?: (selected: boolean) => ReactNode }

type Props = {
  value?: string
  onChange?: (value?: string) => void
  choices: Choice[]
  allowNone?: boolean
}

export const PillRadioGroup: FunctionComponent<Props> = ({
  value,
  onChange,
  choices,
  allowNone = false,
}) => {
  const handleToggle = useCallback(
    (choice: Choice, isSelected: boolean) => {
      if (isSelected && allowNone) {
        return onChange?.(undefined)
      }

      if (!isSelected) {
        return onChange?.(choice.value)
      }
    },
    [allowNone, onChange],
  )

  return (
    <StyledPillRadioGroup direction="row" align="stretch">
      {choices.map((choice, index) => {
        const isSelected = choice.value === value

        return (
          <StyledPillRadioItem
            key={index}
            onClick={() => handleToggle(choice, isSelected)}
            padding="small"
            borderColor={isSelected ? 'secondary' : 'border'}
            borderSize={isSelected ? 'xsmall' : 'xsmall'}
            align="center"
            justify="center"
            background={isSelected ? ['secondary', 10] : 'background-transparent'}
            active={isSelected}
            isLastItem={index === choices.length - 1}
          >
            <Box direction="row" align="center" justify="center" gap="medium">
              {choice.prefixContent && choice.prefixContent(isSelected)}
              <Box flex="shrink">
                <Text
                  weight="medium"
                  color={isSelected ? 'secondary' : 'text'}
                  size="regular"
                  notSelectable
                  ellipsis
                >
                  {choice.label}
                </Text>
              </Box>
            </Box>
          </StyledPillRadioItem>
        )
      })}
    </StyledPillRadioGroup>
  )
}
