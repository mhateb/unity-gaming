import Head from 'next/head'

import {
  ContainerWithUpperBar,
  Content,
  TrendingPageContainer,
} from '@/appSlice/pagesStyles/following.styles'
import CategoriesWidget from '@/widgets/CategoriesWidget/ui'
import FromChannelsYouFollow from '@/widgets/FromChannelsYouFollow'
import GamesWidget from '@/widgets/GamesWidget/ui'
import LiveMatches from '@/widgets/LiveMatches/ui'
import RecommendedVideos from '@/widgets/RecommendedVideos'
import Sidebar from '@/widgets/Sidebar'
import UpperBar from '@/widgets/UpperBar'

const Following = () => {
  return (
    <>
      <Head>
        <title>Unity Gaming | Following</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TrendingPageContainer>
        <Sidebar />
        <ContainerWithUpperBar>
          <UpperBar />
          <Content>
            <FromChannelsYouFollow />
            <GamesWidget />
            <LiveMatches />
            <RecommendedVideos title={'Today Videos'} />
            <CategoriesWidget title={'🔥 Popular Categories'} />
          </Content>
        </ContainerWithUpperBar>
      </TrendingPageContainer>
    </>
  )
}

export default Following
