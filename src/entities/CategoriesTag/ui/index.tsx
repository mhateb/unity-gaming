import { CategoryTagContainer, TagText } from "./styles";

type CategoryTagProps = {
	title: string;
}

const CategoryTag = ({ title }: CategoryTagProps) => {
	return (
		<CategoryTagContainer>
			<TagText variant="caption1">{title}</TagText>
		</CategoryTagContainer>
	)
}

export default CategoryTag