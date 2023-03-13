import styled from 'styled-components'

export const NotificationButtonContainer = styled.div`
  cursor: pointer;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

export const CounterWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 32px;
  background-color: #ff544d;
  border-radius: 100%;
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const CounterText = styled.span`
  color: white;
  font-size: 12px;
  font-weight: 500;
`
