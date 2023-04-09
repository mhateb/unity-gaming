import styled, { css } from 'styled-components'

import Typography from '@/shared/ui/Typography'

import { AuthorWidgetProps } from '.'

export const AuthorWidgetContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const AuthorAvatar = styled.div<{
  variant?: AuthorWidgetProps['variant']
}>`
  position: relative;
  width: 32px;
  height: 32px;
  border-radius: 100%;
  margin-right: 8px;

  ${(props) =>
    props.variant === 'trending' &&
    css`
      width: 56px;
      height: 56px;
    `}
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const Username = styled(Typography)`
  margin-right: 3px;
  color: white;
`

export const UserCategory = styled(Typography)`
  margin-top: 3px;
  color: ${(props) => props.theme.colors.darkGrey.shades[1]};
`

export const UserNameContainer = styled.div`
  display: flex;
  align-items: center;
`

export const WatchingCounterWrapper = styled.div`
  margin-top: 4px;
`
