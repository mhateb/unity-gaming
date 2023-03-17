import Image, { StaticImageData } from 'next/image'

import ListUserLiveIcon from '@/shared/icons/list-user-live'
import ListUserOnlineIcon from '@/shared/icons/online-user-list'

import {
  FollowingChannelItemContainer,
  FollowListItemStyled,
  UserIndicator,
  UserName,
  UserTime,
} from './styles'

type FollowingChannelItemProps = {
  name: string
  avatarImg: StaticImageData
  type: string
  timing: string
}

const FollowingChannelItem = ({
  name,
  avatarImg,
  type,
  timing,
}: FollowingChannelItemProps) => {
  const getIcon = () => {
    if (type === 'online' || 'offline') return <ListUserOnlineIcon />
    if (type === 'video' || 'live') return <ListUserLiveIcon />
  }
  return (
    <FollowingChannelItemContainer>
      <FollowListItemStyled>
        <Image src={avatarImg} alt="User avatar" fill />
        <UserIndicator>{getIcon()}</UserIndicator>
      </FollowListItemStyled>
      <UserName variant="caption1">{name}</UserName>
      <UserTime variant="caption2">{timing}</UserTime>
    </FollowingChannelItemContainer>
  )
}

export default FollowingChannelItem
