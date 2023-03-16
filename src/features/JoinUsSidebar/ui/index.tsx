import LoginButton from '@/features/LoginButton/ui'

import { Description, JoinUsSidebarContainer, Title } from './styles'

const JoinUsSidebar = () => {
  return (
    <JoinUsSidebarContainer>
      <Title variant="h5">
        Join the <br /> Unity Gaming
      </Title>
      <Description>
        Discover the best live <br /> streams anywhere.
      </Description>
      <LoginButton />
    </JoinUsSidebarContainer>
  )
}

export default JoinUsSidebar
