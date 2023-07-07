import { styled } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Trigger = styled(Dialog.Trigger)`
  all: unset;
  cursor: pointer;
`

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: ${(props) => props.theme.colors.black};
  opacity: 0.6;
`

export const Content = styled(Dialog.Content)`
  display: flex;
  flex-direction: column;
  padding: 1.5rem 3rem 0;
  overflow-y: auto;
  position: fixed;
  width: 41.25rem;
  right: 0;
  top: 0;
  height: 100%;
  background: ${(props) => props.theme.colors.gray[800]};

  > button {
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    align-self: end;
    margin-bottom: 1rem;

    svg {
      color: ${(props) => props.theme.colors.gray[400]};
    }
  }
`

export const Rate = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2.5rem;
  margin-bottom: 1rem;

  h3 {
    font-size: ${(props) => props.theme.fontSizes.md};
    line-height: 160%;
    color: ${(props) => props.theme.colors.gray[200]};
  }

  button {
    all: unset;
    cursor: pointer;
    font-weight: bold;
    line-height: 160%;
    font-size: ${(props) => props.theme.fontSizes.md};
    color: ${(props) => props.theme.colors.purple[100]};
  }
`

export const Ratings = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
`
