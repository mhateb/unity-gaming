import styled from 'styled-components'

import Typography from '@/shared/ui/Typography'

export const UpperBarContainer = styled.div`
  height: 112px;
  display: flex;
  justify-content: space-between;
  padding-left: 64px;
  padding-right: 64px;
  width: 100%;
  box-shadow: inset 0px -1px 0px rgba(228, 228, 228, 0.1);
`

export const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  width: 174px;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 97px;
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  & > *:not(:last-child) {
    margin-right: 48px;
  }
`

export const InputText = styled(Typography)`
  margin-left: 16px;
  color: ${(props) => props.theme.colors.darkGrey.shades[1]};
`

export const AvatarImageWrapper = styled.div`
  cursor: pointer;
`
