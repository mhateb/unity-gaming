import styled from 'styled-components'

import FollowButton from '@/features/FollowButton/ui'
import MainCategoryBg from '@/shared/images/main-category-bg.png'
import Typography from '@/shared/ui/Typography'

export const MainCategoryContainer = styled.div`
  background-image: url(${MainCategoryBg.src});
  background-position: 3% 4%;
  background-size: 108%;
  background-repeat: no-repeat;
  height: 676px;
  width: 512px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding-left: 40px;
  padding-bottom: 32px;
`

export const Content = styled.div``

export const TagsList = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 8px;
`

export const Title = styled(Typography)`
  color: white;
  margin-bottom: 8px;
`

export const FollowButtonStyled = styled(FollowButton)`
  margin-top: 16px;
`
