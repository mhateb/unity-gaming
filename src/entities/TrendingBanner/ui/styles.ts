import styled from 'styled-components'

import Typography from '@/shared/ui/Typography'

export const TrendingBannerContainer = styled.div`
  position: relative;
  width: 785px;
  height: 560px;
  border-radius: 32px;
  display: flex;
  align-items: flex-end;
`

export const TrendingBannerTitle = styled(Typography)`
  color: white;
  margin-top: 5px;
  margin-bottom: 5px;
`

export const OptionsContainer = styled.div`
  display: flex;
  gap: 12px;
`

export const Footer = styled.div`
  margin-top: 24px;
`

export const ImageWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 32px;
  z-index: 1;
`

export const Content = styled.div`
  z-index: 10;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 64px;
`
