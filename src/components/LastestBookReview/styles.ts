import { styled } from 'styled-components'

export const LatestBookReviewContainer = styled.section`
  width: 37.625rem;

  @media (min-width: 1536px) {
    width: 50rem;
  }

  h2 {
    color: ${(props) => props.theme.colors.gray[100]};
    font-size: ${(props) => props.theme.fontSizes.sm};
    line-height: ${(props) => props.theme.lineHeights.base};
    margin-bottom: 1rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    row-gap: 0.75rem;
  }
`

export const BookCard = styled.div`
  padding: 1.5rem;
  background-color: ${(props) => props.theme.colors.gray[700]};
  border-radius: 8px;
  border: 2px solid transparent;
  transition: colors 150ms;

  &:hover {
    border-color: ${(props) => props.theme.colors.gray[500]};
  }
`

export const BookCardRating = styled.div`
  display: flex;
  width: 100%;

  a {
    display: flex;
    flex: 1;
    gap: 1rem;
  }
`

export const BookCardUser = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    text-align: left;
    color: ${(props) => props.theme.colors.gray[100]};
    font-size: ${(props) => props.theme.fontSizes.md};
    line-height: 160%;
  }

  span {
    text-align: left;
    color: ${(props) => props.theme.colors.gray[400]};
    font-size: ${(props) => props.theme.fontSizes.sm};
    line-height: 160%;
  }
`

export const Book = styled.div`
  display: flex;
  gap: 1.25rem;
  margin-top: 2rem;

  img {
    object-fit: contain;
  }

  div {
    h3 {
      color: ${(props) => props.theme.colors.gray[100]};
      text-align: left;
      font-weight: bold;
      font-size: ${(props) => props.theme.fontSizes.md};
      line-height: 140%;
    }

    h4 {
      color: ${(props) => props.theme.colors.gray[400]};
      text-align: left;
      font-size: ${(props) => props.theme.fontSizes.sm};
      line-height: 160%;
    }
  }
`
