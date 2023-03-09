import { ButtonStyled, ButtonText } from './styles'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'normal' | 'warning' | 'succesful'
  disabled?: boolean
  className?: string
}

const Button = (props: ButtonProps) => {
  return (
    <ButtonStyled {...props}>
      <ButtonText variant="button">{props.children}</ButtonText>
    </ButtonStyled>
  )
}

export default Button
