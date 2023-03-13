import UpperBarNotificationsIcon from '@/shared/icons/upper-bar-notifications'

import {
  CounterText,
  CounterWrapper,
  NotificationButtonContainer,
} from './styles'

const NotificationButton = () => {
  return (
    <NotificationButtonContainer>
      <CounterWrapper>
        <CounterText>2</CounterText>
      </CounterWrapper>
      <UpperBarNotificationsIcon />
    </NotificationButtonContainer>
  )
}

export default NotificationButton
