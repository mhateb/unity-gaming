import styled from 'styled-components'

export const TrendingPageContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background.bg1};
  display: flex;
`

export const ContainerWithUpperBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  padding: 64px;
  max-width: 1184px;
`
