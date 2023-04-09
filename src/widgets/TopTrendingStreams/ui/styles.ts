import styled from 'styled-components'

import Typography from '@/shared/ui/Typography'

export const TopTrendingStreamsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 64px;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 784px;
`

export const HeaderButtons = styled.div`
  display: flex;
  gap: 8px;
`

export const Title = styled(Typography)`
  color: white;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 40px;
  align-items: center;
`

export const Wrapper = styled.div`
  display: flex;
  gap: 32px;
  margin-top: 32px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 784px;
  width: 100%;
`

export const TrendingBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`
