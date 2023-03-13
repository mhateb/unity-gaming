import UserOfflineIcon from '@/shared/icons/user-offline'

import { TagContainer, TagText } from './styles'

const Tag = () => {
  return (
    <TagContainer>
      <UserOfflineIcon color="white" />
      <TagText variant="caption1">Live</TagText>
    </TagContainer>
  )
}

export default Tag
