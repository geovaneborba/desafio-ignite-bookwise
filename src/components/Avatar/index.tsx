import { AvatarContainer } from './styles'
import Image from 'next/image'
import { ImageProps } from 'next/image'

interface AvatarProps extends ImageProps {
  size: 'sm' | 'md' | 'lg'
}

export function Avatar({
  size,
  src,
  width,
  height,
  alt,
  ...props
}: AvatarProps) {
  return (
    <AvatarContainer size={size}>
      <Image height={height} width={width} alt={alt} src={src} {...props} />
    </AvatarContainer>
  )
}
