import Image from 'next/image'

import { TrendingGameType } from '@/shared/types/game'

import {
  Content,
  Description,
  ImageWrapper,
  Title,
  TrendingGameContainer,
} from './styles'

type TrendingGameProps = {
  game: TrendingGameType
}

const TrendingGame = ({ game }: TrendingGameProps) => {
  return (
    <TrendingGameContainer>
      <ImageWrapper>
        <Image src={game.imgPreview} alt="Game Image Preview" fill />
      </ImageWrapper>
      <Content>
        <Title variant="caption1">{game.title}</Title>
        <Description variant="caption2">{game.description}</Description>
      </Content>
    </TrendingGameContainer>
  )
}

export default TrendingGame
