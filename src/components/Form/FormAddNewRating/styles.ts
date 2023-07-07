import { styled } from 'styled-components'

export const Form = styled.form`
  padding: 1.5rem;
  background: ${(props) => props.theme.colors.gray[700]};
  border-radius: 8px;
`

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;

  h3 {
    font-weight: bold;
    color: ${(props) => props.theme.colors.gray[100]};
    font-size: ${(props) => props.theme.fontSizes.md};
    line-height: 140%;
  }

  & :last-child {
    margin-left: auto;
  }
`

export const TextAreaContainer = styled.div`
  position: relative;

  textarea {
    position: relative;
    resize: none;
    color: ${(props) => props.theme.colors.gray[200]};
    padding: 0.75rem 1.25rem;
    background: ${(props) => props.theme.colors.gray[800]};
    border: 1px solid ${(props) => props.theme.colors.gray[500]};
    border-radius: 4px;
    width: 100%;
    height: 10.25rem;
    margin-top: 1.5rem;
    outline: none;

    &:focus {
      border-color: ${(props) => props.theme.colors.green[200]};
    }
  }

  span {
    position: absolute;
    color: ${(props) => props.theme.colors.gray[400]};
    bottom: 0.5rem;
    right: 0.5rem;
  }
`

export const ErrorText = styled.div`
  color: ${(props) => props.theme.colors.danger};
`

export const FormActions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.75rem;

  & :first-child {
    margin-left: auto;
    svg {
      color: ${(props) => props.theme.colors.purple[100]};
    }
  }

  button {
    all: unset;
    display: flex;
    align-items: center;
    padding: 0.5rem;

    transition: colors 150ms;
    background: ${(props) => props.theme.colors.gray[600]};
    border-radius: 4px;

    &:hover {
      background: ${(props) => props.theme.colors.gray[500]};
    }

    svg {
      color: ${(props) => props.theme.colors.green[100]};
    }
  }
`
