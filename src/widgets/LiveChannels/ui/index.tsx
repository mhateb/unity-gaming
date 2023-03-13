import Select from '@/shared/ui/Select'

import { Header, LiveChannelsContainer, Title } from './styles'

const LiveChannels = () => {
  return (
    <LiveChannelsContainer>
      <Header>
        <Title>Live channels</Title>
        <Select />
      </Header>
    </LiveChannelsContainer>
  )
}

export default LiveChannels
