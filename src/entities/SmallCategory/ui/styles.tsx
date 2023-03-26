import styled from 'styled-components'

import FollowButton from '@/features/FollowButton/ui'
import Typography from '@/shared/ui/Typography'

export const SmallCategoryContainer = styled.div`
  height: 204px;
  width: 512px;
  border-radius: 24px;
  display: flex;
  gap: 24px;
  padding: 8px;
  background-color: ${(props) => props.theme.colors.background.bg2};
`

export const ImageWrapper = styled.div`
  position: relative;
  height: 188px;
  width: 240px;
  border-radius: 24px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
`

export const SmallCategoryTag = styled.div`
  height: 24px;
  width: fit-content;
  padding-left: 22px;
  padding-right: 22px;
  border-radius: 8px;
  background-color: rgb(108, 93, 211, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
`

export const TagText = styled(Typography)`
  color: ${(props) => props.theme.colors.secondary.main};
`

export const Title = styled(Typography)`
  color: white;
  margin-bottom: 8px;
`

export const FollowButtonStyled = styled(FollowButton)`
  margin-top: 12px;
`
