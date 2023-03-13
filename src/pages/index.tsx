import Head from 'next/head'

import {
  ContainerWithUpperBar,
  IndexPageContainer,
} from '@/appSlice/pagesStyles/index.styles'
import BannerStreams from '@/widgets/BannerStreams/ui'
import Sidebar from '@/widgets/Sidebar/ui'
import UpperBar from '@/widgets/UpperBar/ui'

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IndexPageContainer>
        <Sidebar />
        <ContainerWithUpperBar>
          <UpperBar />
          <BannerStreams />
        </ContainerWithUpperBar>
      </IndexPageContainer>
    </>
  )
}

export default Home
