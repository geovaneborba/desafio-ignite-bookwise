import { styled } from 'styled-components'

export const ProfileBioContainer = styled.div`
  width: 19.25rem !important;
  height: 34.6875rem;
  border-left: 1px solid ${(props) => props.theme.colors.gray['700']};
  padding: 0 3.5rem;
`

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  &::after {
    content: '';
    display: block;
    width: 2.125rem;
    height: 0.25rem;
    background: ${(props) => props.theme.colors['gradient-horizontal']};
    margin: 2.5rem 0;
    border-radius: 1rem;
  }

  h3 {
    font-size: ${(props) => props.theme.fontSizes.xl};
    font-weight: bold;
    line-height: 140%;
    color: ${(props) => props.theme.colors.gray[100]};
    margin-top: 1.25rem;
  }

  span {
    font-size: ${(props) => props.theme.fontSizes.sm};
    line-height: 160%;
    color: ${(props) => props.theme.colors.gray[400]};
  }
`

export const UserStats = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2.5rem;
`

export const UserStatItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.25rem;

  svg {
    color: ${(props) => props.theme.colors.green[100]};
  }

  div {
    span {
      font-weight: bold;
      color: ${(props) => props.theme.colors.gray[200]};
      font-size: ${(props) => props.theme.fontSizes.md};
      line-height: 140%;
    }

    h3 {
      color: ${(props) => props.theme.colors.gray[300]};
      font-size: ${(props) => props.theme.fontSizes.sm};
      line-height: 140%;
    }
  }
`
