import styled from 'styled-components'

import Typography from '@/shared/ui/Typography'

export const InputStyled = styled.input`
  width: 100%;
  background-color: rgba(228, 228, 228, 0.1);
  opacity: 0.5;
  color: white;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  border-radius: 8px;
  outline: none;
  border: none;
  height: 56px;
  display: flex;
  align-items: center;
  padding-left: 23px;
  padding-right: 10px;
  box-sizing: border-box;
  border: 2px solid transparent;
  margin-top: 16px;

  &:focus {
    border: 2px solid ${(props) => props.theme.colors.primary.main};
    background-color: #242731;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.grey.main};
  }
`

export const InputLabel = styled.label``

export const InputLabelText = styled(Typography)`
  color: ${(props) => props.theme.colors.darkGrey.shades[1]};
`
