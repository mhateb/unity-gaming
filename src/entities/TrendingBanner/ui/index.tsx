import Image from 'next/image'

import StreamOption from '@/entities/StreamOption/ui'
import TrendingBannerImage from '@/shared/images/trending-banner-image.png'
import Button from '@/shared/ui/Button'
import Tag from '@/shared/ui/Tag'

import {
  Content,
  Footer,
  ImageWrapper,
  OptionsContainer,
  TrendingBannerContainer,
  TrendingBannerTitle,
} from './styles'

const TrendingBanner = () => {
  return (
    <TrendingBannerContainer>
      <ImageWrapper>
        <Image src={TrendingBannerImage} fill alt="Preview" />
      </ImageWrapper>
      <Content>
        <Tag />
        <TrendingBannerTitle variant="h4">
          Renegades vs Chiefs - ESL Pro <br /> League Season 16 - Playoffs
        </TrendingBannerTitle>
        <OptionsContainer>
          <StreamOption variant="leagueoflegends" />
          <StreamOption variant="english" />
        </OptionsContainer>
        <Footer>
          <Button variant="static" width="131px">
            Watch
          </Button>
        </Footer>
      </Content>
    </TrendingBannerContainer>
  )
}

export default TrendingBanner
