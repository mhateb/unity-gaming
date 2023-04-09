import styled from 'styled-components'

import Typography from '@/shared/ui/Typography'

import { WatchingCounterVariants } from '.'

export const WatchingCounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const Indicator = styled.div<{ variant: WatchingCounterVariants }>`
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: ${(props) => {
    if (props.variant === WatchingCounterVariants.WATCHING)
      return props.theme.colors.secondary.main
    if (props.variant === WatchingCounterVariants.VIEWERS)
      return props.theme.colors.others[6]
    if (props.variant === WatchingCounterVariants.LAST_ACTIVE)
      return props.theme.colors.others[6]
    if (props.variant === WatchingCounterVariants.AUTHOR_WATCHING)
      return props.theme.colors.accent02.shades[2]
  }};
`

export const CounterText = styled(Typography)`
  color: ${(props) => props.theme.colors.darkGrey.shades[1]};
`
