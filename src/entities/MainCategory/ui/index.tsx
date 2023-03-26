import CategoryTag from '@/entities/CategoriesTag'
import WatchingCounter, {
  WatchingCounterVariants,
} from '@/entities/WatchingCounter'

import {
  Content,
  FollowButtonStyled,
  MainCategoryContainer,
  TagsList,
  Title,
} from './styles'

type MainCategoryProps = {
  name: string
  tags: {
    id: number
    title: string
  }[]
  viewers: number
}

const MainCategory = ({ name, tags, viewers }: MainCategoryProps) => {
  return (
    <MainCategoryContainer>
      <Content>
        <TagsList>
          {tags.map((item) => (
            <CategoryTag key={item.id} title={item.title} />
          ))}
        </TagsList>
        <Title variant="h5">{name}</Title>
        <WatchingCounter
          variant={WatchingCounterVariants.VIEWERS}
          count={viewers}
        />
        <FollowButtonStyled width="131px" variant="static" />
      </Content>
    </MainCategoryContainer>
  )
}

export default MainCategory
