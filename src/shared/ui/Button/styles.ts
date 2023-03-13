import styled, { DefaultTheme } from 'styled-components'

import Typography from '../Typography'

import { ButtonProps } from './index'

const getBackgroundColor = (theme: DefaultTheme, props: ButtonProps) => {
  if (props.disabled) return theme.colors.grey.main
  if (props.variant === 'normal') return theme.colors.darkGrey.main
  if (props.variant === 'static') return theme.colors.primary.main
  if (props.variant === 'warning') return theme.colors.accent02.shades[1]
  if (props.variant === 'succesful') return theme.colors.others[6]
}

const getHoverBackgroundColor = (theme: DefaultTheme, props: ButtonProps) => {
  if (props.disabled) return 'rgb(228, 228, 228, 0.5)'
  if (props.variant === 'normal') return theme.colors.primary.main
  if (props.variant === 'warning') return 'rgb(255, 117, 76, 0.8)'
  if (props.variant === 'succesful') return theme.colors.others[7]
}

const getColorText = (theme: DefaultTheme, disabled?: boolean) => {
  if (disabled) return theme.colors.text.active
  return theme.colors.white.main
}

export const ButtonStyled = styled.button<{ width?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || 'fit-content'};
  height: 56px;
  border-radius: 16px;
  background-color: ${(props) => getBackgroundColor(props.theme, props)};
  cursor: pointer;
  border: none;
  outline: none;
  color: ${(props) => getColorText(props.theme, props.disabled)};

  &:hover {
    background-color: ${(props) => getHoverBackgroundColor(props.theme, props)};
  }
`

export const ButtonText = styled(Typography)``
