import Image, { StaticImageData } from 'next/image'

import AuthorWidget from '@/entities/AuthorWidget/ui'
import WatchingCounter from '@/entities/WatchingCounter/ui'
import { AuthorPreview } from '@/shared/types/author'
import Tag from '@/shared/ui/Tag'

import {
  ChannelCounter,
  DescriptionBlock,
  Divider,
  LiveChannelCardContainer,
  PreviewImageWrapper,
  Title,
  VideoDescription,
} from './styles'

type LiveChannelCardProps = {
  title: string
  author: AuthorPreview
  watchingCounter: number
  previewImage: StaticImageData
}

const LiveChannelCard = ({
  title,
  author,
  watchingCounter,
  previewImage,
}: LiveChannelCardProps) => {
  return (
    <LiveChannelCardContainer>
      <PreviewImageWrapper>
        <Image fill src={previewImage} alt="Preview image channel" />
      </PreviewImageWrapper>
      <DescriptionBlock>
        <VideoDescription>
          <Title variant="h6">{title}</Title>
          <AuthorWidget author={author} />
        </VideoDescription>
        <Divider />
        <ChannelCounter>
          <Tag />
          <WatchingCounter count={watchingCounter} />
        </ChannelCounter>
      </DescriptionBlock>
    </LiveChannelCardContainer>
  )
}

export default LiveChannelCard
