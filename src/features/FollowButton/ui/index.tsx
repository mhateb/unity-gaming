import Button, { ButtonProps } from '@/shared/ui/Button'

interface FolllowButtonProps extends ButtonProps {
  text?: string
  className?: string
}

const FollowButton = ({ text = 'Follow', ...props }: FolllowButtonProps) => {
  return <Button {...props}>{text}</Button>
}

export default FollowButton
