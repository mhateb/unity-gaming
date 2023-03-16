import styled from 'styled-components'

import JoinUsSidebarBg from '@/shared/images/join-us-sidebar-bg.jpg'
import Typography from '@/shared/ui/Typography'

export const JoinUsSidebarContainer = styled.div`
  height: 350px;
  width: 216px;
  background-image: url(${JoinUsSidebarBg.src});
  background-position: 3% 4%;
  background-size: 108%;
  background-repeat: no-repeat;
  border-radius: 20px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

export const Title = styled(Typography)`
  color: white;
  margin-bottom: 12px;
`

export const Description = styled(Typography)`
  color: white;
  margin-bottom: 24px;
`
