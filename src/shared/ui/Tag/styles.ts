import styled from 'styled-components'

import Typography from '@/shared/ui/Typography'

export const TagContainer = styled.div`
  height: 26px;
  background-color: ${(props) => props.theme.colors.accent02.shades[1]};
  border-radius: 8px;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 14px;
  padding-right: 14px;
`

export const TagText = styled(Typography)`
  color: white;
`
