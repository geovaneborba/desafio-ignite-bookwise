import { styled } from 'styled-components'

interface AvatarContainerProps {
  size: 'sm' | 'md' | 'lg'
}

const variants = {
  sm: 'width: 2rem; height: 2rem;',
  md: 'width: 2.625rem; height: 2.625rem;',
  lg: 'width: 4.5rem; height: 4.5rem;',
}

export const AvatarContainer = styled.div<AvatarContainerProps>`
  border-radius: 100%;
  background-image: ${(props) => props.theme.colors['gradient-vertical']};
  overflow: hidden;
  padding: 0.125rem;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => variants[props.size]}

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 100%;
  }
`
