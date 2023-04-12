import Image from 'next/image'

import WatchingCounter, {
  WatchingCounterVariants,
} from '@/entities/WatchingCounter/ui'
import { GameCardType } from '@/shared/types/game'

import {
  CategoryName,
  Description,
  GameCardContainer,
  ImageWrapper,
  Title,
} from './styles'

type GameCardProps = {
  item: GameCardType
}

const GameCard = ({ item }: GameCardProps) => {
  return (
    <GameCardContainer>
      <ImageWrapper>
        <Image fill src={item.img} alt="Game Card Image" />
      </ImageWrapper>
      <Description>
        <Title variant="caption1">{item.title}</Title>
        <CategoryName variant="caption2">{item.category}</CategoryName>
        <WatchingCounter
          variant={WatchingCounterVariants.VIEWERS}
          count={item.countViewers}
        />
      </Description>
    </GameCardContainer>
  )
}

export default GameCard
