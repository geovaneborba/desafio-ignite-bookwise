import { useState } from 'react'
import { Text } from './styles'

interface LimitedTextProps {
  text?: string
}

export function LimitedText({ text }: LimitedTextProps) {
  const [expandedText, setExpandedText] = useState(false)

  const handleViewMore = () => {
    setExpandedText((state) => !state)
  }

  return (
    <Text>
      {expandedText ? `${text} ` : `${text?.slice(0, 150)} `}

      {text && text.length > 150 && (
        <span onClick={handleViewMore}>
          {expandedText ? 'ver menos' : 'ver mais'}
        </span>
      )}
    </Text>
  )
}
