import { css, styled } from 'styled-components'
import backgroundImg from '@/assets/bg-sidebar.png'
import Link from 'next/link'

interface StyledLinkProps {
  isActive?: boolean
}

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 1.25rem;
  left: 1.25rem;
  bottom: 1.25rem;
  padding-top: 2.5rem;
  width: 14.5rem;
  background: url(${backgroundImg.src});
  border-radius: 12px;

  ul {
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
    row-gap: 1rem;
    width: 7.5rem;
  }
`

export const StyledLink = styled(Link)<StyledLinkProps>`
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 0.75rem;
  padding: 0.5rem 0;
  line-height: ${(props) => props.theme.lineHeights.base};
  font-size: ${(props) => props.theme.fontSizes.md};
  transition: color 150ms;

  &:hover {
    color: ${(props) => props.theme.colors.gray[100]};
  }

  ${(props) =>
    props.isActive
      ? css`
          color: ${(props) => props.theme.colors.gray[100]};
          font-weight: bold;

          &:before {
            position: absolute;
            left: 1rem;
            width: 0.25rem;
            height: 1.5rem;
            border-radius: 100%;
            background: ${props.theme.colors['gradient-vertical']};
          }
        `
      : css`
          color: ${(props) => props.theme.colors.gray[400]};
        `}

  svg {
    font-size: ${(props) => props.theme.fontSizes.md};

    &:hover {
      color: ${(props) => props.theme.colors.gray[100]};
    }
  }
`

export const UserLogged = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  margin-bottom: 1.5rem;
  column-gap: 0.75rem;

  span {
    color: ${(props) => props.theme.colors.gray[100]};
  }

  svg {
    cursor: pointer;
    color: ${(props) => props.theme.colors.danger};
    font-weight: bold;
    font-size: ${(props) => props.theme.fontSizes.md};
  }
`

export const SignOutLink = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: auto;
  margin-bottom: 1.5rem;
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: bold;
  color: ${(props) => props.theme.colors.gray[200]};
  column-gap: 0.75rem;

  span: {
    color: ${(props) => props.theme.colors.gray[100]};
  }

  svg {
    font-size: ${(props) => props.theme.fontSizes.md};
    font-weight: bold;
    color: ${(props) => props.theme.colors.green[100]};
  }
`
