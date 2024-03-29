import LiveChannelCard from '@/entities/LiveChannelCard'
import AvatarUser from '@/shared/images/avatar7.png'
import LiveChannelPreview1 from '@/shared/images/live-channel-1.png'
import LiveChannelPreview2 from '@/shared/images/live-channel-2.png'
import LiveChannelPreview3 from '@/shared/images/live-channel-3.png'
import LiveChannelPreview4 from '@/shared/images/live-channel-4.png'
import Select from '@/shared/ui/Select'

import {
  ChannelsList,
  Header,
  RecommendedVideosContainer,
  Title,
} from './styles'

const channels = [
  {
    id: 0,
    title: '2020 World Champs Gaming Warzone',
    watchingCounter: 4.2,
    previewImage: LiveChannelPreview1,
    author: {
      id: '0',
      name: 'Tam Tran',
      category: {
        id: '0',
        name: 'Call of Duty®',
      },
      isVerify: true,
      avatarImg: AvatarUser,
    },
  },
  {
    id: 1,
    title: 'Team Flash vs. Saigon Phantom',
    watchingCounter: 4.2,
    previewImage: LiveChannelPreview2,
    author: {
      id: '1',
      name: 'Dash UI8',
      category: {
        id: '1',
        name: 'Garena of Valor',
      },
      isVerify: true,
      avatarImg: AvatarUser,
    },
  },
  {
    id: 2,
    title: '2020 World Champs Gaming Warzone',
    watchingCounter: 4.2,
    previewImage: LiveChannelPreview3,
    author: {
      id: '2',
      name: 'UI8 Gaming',
      category: {
        id: '2',
        name: 'Call of Duty®',
      },
      isVerify: true,
      avatarImg: AvatarUser,
    },
  },
  {
    id: 3,
    title: '2020 World Champs Gaming Warzone',
    watchingCounter: 4.2,
    previewImage: LiveChannelPreview4,
    author: {
      id: '3',
      name: 'Gabriel Erickson',
      category: {
        id: '3',
        name: 'Garena of Valor',
      },
      isVerify: true,
      avatarImg: AvatarUser,
    },
  },
]

type RecommendedVideosProps = {
  title?: string
}

// У recommended videos и live channels одинаковая структура надо убрать дублирование
const RecommendedVideos = ({
  title = 'Recommended Videos',
}: RecommendedVideosProps) => {
  return (
    <RecommendedVideosContainer>
      <Header>
        <Title variant="h5">{title}</Title>
        <Select />
      </Header>
      <ChannelsList>
        {channels.map((item) => (
          <LiveChannelCard key={item.id} {...item} />
        ))}
      </ChannelsList>
    </RecommendedVideosContainer>
  )
}

export default RecommendedVideos
