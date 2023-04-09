import { StaticImageData } from 'next/image'

import { AuthorPreview } from './author'

export type TopTrendingStreamType = {
  id: number
  img: StaticImageData
  title: string
  counters: {
    watching: number
    last_active: number
  }
  author: AuthorPreview
}
