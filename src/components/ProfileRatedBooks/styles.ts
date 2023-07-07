import { styled } from 'styled-components'

export const ProfileRatedBooksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  row-gap: 1.5rem;

  > div {
    display: flex;
    flex-direction: column;

    span {
      margin-bottom: 0.5rem;
      font-size: ${(props) => props.theme.fontSizes.sm};
      text-align: left;
      color: ${(props) => props.theme.colors.gray['300']};
    }
  }
`

export const BookCard = styled.div`
  padding: 1.5rem;
  transition: color 150ms;
  background: ${(props) => props.theme.colors.gray['700']};
  border: 2px solid transparent;
  border-radius: 8px;

  &:hover {
    border-color: ${(props) => props.theme.colors.gray['500']};
  }

  p {
    text-align: left;
    margin-top: 1.5rem;
    font-size: ${(props) => props.theme.fontSizes.sm};
    color: ${(props) => props.theme.colors.gray['300']};
    line-height: 160%;
  }
`
export const Book = styled.div`
  display: flex;
  column-gap: 1.5rem;

  > div {
    display: flex;
    flex-direction: column;

    h3 {
      text-align: left;
      font-size: ${(props) => props.theme.fontSizes.lg};
      font-weight: bold;
      color: ${(props) => props.theme.colors.gray['100']};
      line-height: 140%;
    }

    h4 {
      text-align: left;
      font-size: ${(props) => props.theme.fontSizes.sm};
      color: ${(props) => props.theme.colors.gray['400']};
      line-height: 160%;
    }

    & :last-child {
      margin-top: auto;
    }
  }
`
