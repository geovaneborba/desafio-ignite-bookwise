import { useState } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { RatingContainer, StyledStar } from './styles'

interface FormInputValues {
  rate: number
  description: string
}

interface RatingProps {
  rate?: number
  disabled?: boolean
  handleRating?: (rate: number) => void
  register?: UseFormRegister<FormInputValues>
  size?: number
}

export function Rating({
  register,
  disabled,
  rate = 0,
  handleRating,
  size = 16,
}: RatingProps) {
  const [rating, setRating] = useState<number>(0)
  const [hover, setHover] = useState<number>(0)

  return (
    <RatingContainer>
      {disabled &&
        [...Array(5)].map((_, index) => {
          const currentRatingIndex = index + 1

          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={currentRatingIndex}
                onClick={() => {
                  setRating(currentRatingIndex)
                }}
              />
              {currentRatingIndex <= rate ? (
                <StyledStar
                  size={size}
                  weight="fill"
                  isRated={currentRatingIndex <= rate}
                />
              ) : (
                <StyledStar
                  size={size}
                  fill="outline"
                  isRated={currentRatingIndex <= rate}
                />
              )}
            </label>
          )
        })}

      {!disabled &&
        [...Array(5)].map((_, index) => {
          const currentRatingIndex = index + 1

          return (
            <label key={index}>
              <input
                {...(register && register('rate'))}
                type="radio"
                name="rating"
                value={currentRatingIndex}
                onClick={() => {
                  setRating(currentRatingIndex)
                  handleRating && handleRating(currentRatingIndex)
                }}
              />
              {currentRatingIndex <= rating || currentRatingIndex <= hover ? (
                <StyledStar
                  size={size}
                  weight="fill"
                  isRated={
                    currentRatingIndex <= rating && currentRatingIndex <= hover
                  }
                  onMouseEnter={() => {
                    setHover(currentRatingIndex)
                  }}
                  onMouseLeave={() => setHover(0)}
                />
              ) : (
                <StyledStar
                  size={size}
                  fill="outline"
                  isRated={
                    currentRatingIndex <= rating && currentRatingIndex <= hover
                  }
                  onMouseEnter={() => {
                    setHover(currentRatingIndex)
                  }}
                  onMouseLeave={() => setHover(0)}
                />
              )}
            </label>
          )
        })}
    </RatingContainer>
  )
}
