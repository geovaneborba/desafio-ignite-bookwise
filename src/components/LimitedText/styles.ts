import { styled } from 'styled-components'

export const Text = styled.p`
  color: ${(props) => props.theme.colors.gray[100]};
  text-align: justify;
  margin-top: 1.5rem;
  font-size: ${(props) => props.theme.fontSizes.sm};
  line-height: 160%;

  span {
    color: ${(props) => props.theme.colors.purple[100]};
    font-size: ${(props) => props.theme.fontSizes.sm};
    font-weight: bold;
    transition: opacity 150ms;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }
`
