import { css, styled } from 'styled-components'
import { Star } from 'phosphor-react'

interface StarProps {
  isRated?: boolean
}

export const RatingContainer = styled.div`
  display: flex;

  label {
    input {
      display: none;
      visibility: hidden;
    }
  }
`

export const StyledStar = styled(Star)<StarProps>`
  color: ${(props) => props.theme.colors.purple[100]};
  cursor: pointer;

  ${(props) =>
    props.isRated &&
    css`
      color: ${(props) => props.theme.colors.purple[100]};
    `}
`
