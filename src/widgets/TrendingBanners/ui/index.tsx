import TrendingBanner from '@/entities/TrendingBanner/ui'

import {
  TrendingBannersContainer,
  TrendingList,
  TrendingSubtitle,
  TrendingTitle,
} from './styles'

const TrendingBanners = () => {
  return (
    <TrendingBannersContainer>
      <TrendingSubtitle variant="h5">Unity Gaming</TrendingSubtitle>
      <TrendingTitle variant="h2">Trending</TrendingTitle>
      <TrendingList>
        <TrendingBanner />
      </TrendingList>
    </TrendingBannersContainer>
  )
}

export default TrendingBanners
