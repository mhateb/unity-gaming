import Button from '@/shared/ui/Button'
import StreamOption from '@/shared/ui/StreamOption'
import Tag from '@/shared/ui/Tag'

import {
  BannerStreamsContainer,
  Content,
  ContentDescription,
  OptionsContainer,
  Title,
} from './styles'

const BannerStreams = () => {
  return (
    <BannerStreamsContainer>
      <Content>
        <Tag />
        <ContentDescription>
          <Title variant="h4">
            Renegades vs Chiefs - ESL Pro <br /> League Season 16 - Playoffs
          </Title>
        </ContentDescription>
        <OptionsContainer>
          <StreamOption variant="leagueoflegends" />
          <StreamOption variant="english" />
        </OptionsContainer>
        <Button variant="static">Watch</Button>
      </Content>
    </BannerStreamsContainer>
  )
}

export default BannerStreams
