import { css, styled } from 'styled-components'

interface CategoryItemProps {
  active?: boolean
}

export const ExplorerPageContainer = styled.div`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.5rem;

    h2 {
      display: flex;
      align-self: flex-start;
      column-gap: 0.75rem;
      font-weight: bold;
      line-height: 140%;
      font-size: ${(props) => props.theme.fontSizes['2xl']};
      color: ${(props) => props.theme.colors.gray[100]};

      svg {
        color: ${(props) => props.theme.colors.green[100]};
      }
    }

    form {
      div {
        display: flex;
        align-items: center;
        min-width: 27.0625rem;
        border: 1px solid ${(props) => props.theme.colors.gray[500]};
        border-radius: 0.25rem;
        padding: 1.25rem 1rem;

        &:focus-within {
          border: 1px solid ${(props) => props.theme.colors.green[200]};

          svg {
            color: ${(props) => props.theme.colors.green[200]};
          }
        }

        input {
          all: unset;
          width: 100%;
          color: ${(props) => props.theme.colors.gray[200]};
          background: transparent;
          outline: none;

          &::placeholder {
            color: ${(props) => props.theme.colors.gray[400]};
          }
        }

        button {
          all: unset;
          display: flex;
          align-items: center;
          cursor: pointer;
          color: ${(props) => props.theme.colors.gray[500]};
        }
      }
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 0.75rem;
  }

  > div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
    margin-top: 3rem;

    > p {
      color: ${(props) => props.theme.colors.gray['400']};
      font-size: ${(props) => props.theme.fontSizes['md']};
    }
  }
`
export const CategoryItem = styled.li<CategoryItemProps>`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.fontSizes.md};
  line-height: 160%;
  border-radius: 32px;
  padding: 0.25rem 1rem;
  border: 1px solid ${(props) => props.theme.colors.purple[100]};
  transition: color 150ms background-color 150ms;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.colors.purple[200]};
    color: ${(props) => props.theme.colors.gray[100]};
  }

  ${(props) =>
    props.active
      ? css`
          background: ${(props) => props.theme.colors.purple[200]};
          color: ${(props) => props.theme.colors.gray[100]};
        `
      : css`
          color: ${(props) => props.theme.colors.purple[100]};
        `}
`

export const BookCard = styled.div`
  position: relative;
  display: flex;
  gap: 0.75rem;
  padding: 1.25rem;
  background: ${(props) => props.theme.colors.gray[700]};
  border-radius: 8px;

  border: 2px solid transparent;
  transition: colors 150ms;

  &:hover {
    border-color: ${(props) => props.theme.colors.gray[500]};
  }

  span {
    position: absolute;
    top: 0;
    right: 0%;
    padding: 0.25rem 0.75rem;
    font-size: ${(props) => props.theme.fontSizes.xs};
    font-weight: bold;
    color: ${(props) => props.theme.colors.green[100]};
    text-transform: uppercase;
    background: ${(props) => props.theme.colors.green[300]};
    border-top-right-radius: 4px; /* 4px */
    border-bottom-left-radius: 4px;
  }

  img {
    object-fit: contain;
    width: 6.75rem;
    height: 9.5rem;
  }

  > div {
    display: flex;
    flex-direction: column;

    h3 {
      text-align: left;
      font-weight: bold;
      color: ${(props) => props.theme.colors.gray[100]};
      font-size: ${(props) => props.theme.fontSizes.md};
      line-height: 140%;
    }

    h4 {
      text-align: left;
      color: ${(props) => props.theme.colors.gray[400]};
      font-size: ${(props) => props.theme.fontSizes.md};
      line-height: 160%;
    }

    div {
      margin-top: auto;
    }
  }
`
