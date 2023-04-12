import { StaticImageData } from 'next/image'

export type TrendingGameType = {
  id: number
  title: string
  description: string
  imgPreview: StaticImageData
}

export type GameCardType = {
  id: number
  img: StaticImageData
  title: string
  category: string
  countViewers: number
}
