import { css } from '@emotion/react'

const styles = css`
  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  #__next {
    min-height: 100%;
  }

  html {
    font-size: 62.5%;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
  }

  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  * {
    outline: none;
  }
`

export default styles
