import styled from 'styled-components'

import MainPreviewImage from '@/shared/images/main-live-preview.png'
import Typography from '@/shared/ui/Typography'

export const LiveMatchesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const PlayerContainer = styled.div`
  display: flex;
  gap: 32px;
  border-radius: 32px;
  background-color: rgba(240, 243, 246, 0.1);
`

export const BlockTitle = styled(Typography)`
  color: white;
`

export const Title = styled(Typography)`
  color: white;
  margin-top: 8px;
  margin-bottom: 2px;
`

export const MainLiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 785px;
  background-color: ${(props) => props.theme.colors.background.bg2};
  border-radius: 32px;
`

export const PreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${MainPreviewImage.src});
  height: 432px;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 32px;
`

export const WatchingCounterContainer = styled.div`
  padding: 7px 20px;
  background: rgb(27, 29, 33, 0.5);
  width: fit-content;
  border-radius: 8px;
`

export const CounterText = styled(Typography)`
  color: white;
`

export const PlayerButton = styled.button`
  width: 96px;
  height: 96px;
  align-self: center;
  margin-top: auto;
  margin-bottom: auto;
  background-color: rgb(27, 29, 33, 0.85);
  border: none;
  outline: none;
  border-radius: 16px;
  cursor: pointer;
`

export const DescriptionContainer = styled.div`
  padding: 40px 0px 32px 32px;
  display: flex;
  flex-direction: column;
`

export const OptionsContainer = styled.div`
  display: flex;
  gap: 32px;
`

export const AdditionalLivesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px 32px 32px 0px;
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 208px;
  height: 140px;
`
