import styled from 'styled-components'

import Typography from '@/shared/ui/Typography'

export const CategoryTagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(108, 93, 211, 0.5);
  border-radius: 8px;
  padding-left: 19px;
  padding-right: 19px;
  height: 24px;
  width: fit-content;
`

export const TagText = styled(Typography)`
  color: white;
  font-weight: bold;
`
