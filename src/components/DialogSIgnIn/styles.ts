import { styled } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Trigger = styled(Dialog.Trigger)`
  font-weight: bold;
  line-height: 160%;
  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${(props) => props.theme.colors.purple[100]};
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
  background: ${(props) => props.theme.colors.gray[700]};
  position: fixed;
  width: 32.25rem;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  padding: 1rem;

  > button {
    all: unset;
    cursor: pointer;
    align-self: end;

    svg {
      color: ${(props) => props.theme.colors.gray[400]};
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    width: 23.25rem;
    margin: 0 auto;

    h2 {
      margin-bottom: 2.5rem;
      font-weight: bold;
      text-align: center;
      font-size: ${(props) => props.theme.fontSizes.md};
      line-height: 140%;
      color: ${(props) => props.theme.colors.gray[200]};
    }

    button {
      display: flex;
      align-items: center;
      width: 100%;
      gap: 1.25rem;
      padding: 1.5rem 1.25rem;
      margin-bottom: 1.5rem;
      font-weight: bold;
      color: ${(props) => props.theme.colors.gray[200]};
      background: ${(props) => props.theme.colors.gray[600]};
      border-radius: 8px;
      line-height: 160%;

      border: 2px solid transparent;
      transition: colors 150ms;

      &:hover {
        border-color: ${(props) => props.theme.colors.gray[500]};
      }
    }
  }
`
