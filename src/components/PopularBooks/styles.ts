import { styled } from 'styled-components'

export const PopularBooksContainer = styled.section`
  width: 20.25rem;

  @media (min-width: 1536px) {
    width: 31.25rem;
  }

  h2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: ${(props) => props.theme.fontSizes.sm};
    color: ${(props) => props.theme.colors.gray[100]};
    line-height: 160%;
    margin-bottom: 1rem;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.25rem 0.5rem;
      font-weight: bold;
      line-height: 160%;
      border-radius: 0.25rem;
      font-size: ${(props) => props.theme.fontSizes.sm};
      color: ${(props) => props.theme.colors.purple[100]};
      transition: colors 150ms;

      &:hover {
        background-color: ${(props) => props.theme.colors.gray[700]};
      }

      svg {
        color: ${(props) => props.theme.colors.purple[100]};
      }
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    row-gap: 0.75rem;
  }
`

export const Book = styled.div`
  display: flex;
  column-gap: 0.75rem;
  padding: 1.25rem;
  transition: colors 150ms;
  background: ${(props) => props.theme.colors.gray[700]};
  border: 2px solid transparent;
  border-radius: 8px;

  &:hover {
    border-color: ${(props) => props.theme.colors.gray[500]};
  }

  img {
    object-fit: contain;
  }

  > div {
    display: flex;
    flex-direction: column;

    h3 {
      font-size: ${(props) => props.theme.fontSizes.md};
      font-weight: bold;
      color: ${(props) => props.theme.colors.gray[100]};
      line-height: 140%;
      text-align: left;
    }

    h4 {
      color: ${(props) => props.theme.colors.gray[400]};
      font-size: ${(props) => props.theme.fontSizes.md};
      line-height: 160%;
      text-align: left;
    }

    & :last-child {
      margin-top: auto;
    }
  }
`
