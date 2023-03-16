import { StaticImageData } from 'next/image'

import { Category } from './category'

export type AuthorPreview = {
  id: string
  name: string
  category: Category
  avatarImg: StaticImageData
  isVerify: boolean
}
