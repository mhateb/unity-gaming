import { ButtonStyled } from './styles'

type LoginButtonProps = {
  text?: string
}

const LoginButton = ({ text = 'Join Us' }: LoginButtonProps) => {
  //TODO логика для логина и тд
  return <ButtonStyled variant="static">{text}</ButtonStyled>
}

export default LoginButton
