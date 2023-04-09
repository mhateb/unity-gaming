import AuthorWidget from '@/entities/AuthorWidget/ui'
import TrendingStreamerAvatar1 from '@/shared/images/trending-streamer-avatar-1.png'
import TrendingStreamerAvatar2 from '@/shared/images/trending-streamer-avatar-2.png'
import TrendingStreamerAvatar3 from '@/shared/images/trending-streamer-avatar-3.png'
import TrendingStreamerAvatar4 from '@/shared/images/trending-streamer-avatar-4.png'
import TrendingStreamerAvatar5 from '@/shared/images/trending-streamer-avatar-5.png'
import { AuthorPreview } from '@/shared/types/author'
import Button from '@/shared/ui/Button'

import { Footer, List, Title, TrendingStreamersContainer } from './styles'

const trendingStreamers: AuthorPreview[] = [
  {
    id: '0',
    name: 'Unity Gaming',
    category: {
      id: '0',
      name: 'Call of Duty',
    },
    avatarImg: TrendingStreamerAvatar1,
    isVerify: true,
    countViewers: 2.8,
  },
  {
    id: '1',
    name: 'Daniel Brothers',
    category: {
      id: '0',
      name: 'Call of Duty',
    },
    avatarImg: TrendingStreamerAvatar2,
    isVerify: true,
    countViewers: 2.8,
  },
  {
    id: '2',
    name: 'Amazing Channel',
    category: {
      id: '0',
      name: 'Call of Duty',
    },
    avatarImg: TrendingStreamerAvatar3,
    isVerify: true,
    countViewers: 2.8,
  },
  {
    id: '3',
    name: 'Dash UI8',
    category: {
      id: '0',
      name: 'Call of Duty',
    },
    avatarImg: TrendingStreamerAvatar4,
    isVerify: true,
    countViewers: 2.8,
  },
  {
    id: '4',
    name: 'Tran Mau Tri Tam',
    category: {
      id: '0',
      name: 'Call of Duty',
    },
    avatarImg: TrendingStreamerAvatar5,
    isVerify: true,
    countViewers: 2.8,
  },
]

const TrendingStreamers = () => {
  return (
    <TrendingStreamersContainer>
      <Title variant="h6">Trending Streamers</Title>
      <List>
        {trendingStreamers.map((item) => (
          <AuthorWidget variant="trending" key={item.id} author={item} />
        ))}
      </List>
      <Footer>
        <Button width="185px" variant="normal">
          Discover More
        </Button>
      </Footer>
    </TrendingStreamersContainer>
  )
}

export default TrendingStreamers
