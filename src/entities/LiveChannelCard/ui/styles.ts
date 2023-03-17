import styled from 'styled-components'

import Typography from '@/shared/ui/Typography'

export const LiveChannelCardContainer = styled.div`
  width: 241px;
  background-color: ${(props) => props.theme.colors.background.bg2};
  border-radius: 24px;
`

export const PreviewImageWrapper = styled.div`
  position: relative;
  height: 170px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
  cursor: pointer;
`

export const DescriptionBlock = styled.div``

export const VideoDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  color: white;
`

export const Title = styled(Typography)`
  margin-bottom: 16px;
  cursor: pointer;
`

export const ChannelCounter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
`

export const Divider = styled.div`
  background-color: ${(props) => props.theme.colors.darkGrey.shades[2]};
  height: 1px;
`
