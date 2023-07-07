import { styled } from 'styled-components'

export const Layout = styled.div`
  display: flex;
  padding: 4rem 0;

  main {
    width: 100%;
    margin-left: 21.75rem;
    margin-right: 6rem;

    @media (min-width: 1921px) {
      margin: 0 auto;
      width: max-content;
    }
  }
`
