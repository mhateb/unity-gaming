import styled from 'styled-components'

import Typography from '@/shared/ui/Typography'

export const TrendingGameContainer = styled.div`
  display: flex;
  gap: 17px;
  height: 100px;
  cursor: pointer;
`

export const ImageWrapper = styled.div`
  position: relative;
  height: 100px;
  width: 56px;
  border-radius: 12px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const Title = styled(Typography)`
  color: white;
  margin-bottom: 8px;
`

export const Description = styled(Typography)`
  color: #808191;
  max-width: 175px;
`
