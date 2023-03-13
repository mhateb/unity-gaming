import { IconButtonWrapper } from './styles'

type IconButtonProps = {
  icon: JSX.Element
  onClick?: () => void
}

const IconButton = ({ icon, onClick }: IconButtonProps) => {
  return <IconButtonWrapper onClick={onClick}>{icon}</IconButtonWrapper>
}

export default IconButton
