import styled from 'styled-components'

import Typography from '@/shared/ui/Typography'

export const SidebarContainer = styled.section`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background.bg1};
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  box-shadow: inset -1px 0px 0px rgba(228, 228, 228, 0.1);
  width: 256px;
`

export const LogoContainer = styled.div`
  position: relative;
  padding-left: 20px;

  & > img {
    width: 141px;
    height: 32px;
  }
`

export const FeedsLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 36px;
`

export const BlockTitle = styled(Typography)`
  color: ${(props) => props.theme.colors.darkGrey.shades[1]};
  margin-bottom: 16px;
  padding-left: 20px;
`

BlockTitle.defaultProps = {
  variant: 'caption2',
}

export const Block = styled.div`
  display: flex;
  flex-direction: column;

  &:last-of-type {
    margin-bottom: 80px;
  }
`

export const FeedsLinkItem = styled.div`
  height: 56px;
  width: 216px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 12px;
  cursor: pointer;
`

export const FeedsLinkItemIconWrapper = styled.div``

export const FeedsLinkAddVideoIconWrapper = styled.div`
  margin-left: auto;
`

export const FeedsLinkItemText = styled(Typography)`
  color: ${(props) => props.theme.colors.darkGrey.shades[1]};
  margin-left: 16px;
`

FeedsLinkItemText.defaultProps = {
  variant: 'menu',
}

export const List = styled.div``

export const FollowingItem = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  width: 176px;
  cursor: pointer;
`

export const FollowingItemAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: 24px;
    height: 24px;
  }
`

export const FollowingItemIconWrapper = styled.div`
  margin-left: auto;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FollowingItemText = styled(Typography)`
  color: ${(props) => props.theme.colors.darkGrey.shades[1]};
  margin-left: 16px;
`

FollowingItemText.defaultProps = {
  variant: 'menu',
}

export const ListItemText = styled(Typography)`
  color: ${(props) => props.theme.colors.darkGrey.shades[1]};
  margin-left: 16px;
`

ListItemText.defaultProps = {
  variant: 'menu',
}

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  margin-top: 16px;
  cursor: pointer;
`

export const ListItemIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Divider = styled.div`
  height: 1px;
  background-color: ${(props) => props.theme.colors.grey.main};
  opacity: 0.1;
  margin: 32px 20px;
`

export const ListItemTag = styled.div`
  background-color: ${(props) => props.theme.colors.accent02.shades[1]};
  width: 24px;
  height: 24px;
  border-radius: 100%;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TagText = styled(Typography)`
  color: white;
  font-size: 12px;
  font-weight: 600;
`

export const JoinUsWrapper = styled.div`
  margin-top: auto;
`
