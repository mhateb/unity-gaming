import { InputHTMLAttributes } from 'react'

import { InputLabel, InputLabelText, InputStyled } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  disabled?: boolean
  placeholder?: string
  text?: string
  type: string
  className?: string
  label?: string
}

const Input = ({ className, label, ...other }: InputProps) => {
  return (
    <InputLabel>
      <InputLabelText variant="caption2">{label}</InputLabelText>
      <InputStyled className={className} {...other} />
    </InputLabel>
  )
}

export default Input
