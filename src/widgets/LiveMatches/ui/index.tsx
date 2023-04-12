import Image from 'next/image'

import StreamOption from '@/entities/StreamOption/ui'
import PlayerIcon from '@/shared/icons/player-icon'
import PlayerImage1 from '@/shared/images/player-image-1.png'
import PlayerImage2 from '@/shared/images/player-image-2.png'
import PlayerImage3 from '@/shared/images/player-image-3.png'
import PlayerImage4 from '@/shared/images/player-image-4.png'
import Tag from '@/shared/ui/Tag'

import {
  AdditionalLivesContainer,
  BlockTitle,
  CounterText,
  DescriptionContainer,
  ImageWrapper,
  LiveMatchesContainer,
  MainLiveContainer,
  OptionsContainer,
  PlayerButton,
  PlayerContainer,
  PreviewContainer,
  Title,
  WatchingCounterContainer,
} from './styles'

const LiveMatches = () => {
  return (
    <LiveMatchesContainer>
      <BlockTitle variant="h5">Live Matches</BlockTitle>
      <PlayerContainer>
        <MainLiveContainer>
          <PreviewContainer>
            <WatchingCounterContainer>
              <CounterText variant="caption1">24K Watching</CounterText>
            </WatchingCounterContainer>
            <PlayerButton>
              <PlayerIcon />
            </PlayerButton>
          </PreviewContainer>
          <DescriptionContainer>
            <Tag />
            <Title variant="h4">
              Renegades vs Chiefs - ESL Pro <br />
              League Season 16 - Playoffs
            </Title>
            <OptionsContainer>
              <StreamOption variant="leagueoflegends" />
              <StreamOption variant="english" />
            </OptionsContainer>
          </DescriptionContainer>
        </MainLiveContainer>
        <AdditionalLivesContainer>
          <ImageWrapper>
            <Image fill src={PlayerImage1} alt="Player Image" />
          </ImageWrapper>
          <ImageWrapper>
            <Image fill src={PlayerImage2} alt="Player Image" />
          </ImageWrapper>
          <ImageWrapper>
            <Image fill src={PlayerImage3} alt="Player Image" />
          </ImageWrapper>
          <ImageWrapper>
            <Image fill src={PlayerImage4} alt="Player Image" />
          </ImageWrapper>
        </AdditionalLivesContainer>
      </PlayerContainer>
    </LiveMatchesContainer>
  )
}

export default LiveMatches
