import styled from 'styled-components'

import BannerMainImage from '@/shared/images/banner-main-image.png'
import Typography from '@/shared/ui/Typography'

export const BannerStreamsContainer = styled.div`
  height: 488px;
  background-image: url(${BannerMainImage.src});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: flex-end;
  padding: 64px;
  border-bottom: 4px solid ${(props) => props.theme.colors.primary.main};
`

export const ContentDescription = styled.div``

export const Title = styled(Typography)`
  color: white;
  margin-top: 5px;
`

export const OptionsContainer = styled.div`
  margin-bottom: 24px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  gap: 22px;
`

export const Content = styled.div``
