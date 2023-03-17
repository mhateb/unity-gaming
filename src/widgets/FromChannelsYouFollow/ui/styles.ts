import styled from 'styled-components'

import Typography from '@/shared/ui/Typography'

export const FromChannelsYouFollowContainer = styled.div`
  height: 300px;
  background-color: ${(props) => props.theme.colors.background.bg2};
  margin-top: 40px;
  padding: 32px;
  border-radius: 24px;
`

export const Header = styled.div``

export const Title = styled(Typography)`
  color: white;
  font-size: 18px;
  line-height: 24px;
`

export const FollowsList = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`
