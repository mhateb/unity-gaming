import Image from 'next/image'

import UserVerifyIcon from '@/shared/icons/user-verify-icon'
import { AuthorPreview } from '@/shared/types/author'

import {
  AuthorAvatar,
  AuthorWidgetContainer,
  UserCategory,
  UserInfo,
  Username,
  UserNameContainer,
} from './styles'

type AuthorWidgetProps = {
  author: AuthorPreview
}

const AuthorWidget = ({ author }: AuthorWidgetProps) => {
  return (
    <AuthorWidgetContainer>
      <AuthorAvatar>
        <Image src={author.avatarImg} alt="User avatar" fill />
      </AuthorAvatar>
      <UserInfo>
        <UserNameContainer>
          <Username variant="caption1">{author.name}</Username>
          {author.isVerify && <UserVerifyIcon />}
        </UserNameContainer>
        <UserCategory variant="caption2">{author.category.name}</UserCategory>
      </UserInfo>
    </AuthorWidgetContainer>
  )
}

export default AuthorWidget
