import styled from 'styled-components'

import Typography from '@/shared/ui/Typography'

export const WatchingCounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const Indicator = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: ${(props) => props.theme.colors.secondary.main};
`

export const CounterText = styled(Typography)`
  color: ${(props) => props.theme.colors.darkGrey.shades[1]};
`
