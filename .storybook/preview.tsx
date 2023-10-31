import React, { Fragment } from "react";
import type { Preview } from '@storybook/react'
import { Global, css, ThemeProvider } from '@emotion/react'
import global from '../src/shared/global'
import reset from '../src/shared/reset'
import { theme } from '../src/shared/tokens'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview


export const decorators = [(Story) => {
  return (
    <Fragment>
    <Global
      styles={css`
        ${reset}
        `}
      />
    <Global
      styles={css`
        ${global}
      `}
    />
     <ThemeProvider theme={{...theme }}>
        {Story()}
    </ThemeProvider>
  </Fragment>
  )
}]