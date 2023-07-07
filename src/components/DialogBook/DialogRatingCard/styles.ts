import styled from 'styled-components'

export const DialogRatingCardContainer = styled.div`
  padding: 1.5rem;
  background: ${(props) => props.theme.colors.gray[700]};
  border-radius: 8px;

  a {
    display: flex;
    column-gap: 1rem;
  }

  p {
    margin-top: 1.25rem;
    font-size: ${(props) => props.theme.fontSizes.sm}};
    line-height: 160%;
    color: ${(props) => props.theme.colors.gray[300]};
  }
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;


  h3 {
    font-weight: bold;
    color: ${(props) => props.theme.colors.gray[100]};
    font-size: ${(props) => props.theme.fontSizes.md}};
    line-height: 140%;
  }

  span {
    color: ${(props) => props.theme.colors.gray[400]};
    font-size: ${(props) => props.theme.fontSizes.sm};
    line-height: 160%;
  }
`
