import FollowListAddVideoIcon from '@/shared/icons/follow-list-add-video'

import { ButtonText, Container, FollowListAddVideoButtonStyled } from './styles'

const FollowListAddVideoButton = () => {
  return (
    <Container>
      <FollowListAddVideoButtonStyled>
        <FollowListAddVideoIcon />
      </FollowListAddVideoButtonStyled>
      <ButtonText variant="caption1">Add Yours</ButtonText>
    </Container>
  )
}

export default FollowListAddVideoButton
