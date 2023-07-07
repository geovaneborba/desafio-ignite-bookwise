import { styled } from 'styled-components'

export const ProfileContainer = styled.div`
  h1 {
    display: flex;
    gap: 0.75rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.gray[100]};
    line-height: 140%;
    font-size: ${(props) => props.theme.fontSizes['2xl']};

    svg {
      color: ${(props) => props.theme.colors.green[100]};
    }
  }

  a {
    display: flex;
    align-items: center;
    align-self: flex-start;
    width: fit-content;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    gap: 0.75rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.gray['200']};
    line-height: 140%;
    font-size: ${(props) => props.theme.fontSizes.md};
    transition: background-color 150ms;

    &:hover {
      background: ${(props) => props.theme.colors.gray['900']};
    }

    svg {
      color: ${(props) => props.theme.colors.gray['200']};
    }
  }
`

export const RatedBooksContainer = styled.div`
  display: flex;
  width: 100%;
  margin-top: 2.5rem;
  column-gap: 4rem;

  > div {
    width: 39rem;

    @media (min-width: 1536px) {
      width: 46.875rem;
    }

    form {
      div {
        display: flex;
        align-items: center;
        min-width: 27.0625rem;
        border: 1px solid ${(props) => props.theme.colors.gray['500']};
        padding: 1rem 1.25rem;
        border-radius: 4px;

        &:focus-within {
          border-color: ${(props) => props.theme.colors.green['200']};

          svg {
            color: ${(props) => props.theme.colors.green['200']};
          }
        }

        input {
          all: unset;
          width: 100%;
          color: ${(props) => props.theme.colors.gray['200']};
          background: transparent;
          outline: none;

          &::placeholder {
            color: ${(props) => props.theme.colors.gray['400']};
          }
        }

        button {
          all: unset;
          cursor: pointer;
          display: flex;
          align-items: center;
          svg {
            color: ${(props) => props.theme.colors.gray['500']};
          }
        }
      }
    }
  }
`
