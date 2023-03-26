import MainCategory from '@/entities/MainCategory'
import SmallCategory from '@/entities/SmallCategory'
import SmallCategoryImage1 from '@/shared/images/small-category-1.png'
import SmallCategoryImage2 from '@/shared/images/small-category-2.png'
import SmallCategoryImage3 from '@/shared/images/small-category-3.png'

import {
  CategoriesWidgetContainer,
  Content,
  Header,
  SmallCategoryList,
  Title,
} from './styles'

const mainCategory = {
  name: 'League of Legends',
  tags: [
    {
      id: 0,
      title: 'MOBA',
    },
    {
      id: 1,
      title: 'ESport',
    },
  ],
  viewers: 4.9,
}

const smallCategories = [
  {
    id: 0,
    title: 'Fortnite',
    viewersCount: 4.9,
    img: SmallCategoryImage1,
  },
  {
    id: 1,
    title: 'Call Of Duty',
    viewersCount: 125,
    img: SmallCategoryImage2,
  },
  {
    id: 2,
    title: 'Call Of Duty',
    viewersCount: 39,
    img: SmallCategoryImage3,
  },
]

const CategoriesWidget = () => {
  return (
    <CategoriesWidgetContainer>
      <Header>
        <Title variant="h5">Popular Categories</Title>
      </Header>
      <Content>
        <MainCategory {...mainCategory} />
        <SmallCategoryList>
          {smallCategories.map((item) => (
            <SmallCategory key={item.id} {...item} />
          ))}
        </SmallCategoryList>
      </Content>
    </CategoriesWidgetContainer>
  )
}

export default CategoriesWidget
