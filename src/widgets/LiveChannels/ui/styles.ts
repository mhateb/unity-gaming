import styled from 'styled-components'

import Typography from '@/shared/ui/Typography'

export const LiveChannelsContainer = styled.div`
  max-width: 1200px;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled(Typography)`
  color: white;
`

export const ChannelsList = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
`
