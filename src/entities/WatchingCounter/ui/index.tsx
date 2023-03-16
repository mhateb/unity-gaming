import { CounterText, Indicator, WatchingCounterContainer } from './styles'

type WatchingCounterProps = {
  count: number
}

const WatchingCounter = ({ count }: WatchingCounterProps) => {
  return (
    <WatchingCounterContainer>
      <Indicator />
      <CounterText variant="caption2">{`${count}K watching`}</CounterText>
    </WatchingCounterContainer>
  )
}

export default WatchingCounter
