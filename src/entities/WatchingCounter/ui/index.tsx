import { CounterText, Indicator, WatchingCounterContainer } from './styles'

export enum WatchingCounterVariants {
  WATCHING = 'watching',
  VIEWERS = 'viewers',
  LAST_ACTIVE = 'last-active',
  AUTHOR_WATCHING = 'author-watching',
}

type WatchingCounterProps = {
  count: number
  variant: WatchingCounterVariants
}

const WatchingCounter = ({ count, variant }: WatchingCounterProps) => {
  const getText = () => {
    if (variant === WatchingCounterVariants.WATCHING)
      return `${count}K watching`
    if (variant === WatchingCounterVariants.VIEWERS) return `${count}K viewers`
    if (variant === WatchingCounterVariants.LAST_ACTIVE)
      return `${count} week ago`
    if (variant === WatchingCounterVariants.AUTHOR_WATCHING)
      return `${count}K viewers`
  }

  return (
    <WatchingCounterContainer>
      <Indicator variant={variant} />
      <CounterText variant="caption2">{getText()}</CounterText>
    </WatchingCounterContainer>
  )
}

export default WatchingCounter
