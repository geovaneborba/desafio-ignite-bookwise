import { styled } from 'styled-components'

export const LastReadBookContainer = styled.div`
  h2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: ${(props) => props.theme.fontSizes.sm};
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.gray[100]};
    line-height: 160%;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 0.25rem;
      font-weight: bold;
      line-height: 160%;
      font-size: ${(props) => props.theme.fontSizes.sm};
      color: ${(props) => props.theme.colors.purple[100]};
      transition: colors 150ms;
      border-radius: 4px;

      &:hover {
        background: ${(props) => props.theme.colors.indigo[900]};
      }

      svg {
        color: ${(props) => props.theme.colors.purple[100]};
      }
    }
  }
`

export const BookCard = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1.5rem 1.25rem;
  margin-bottom: 2.5rem;
  background: ${(props) => props.theme.colors.gray[600]};
  border-radius: 0.5rem;
  column-gap: 1.5rem;

  img {
    object-fit: contain;
  }
`

export const BookDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.75rem;

    span {
      text-align: left;
      color: ${(props) => props.theme.colors.gray[400]};
      font-size: ${(props) => props.theme.fontSizes.sm};
      line-height: 160%;
    }
  }

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
`
