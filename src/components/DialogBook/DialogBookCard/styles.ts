import { styled } from 'styled-components'

export const DialogBookCardContainer = styled.div`
  padding: 1.5rem 2rem;
  background: ${(props) => props.theme.colors.gray[700]};
  border-radius: 10px;
`
export const Book = styled.div`
  display: flex;
  gap: 2rem;

  img {
    object-fit: contain;
  }

  > div {
    display: flex;
    flex-direction: column;

    h3 {
      font-weight: bold;
      color: ${(props) => props.theme.colors.gray[100]};
      font-size: ${(props) => props.theme.fontSizes.lg};
      line-height: 140%;
    }

    h4 {
      color: ${(props) => props.theme.colors.gray[400]};
      font-size: ${(props) => props.theme.fontSizes.md};
      line-height: 160%;
    }

    div {
      margin-top: auto;
    }

    span {
      color: ${(props) => props.theme.colors.gray[400]};
      font-size: ${(props) => props.theme.fontSizes.sm};
      line-height: 160%;
    }
  }
`

export const BookInfo = styled.div`
  display: flex;
  padding: 1.5rem 0;
  margin-top: 2.5rem;
  border-top: 1px solid ${(props) => props.theme.colors.gray[600]};
  gap: 3.5rem;
`

export const BookCategory = styled.div`
  display: flex;
  column-gap: 1rem;

  svg {
    color: ${(props) => props.theme.colors.green[100]};
  }

  div {
    display: flex;
    flex-direction: column;

    h3 {
      color: ${(props) => props.theme.colors.gray[300]};
      font-size: ${(props) => props.theme.fontSizes.sm};
      line-height: 160%;
    }

    h4 {
      font-weight: bold;
      color: ${(props) => props.theme.colors.gray[200]};
      font-size: ${(props) => props.theme.fontSizes.md};
      line-height: 140%;
    }
  }
`
export const BookPage = styled.div`
  display: flex;
  column-gap: 1rem;

  svg {
    color: ${(props) => props.theme.colors.green[100]};
  }

  div {
    display: flex;
    flex-direction: column;

    h3 {
      color: ${(props) => props.theme.colors.gray[300]};
      font-size: ${(props) => props.theme.fontSizes.sm};
      line-height: 160%;
    }

    h4 {
      font-weight: bold;
      color: ${(props) => props.theme.colors.gray[200]};
      font-size: ${(props) => props.theme.fontSizes.md};
      line-height: 140%;
    }
  }
`
