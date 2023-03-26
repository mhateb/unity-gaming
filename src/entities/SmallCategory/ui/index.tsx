import Image, { StaticImageData } from 'next/image'

import WatchingCounter, {
  WatchingCounterVariants,
} from '@/entities/WatchingCounter'

import {
  Content,
  FollowButtonStyled,
  ImageWrapper,
  SmallCategoryContainer,
  SmallCategoryTag,
  TagText,
  Title,
} from './styles'

type SmallCategoryProps = {
  img: StaticImageData
  title: string
  viewersCount: number
}

const SmallCategory = ({ img, title, viewersCount }: SmallCategoryProps) => {
  return (
    <SmallCategoryContainer>
      <ImageWrapper>
        <Image src={img} fill alt="Preview" />
      </ImageWrapper>
      <Content>
        <SmallCategoryTag>
          <TagText variant="caption1">Shooter</TagText>
        </SmallCategoryTag>
        <Title variant="h6">{title}</Title>
        <WatchingCounter
          variant={WatchingCounterVariants.VIEWERS}
          count={viewersCount}
        />
        <FollowButtonStyled width="131px" variant="normal">
          Follow
        </FollowButtonStyled>
      </Content>
    </SmallCategoryContainer>
  )
}

export default SmallCategory
