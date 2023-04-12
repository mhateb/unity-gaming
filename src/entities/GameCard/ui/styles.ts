import styled from 'styled-components'

import Typography from '@/shared/ui/Typography'

export const GameCardContainer = styled.div`
  width: 240px;
  height: 96px;
  background: rgba(228, 228, 228, 0.1);
  border-radius: 16px;
  display: flex;
  gap: 24px;
  cursor: pointer;
`

export const ImageWrapper = styled.div`
  position: relative;
  height: 96px;
  width: 72px;
  border-radius: 12px;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled(Typography)`
  color: white;
`

export const CategoryName = styled(Typography)`
  color: #808191;
  margin-top: 2px;
  margin-bottom: 6px;
`
