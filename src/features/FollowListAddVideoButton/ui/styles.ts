import styled from 'styled-components'

import Typography from '@/shared/ui/Typography'

export const FollowListAddVideoButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: ${(props) => props.theme.colors.primary.main};
  border-radius: 100%;
  outline: none;
  width: 72px;
  height: 72px;
  cursor: pointer;
`

export const ButtonText = styled(Typography)`
  margin-top: 16px;
  color: white;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
