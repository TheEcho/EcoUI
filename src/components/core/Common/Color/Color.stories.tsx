import { FunctionComponent } from 'react'

import { color as tokenColor, TColor } from '../../../../shared/tokens/color'
import { Box, Grid } from '../..'
import { Paragraph } from '../../Paragraph'
import { Text } from '../../Text'
import { getColorsByCategory } from './color.utiles'

export default {
  title: 'Core/Color',
}

const BoxColorWithLabel: FunctionComponent<{ color: TColor }> = ({ color }) => (
  <Box direction="column" flex={false} elevation="medium">
    <Box background={color} height={6} flex={false} />
    <Box
      background="background-light"
      align="center"
      justify="center"
      direction="column"
      paddingVertical="xsmall"
      flex={false}
    >
      <Paragraph size="small" color="text-light" textAlign="center">
        {color}
      </Paragraph>
      <Text size="small" color="text-light">
        {tokenColor[color]}
      </Text>
    </Box>
  </Box>
)

const ColorGroup: FunctionComponent<{ name: string; colors: TColor[] }> = ({ name, colors }) => (
  <Box direction="column" flex={false}>
    <Box marginBottom="medium" flex={false}>
      <Text size="large">{name}</Text>
    </Box>
    <Grid itemPerRow={7} direction="row" gap="xlarge" flex={false}>
      {colors.map((color, i) => (
        <BoxColorWithLabel key={`${name}-${i}`} color={color} />
      ))}
    </Grid>
  </Box>
)

export const All: FunctionComponent = () => {
  const colorsByCategory = getColorsByCategory()

  return (
    <Box direction="column" padding="xlarge" gap="xlarge">
      {colorsByCategory.map(
        (colorCategory) =>
          !!colorCategory.colors.length && (
            <ColorGroup
              key={colorCategory.key}
              name={`${colorCategory.key} colors`}
              colors={colorCategory.colors}
            />
          ),
      )}
    </Box>
  )
}
