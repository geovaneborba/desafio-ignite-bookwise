import { styled } from 'styled-components'

export const SignInPageContainer = styled.div``

export const SignInContainer = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr;
  padding: 1rem;
  max-width: 120rem;

  > img {
    border-radius: 4px;
  }

  @media (max-width: 480px) {
    > img {
      display: none;
      object-fit: cover;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: 1.5fr 1fr;
    gap: 2rem;
    padding: 1.25rem;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media (min-width: 1366px) {
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    display: flex;

    > img {
      width: 50rem;
      height: 100vh;
    }
  }
`

export const SocialLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;

  width: 100%;

  @media (min-width: 768px) {
    width: 23.25rem;
  }

  @media (min-width: 1366px) {
    align-self: center;
    justify-self: center;
    margin: 0 auto;
    width: 31.25rem;
  }

  h2 {
    font-size: ${(props) => props.theme.fontSizes['2xl']};
    font-weight: bold;
    color: ${(props) => props.theme.colors.gray[100]};
    line-height: 140%;
  }

  h3 {
    margin-bottom: 2.5rem;
    color: ${(props) => props.theme.colors.gray[200]};
    line-height: 160%;
    font-size: ${(props) => props.theme.fontSizes['md']};
  }

  button {
    all: unset;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1.25rem;
    height: 4.5rem;
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.gray[200]};
    background: ${(props) => props.theme.colors.gray[600]};
    border-radius: 8px;
    line-height: 160%;
  }

  & :last-child {
    a {
      color: ${(props) => props.theme.colors.gray[200]};
      display: flex;
      align-items: center;
      width: 100%;
      gap: 1.25rem;
    }
  }
`
