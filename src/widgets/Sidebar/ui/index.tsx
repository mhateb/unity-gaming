import Image from 'next/image'

import AvatarImage1 from '@/resources/images/avatar1.png'
import AvatarImage2 from '@/resources/images/avatar2.png'
import AvatarImage3 from '@/resources/images/avatar3.png'
import AvatarImage4 from '@/resources/images/avatar4.png'
import AvatarImage5 from '@/resources/images/avatar5.png'
import AvatarImage6 from '@/resources/images/avatar6.png'
import AvatarImage7 from '@/resources/images/avatar7.png'
import MainLogoImage from '@/resources/images/main-logo.png'
import AddVideoMenuIcon from '@/shared/icons/add-video-menu'
import ChatMenuIcon from '@/shared/icons/chat-menu'
import FollowingMenuIcon from '@/shared/icons/following-menu'
import LoadMoreMenuIcon from '@/shared/icons/load-more-menu'
import MenuNewFeedIcon from '@/shared/icons/menu-new-feed'
import PlaylistMenuIcon from '@/shared/icons/playlist-menu'
import SettingsMenuIcon from '@/shared/icons/settings-menu'
import TrendingMenuIcon from '@/shared/icons/trending-menu'
import UserOfflineIcon from '@/shared/icons/user-offline'
import UserOnlineIcon from '@/shared/icons/user-online'
import VideoMenuIcon from '@/shared/icons/video-menu'
import JoinUsSidebar from '@/widgets/JoinUsSidebar/ui'

import {
  Block,
  BlockTitle,
  Divider,
  FeedsLinkAddVideoIconWrapper,
  FeedsLinkItem,
  FeedsLinkItemIconWrapper,
  FeedsLinkItemText,
  FeedsLinksContainer,
  FollowingItemAvatar,
  FollowingItemIconWrapper,
  FollowingItemText,
  JoinUsWrapper,
  List,
  ListItem,
  ListItemIconWrapper,
  ListItemTag,
  ListItemText,
  LogoContainer,
  SidebarContainer,
  TagText,
} from './styles'

const followingItems = [
  {
    id: 0,
    name: 'Dylan Hodges',
    avatar: AvatarImage1,
    isOnline: false,
  },
  {
    id: 1,
    name: 'Vincent Parks',
    avatar: AvatarImage2,
    isOnline: true,
  },
  {
    id: 2,
    name: 'Richard Bowers',
    avatar: AvatarImage3,
    isOnline: false,
  },
  {
    id: 3,
    name: 'Isaac Lambert',
    avatar: AvatarImage4,
    isOnline: false,
  },
  {
    id: 4,
    name: 'Lillie Nash',
    avatar: AvatarImage5,
    isOnline: true,
  },
  {
    id: 5,
    name: 'Edith Cain',
    avatar: AvatarImage6,
    isOnline: false,
  },
  {
    id: 6,
    name: 'Jerry Sherman',
    avatar: AvatarImage7,
    isOnline: true,
  },
]

const Sidebar = () => {
  return (
    <SidebarContainer>
      <LogoContainer>
        <Image src={MainLogoImage} alt="Logo application" />
      </LogoContainer>
      <FeedsLinksContainer>
        <BlockTitle variant="caption2">New Feeds</BlockTitle>
        <Block>
          <List>
            <FeedsLinkItem>
              <FeedsLinkItemIconWrapper>
                <MenuNewFeedIcon />
              </FeedsLinkItemIconWrapper>
              <FeedsLinkItemText variant="menu">New Feed</FeedsLinkItemText>
            </FeedsLinkItem>
            <FeedsLinkItem>
              <FeedsLinkItemIconWrapper>
                <TrendingMenuIcon />
              </FeedsLinkItemIconWrapper>
              <FeedsLinkItemText variant="menu">Trending</FeedsLinkItemText>
            </FeedsLinkItem>
            <FeedsLinkItem>
              <FeedsLinkItemIconWrapper>
                <FollowingMenuIcon />
              </FeedsLinkItemIconWrapper>
              <FeedsLinkItemText variant="menu">Following</FeedsLinkItemText>
            </FeedsLinkItem>
            <FeedsLinkItem>
              <FeedsLinkItemIconWrapper>
                <VideoMenuIcon />
              </FeedsLinkItemIconWrapper>
              <FeedsLinkItemText variant="menu">Your Videos</FeedsLinkItemText>
              <FeedsLinkAddVideoIconWrapper>
                <AddVideoMenuIcon />
              </FeedsLinkAddVideoIconWrapper>
            </FeedsLinkItem>
            <FeedsLinkItem>
              <FeedsLinkItemIconWrapper>
                <PlaylistMenuIcon />
              </FeedsLinkItemIconWrapper>
              <FeedsLinkItemText variant="menu">Playlist</FeedsLinkItemText>
            </FeedsLinkItem>
          </List>
        </Block>
        <Divider />
        <Block>
          <BlockTitle variant="caption2">Following</BlockTitle>
          <List>
            {followingItems.map((item) => (
              <FeedsLinkItem key={item.id}>
                <FollowingItemAvatar>
                  <Image src={item.avatar} alt="Avatar user" />
                </FollowingItemAvatar>
                <FollowingItemText>{item.name}</FollowingItemText>
                <FollowingItemIconWrapper>
                  {item.isOnline ? <UserOnlineIcon /> : <UserOfflineIcon />}
                </FollowingItemIconWrapper>
              </FeedsLinkItem>
            ))}
            <ListItem>
              <ListItemIconWrapper>
                <LoadMoreMenuIcon />
              </ListItemIconWrapper>
              <ListItemText>Load more</ListItemText>
            </ListItem>
          </List>
        </Block>
        <Divider />
        <Block>
          <BlockTitle variant="caption2">Unity Gaming</BlockTitle>
          <List>
            <ListItem>
              <ListItemIconWrapper>
                <ChatMenuIcon />
              </ListItemIconWrapper>
              <ListItemText>Chat</ListItemText>
              <ListItemTag>
                <TagText>20</TagText>
              </ListItemTag>
            </ListItem>
            <ListItem>
              <ListItemIconWrapper>
                <SettingsMenuIcon />
              </ListItemIconWrapper>
              <ListItemText>Settings</ListItemText>
            </ListItem>
          </List>
        </Block>
      </FeedsLinksContainer>
      <JoinUsWrapper>
        <JoinUsSidebar />
      </JoinUsWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
