import styled from 'styled-components'

import Typography from '@/shared/ui/Typography'

export const TopTrendingStreamContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  width: 100%;
  padding: 8px;
  border-radius: 32px;
  background-color: ${(props) => props.theme.colors.background.bg2};
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 290px;
  height: 204px;
  border-radius: 24px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const OptionsContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 8px;
`

export const Title = styled(Typography)`
  color: white;
  max-width: 400px;
`

export const CountersContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
  margin-bottom: 12px;
`
