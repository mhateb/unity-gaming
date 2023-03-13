import styled from 'styled-components'

import Typography from '../Typography'

export const StreamOptionContainer = styled.div`
  display: flex;
  align-items: center;
`

export const OptionText = styled(Typography)`
  color: white;
`

export const OptionContent = styled.div`
  display: flex;
  align-items: center;
`

export const IconWrapper = styled.div`
  margin-right: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: 24px;
    height: 24px;
  }
`
