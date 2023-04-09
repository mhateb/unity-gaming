import TrendingGame from '@/entities/TrendingGame'
import TrendingGame1 from '@/shared/images/trending-game-1.png'
import TrendingGame2 from '@/shared/images/trending-game-2.png'
import TrendingGame3 from '@/shared/images/trending-game-3.png'
import TrendingGame4 from '@/shared/images/trending-game-4.png'
import { TrendingGameType } from '@/shared/types/game'
import Button from '@/shared/ui/Button'

import { Footer, List, Title, TrendingGamesContainer } from './styles'

const trendingGames: TrendingGameType[] = [
  {
    id: 0,
    title: 'Call of Duty®',
    description:
      'The massive free-to-play experience from the world of Modern Warfare.',
    imgPreview: TrendingGame1,
  },
  {
    id: 1,
    title: 'Counter-Strike®',
    description:
      'Counter-Strike is a series of multiplayer first-personshooter video games.',
    imgPreview: TrendingGame2,
  },
  {
    id: 2,
    title: 'Fortnite®',
    description:
      'Live tournaments, matchhigh lights, and your favorite pro players all in one place.',
    imgPreview: TrendingGame3,
  },
  {
    id: 3,
    title: 'League of Legends®',
    description:
      'League of Legends is a team-based game with over 140 champions.',
    imgPreview: TrendingGame4,
  },
]

const TrendingGames = () => {
  return (
    <TrendingGamesContainer>
      <Title variant="h6">Trending Games</Title>
      <List>
        {trendingGames.map((item) => (
          <TrendingGame game={item} key={item.id} />
        ))}
      </List>
      <Footer>
        <Button width="185px" variant="normal">
          Discover More
        </Button>
      </Footer>
    </TrendingGamesContainer>
  )
}

export default TrendingGames
