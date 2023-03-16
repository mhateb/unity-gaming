import Image from 'next/image'

import NotificationButton from '@/features/NotificationButton/ui'
import DropdownDownArrowIcon from '@/shared/icons/dropdown-down-arrow'
import SearchLoupIcon from '@/shared/icons/search-loup'
import UpperBarAddVideoIcon from '@/shared/icons/upper-bar-add-video'
import UpperBarChatIcon from '@/shared/icons/upper-bar-chat'
import UpperBarDiscoveryIcon from '@/shared/icons/upper-bar-discovery'
import AvatarProfileImage from '@/shared/images/upper-bar-profile.png'
import IconButton from '@/shared/ui/IconButton'

import {
  ActionsContainer,
  AvatarImageWrapper,
  DropdownContainer,
  InputText,
  SearchContainer,
  UpperBarContainer,
} from './styles'

//TODO Dropdown и Search это будут отдельные компоненты

const UpperBar = () => {
  return (
    <UpperBarContainer>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <DropdownContainer>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <UpperBarDiscoveryIcon />
            <InputText variant="menu">Browse</InputText>
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <DropdownDownArrowIcon />
          </div>
        </DropdownContainer>
        <SearchContainer>
          <SearchLoupIcon />
          <InputText variant="menu">Search Everything</InputText>
        </SearchContainer>
      </div>
      <ActionsContainer>
        <IconButton icon={<UpperBarAddVideoIcon />} />
        <IconButton icon={<UpperBarChatIcon />} />
        <NotificationButton />
        <AvatarImageWrapper>
          <Image
            src={AvatarProfileImage.src}
            alt="Profile image"
            width={48}
            height={48}
          />
        </AvatarImageWrapper>
      </ActionsContainer>
    </UpperBarContainer>
  )
}

export default UpperBar
