import { CounterText, Indicator, WatchingCounterContainer } from './styles'

export enum WatchingCounterVariants {
  WATCHING = 'watching',
  VIEWERS = 'viewers',
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
  }

  return (
    <WatchingCounterContainer>
      <Indicator variant={variant} />
      <CounterText variant="caption2">{getText()}</CounterText>
    </WatchingCounterContainer>
  )
}

export default WatchingCounter
