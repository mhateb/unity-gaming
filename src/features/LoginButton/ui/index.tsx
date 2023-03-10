import { ButtonStyled } from './styles'

type LoginButtonProps = {
  text?: string
}

const LoginButton = ({ text = 'Join Now' }: LoginButtonProps) => {
  //TODO логика для логина и тд
  return (
    <ButtonStyled width="100%" variant="static">
      {text}
    </ButtonStyled>
  )
}

export default LoginButton
