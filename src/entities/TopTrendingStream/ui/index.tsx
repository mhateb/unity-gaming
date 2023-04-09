import Image from 'next/image'

import AuthorWidget from '@/entities/AuthorWidget'
import StreamOption from '@/entities/StreamOption/ui'
import WatchingCounter, {
  WatchingCounterVariants,
} from '@/entities/WatchingCounter/ui'
import { TopTrendingStreamType } from '@/shared/types/top-trending-stream'

import {
  Content,
  CountersContainer,
  ImageWrapper,
  OptionsContainer,
  Title,
  TopTrendingStreamContainer,
} from './styles'

type TopTrendingStreamProps = {
  stream: TopTrendingStreamType
}

const TopTrendingStream = ({ stream }: TopTrendingStreamProps) => {
  return (
    <TopTrendingStreamContainer>
      <ImageWrapper>
        <Image src={stream.img} alt="Stream Preview Image" fill />
      </ImageWrapper>
      <Content>
        <OptionsContainer>
          <StreamOption variant="leagueoflegends" />
          <StreamOption variant="english" />
        </OptionsContainer>
        <Title variant="h6">{stream.title}</Title>
        <CountersContainer>
          <WatchingCounter
            variant={WatchingCounterVariants.WATCHING}
            count={stream.counters.watching}
          />
          <WatchingCounter
            variant={WatchingCounterVariants.LAST_ACTIVE}
            count={stream.counters.last_active}
          />
        </CountersContainer>
        <AuthorWidget author={stream.author} />
      </Content>
    </TopTrendingStreamContainer>
  )
}

export default TopTrendingStream
