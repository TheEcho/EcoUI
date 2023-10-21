import styled from '@emotion/styled'

export const StyledHeaderLayout = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6rem;

  background-color: rebeccapurple;
`
export const StyledNavLayout = styled.nav`
  grid-area: nav;
  background-color: cornflowerblue;
  /*  @media (max-width: 526px) {
    display: none;
  }*/
`
export const StyledMainLayout = styled.main`
  grid-area: content;
  background-color: darkslategray;
`
export const StyledFooterLayout = styled.footer`
  grid-area: footer;
  background-color: grey;
  height: 3rem;
`

export const StyledLayout = styled.div`
  display: grid;

  grid-template-areas:
    'header header header header'
    'nav content content content'
    'footer footer footer footer';

  grid-template-columns: 25.6rem 1fr 1fr 1fr;
  grid-template-rows: auto 1fr auto;

  height: 100vh;

  @media (max-width: 992px) {
    grid-template-areas:
      'header header header'
      'nav content content'
      'footer footer footer';
    grid-template-columns: 25.6rem 1fr 1fr;
    grid-template-rows: auto 1fr auto;
  }
  @media (max-width: 768px) {
    grid-template-areas:
      'header'
      'content'
      'footer';

    grid-template-columns: 1fr;
    grid-template-rows:
      auto /* Header */
      1fr /* Content */
      auto; /* Footer */

    nav {
      margin: 0;
    }
  }
`
