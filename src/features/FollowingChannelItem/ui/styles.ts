import styled from 'styled-components'

import Typography from '@/shared/ui/Typography'

export const FollowingChannelItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FollowListItemStyled = styled.div`
  position: relative;
  width: 72px;
  height: 72px;
  border-radius: 100%;
  padding: 3px;
  border: 2px solid ${(props) => [props.theme.colors.secondary.main]};
  cursor: pointer;
`

export const UserName = styled(Typography)`
  color: white;
  margin-top: 16px;
`

export const UserTime = styled(Typography)`
  margin-top: 8px;
  color: ${(props) => props.theme.colors.darkGrey.shades[1]};
`

export const UserIndicator = styled.div`
  position: absolute;
  top: 3px;
  right: 0;
`
