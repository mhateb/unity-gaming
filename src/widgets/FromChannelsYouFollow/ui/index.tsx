import FollowingChannelItem from '@/features/FollowingChannelItem'
import FollowListAddVideoButton from '@/features/FollowListAddVideoButton'
import AvatarImage1 from '@/shared/images/list-avatar-1.png'
import AvatarImage2 from '@/shared/images/list-avatar-2.png'
import AvatarImage3 from '@/shared/images/list-avatar-3.png'
import AvatarImage4 from '@/shared/images/list-avatar-4.png'
import AvatarImage5 from '@/shared/images/list-avatar-5.png'
import AvatarImage6 from '@/shared/images/list-avatar-6.png'
import AvatarImage7 from '@/shared/images/list-avatar-7.png'

import {
  FollowsList,
  FromChannelsYouFollowContainer,
  Header,
  Title,
} from './styles'

const users = [
  {
    id: 0,
    name: 'Gabriel Erickson',
    timing: '14m ago',
    avatarImg: AvatarImage1,
    type: 'live',
  },
  {
    id: 1,
    name: 'Gabriel Erickson',
    timing: '14m ago',
    avatarImg: AvatarImage2,
    type: 'offline',
  },
  {
    id: 2,
    name: 'Gabriel Erickson',
    timing: '14m ago',
    avatarImg: AvatarImage3,
    type: 'video',
  },
  {
    id: 3,
    name: 'Gabriel Erickson',
    timing: '14m ago',
    avatarImg: AvatarImage4,
    type: 'live',
  },
  {
    id: 4,
    name: 'Gabriel Erickson',
    timing: '14m ago',
    avatarImg: AvatarImage5,
    type: 'video',
  },
  {
    id: 5,
    name: 'Gabriel Erickson',
    timing: '14m ago',
    avatarImg: AvatarImage6,
    type: 'offline',
  },
  {
    id: 6,
    name: 'Gabriel Erickson',
    timing: '14m ago',
    avatarImg: AvatarImage7,
    type: 'offline',
  },
]

const FromChannelsYouFollow = () => {
  return (
    <FromChannelsYouFollowContainer>
      <Header>
        <Title variant="h6">From Channels You Follow</Title>
      </Header>
      <FollowsList>
        <FollowListAddVideoButton />
        {users.map((item) => (
          <FollowingChannelItem key={item.id} {...item} />
        ))}
      </FollowsList>
    </FromChannelsYouFollowContainer>
  )
}

export default FromChannelsYouFollow
