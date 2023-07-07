import { styled } from 'styled-components'

export const HomePageContainer = styled.div`
  h1 {
    display: flex;
    column-gap: 0.75rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.gray[100]};
    line-height: ${(props) => props.theme.lineHeights.short};
    font-size: ${(props) => props.theme.fontSizes['2xl']};

    svg {
      color: ${(props) => props.theme.colors.green[100]};
    }
  }

  > div {
    display: flex;
    column-gap: 4rem;
    margin-top: 2.5rem;
  }

  @media (min-width: 768px) {
  }
`
