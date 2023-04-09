import Image from 'next/image'

import WatchingCounter, {
  WatchingCounterVariants,
} from '@/entities/WatchingCounter/ui'
import UserVerifyIcon from '@/shared/icons/user-verify-icon'
import { AuthorPreview } from '@/shared/types/author'

import {
  AuthorAvatar,
  AuthorWidgetContainer,
  UserCategory,
  UserInfo,
  Username,
  UserNameContainer,
  WatchingCounterWrapper,
} from './styles'

export type AuthorWidgetProps = {
  author: AuthorPreview
  variant?: 'normal' | 'trending'
}

const AuthorWidget = ({ author, variant = 'normal' }: AuthorWidgetProps) => {
  return (
    <AuthorWidgetContainer>
      <AuthorAvatar variant={variant}>
        <Image src={author.avatarImg} alt="User avatar" fill />
      </AuthorAvatar>
      <UserInfo>
        <UserNameContainer>
          <Username variant="caption1">{author.name}</Username>
          {author.isVerify && <UserVerifyIcon />}
        </UserNameContainer>
        <UserCategory variant="caption2">{author.category.name}</UserCategory>
        {variant === 'trending' && author.countViewers && (
          <WatchingCounterWrapper>
            <WatchingCounter
              variant={WatchingCounterVariants.AUTHOR_WATCHING}
              count={author.countViewers}
            />
          </WatchingCounterWrapper>
        )}
      </UserInfo>
    </AuthorWidgetContainer>
  )
}

export default AuthorWidget
