import GameCard from '@/entities/GameCard'
import TrendingGame1 from '@/shared/images/trending-game-1.png'
import TrendingGame2 from '@/shared/images/trending-game-2.png'
import TrendingGame3 from '@/shared/images/trending-game-3.png'
import TrendingGame4 from '@/shared/images/trending-game-4.png'
import { GameCardType } from '@/shared/types/game'

import { GamesWidgetContainer, List } from './styles'

const games: GameCardType[] = [
  {
    id: 0,
    title: 'Call of Duty®',
    category: 'Shooting',
    img: TrendingGame1,
    countViewers: 2.8,
  },
  {
    id: 1,
    title: 'Counter-Strike®',
    category: 'Shooting',
    img: TrendingGame2,
    countViewers: 2.8,
  },
  {
    id: 2,
    title: 'Fortnite®',
    category: 'ESport',
    img: TrendingGame3,
    countViewers: 2.8,
  },
  {
    id: 3,
    title: 'League of Legends®',
    category: 'Online Game',
    img: TrendingGame4,
    countViewers: 2.8,
  },
]

const GamesWidget = () => {
  return (
    <GamesWidgetContainer>
      <List>
        {games.map((item) => (
          <GameCard key={item.id} item={item} />
        ))}
      </List>
    </GamesWidgetContainer>
  )
}

export default GamesWidget
