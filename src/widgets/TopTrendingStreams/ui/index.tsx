import TopTrendingStream from '@/entities/TopTrendingStream/ui'
import AvatarUser from '@/shared/images/avatar7.png'
import TopTrendingStreamImage1 from '@/shared/images/top-trending-stream-1.png'
import TopTrendingStreamImage2 from '@/shared/images/top-trending-stream-2.png'
import TopTrendingStreamImage3 from '@/shared/images/top-trending-stream-3.png'
import TopTrendingStreamImage4 from '@/shared/images/top-trending-stream-4.png'
import TopTrendingStreamImage5 from '@/shared/images/top-trending-stream-5.png'
import TopTrendingStreamImage6 from '@/shared/images/top-trending-stream-6.png'
import { TopTrendingStreamType } from '@/shared/types/top-trending-stream'
import Button from '@/shared/ui/Button'
import Select from '@/shared/ui/Select'
import TrendingGames from '@/widgets/TrendingGames/ui'
import TrendingStreamers from '@/widgets/TrendingStreamers'

import {
  Content,
  Header,
  HeaderButtons,
  List,
  Title,
  TopTrendingStreamsContainer,
  TrendingBlock,
  Wrapper,
} from './styles'

const topTrendingsStreams: TopTrendingStreamType[] = [
  {
    id: 0,
    img: TopTrendingStreamImage1,
    title: 'Spectating the Pros - Fly Santorin, PowerofEvil - New Caps vs PoE',
    counters: {
      watching: 4.2,
      last_active: 1,
    },
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
    img: TopTrendingStreamImage2,
    title: 'Spectating the Pros - Fly Santorin, PowerofEvil - New Caps vs PoE',
    counters: {
      watching: 4.2,
      last_active: 1,
    },
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
    id: 2,
    img: TopTrendingStreamImage3,
    title: 'New Sub Emotes And Badges! Lets Goooo',
    counters: {
      watching: 4.2,
      last_active: 1,
    },
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
    id: 3,
    img: TopTrendingStreamImage4,
    title: 'Spectating the Pros - Fly Santorin, PowerofEvil - New Caps vs PoE',
    counters: {
      watching: 4.2,
      last_active: 1,
    },
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
    id: 4,
    img: TopTrendingStreamImage5,
    title: 'Spectating the Pros - Fly Santorin, PowerofEvil - New Caps vs PoE',
    counters: {
      watching: 4.2,
      last_active: 1,
    },
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
    id: 5,
    img: TopTrendingStreamImage6,
    title: 'Spectating the Pros - Fly Santorin, PowerofEvil - New Caps vs PoE',
    counters: {
      watching: 4.2,
      last_active: 1,
    },
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
]

const TopTrendingStreams = () => {
  return (
    <TopTrendingStreamsContainer>
      <Header>
        <HeaderButtons>
          <Button width="76px" variant="static">
            All
          </Button>
          <Button width="140px" variant="normal">
            ESport
          </Button>
          <Button width="140px" variant="normal">
            Game Online
          </Button>
        </HeaderButtons>
        <Select />
      </Header>
      <Wrapper>
        <Content>
          <Title variant="h6">Top Trending Now</Title>
          <List>
            {topTrendingsStreams.map((item) => (
              <TopTrendingStream key={item.id} stream={item} />
            ))}
            <Button width="158px" variant="normal">
              Load More
            </Button>
          </List>
        </Content>
        <TrendingBlock>
          <TrendingStreamers />
          <TrendingGames />
        </TrendingBlock>
      </Wrapper>
    </TopTrendingStreamsContainer>
  )
}

export default TopTrendingStreams
