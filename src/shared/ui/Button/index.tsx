import { ButtonStyled, ButtonText } from './styles'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'normal' | 'warning' | 'succesful' | 'static'
  disabled?: boolean
  className?: string
  width?: string
}

const Button = (props: ButtonProps) => {
  return (
    <ButtonStyled {...props}>
      <ButtonText variant="button">{props.children}</ButtonText>
    </ButtonStyled>
  )
}

export default Button
